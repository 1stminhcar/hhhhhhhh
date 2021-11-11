const Discord = module.require("discord.js");

module.exports = {
  name: "dab",
  usage: "dab <text>",
  description: "Adds dab emoji after each word",
  botPerms: ["USE_EXTERNAL_EMOJIS"],
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
      return message.channel.send(`Usage: ${PREFIX}dab <text>`);
    }
    message.channel.send(
      args.join(" ").replace(/ /g, " <a:emoji_9:726786422866182186> ")
    );
  },
};
