const Discord = module.require("discord.js");
const prefixModel = require("../../database/guildData/prefix");
module.exports = {
  name: "8ball",
  usage: "8ball <text>",
  description: "Tells you a fortune",
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
    if (args.length == 0)
      return message.channel
        .send(`Usage: ${PREFIX}8ball <msg>`)
        .then((msg) =>setTimeout(() => msg.delete(), 2300));

    var fortunes = [
      "Yes.",
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes definelty.",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Outlook good.",
      "Signs point to yes.",
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now...",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don't count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good...",
      "Very doubtful.",
    ];
    await message.channel.send(
      fortunes[Math.floor(Math.random() * fortunes.length)]
    );
  },
};
