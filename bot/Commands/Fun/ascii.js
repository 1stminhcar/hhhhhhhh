const figlet = require("figlet"); // MAKE SURE TO INSTALL FIGLET PACKAGE OR CODE WONT WORK
const prefixModel = require("../../database/guildData/prefix");
const { DEFAULT_PREFIX } = require("../../config.json");
module.exports = {
  name: "ascii",
  aliases: [],
  category: "Fun",
  usage: "ascii <text>",
  description: "Returns provided text in ascii format.",
  run: async (client, message, args) => {
    const prefixData = await prefixModel.findOne({
      GuildID: message.guild.id,
    }).catch(err=>console.log(err))
  
    if (prefixData) {
      var PREFIX = prefixData.Prefix
    } else if (!prefixData) {
      PREFIX = DEFAULT_PREFIX
    }
    client.prefix = PREFIX;
    let text = args.join(" ");
    if (!text) {
      return message.channel.send(`\`Usage: ${PREFIX}ascii <msg>\``);
    }
    let maxlen = 20;
    if (text.length > 20) {
      return message.channel.send(
        `Please put text that has 20 characters or less because the conversion won't be good!`
      );
    }
    // AGAIN, MAKE SURE TO INSTALL FIGLET PACKAGE!
    figlet(text, function (err, data) {
      message.channel.send(data, {
        code: "AsciiArt",
      });
    });
  },
};
