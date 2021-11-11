const Discord = module.require("discord.js");

module.exports = {
  name: "clap",
  usage: "clap <text> <text2>",
  description: "Add clap emoji between each word",
  run: async (client, message, args) => {
    const { DEFAULT_PREFIX } = require("../../config.json")
    const prefixData = await prefixModel.findOne({
      GuildID: message.guild.id,
    }).catch(err=>console.log(err))
  
    if (prefixData) {
      var PREFIX = prefixData.Prefix
    } else if (!prefixData) {
      PREFIX = DEFAULT_PREFIX
    }
    client.prefix = PREFIX;
    if (!args.length) {
      return message.channel.send(`Usage: ${PREFIX}clap <msg>`);
    }
    message.channel.send(args.join(" ").replace(/ /g, " 👏 "));
  },
};
