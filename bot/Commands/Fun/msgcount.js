const Discord = module.require("discord.js");
const prefixModel = require("../../database/guildData/prefix");
module.exports = {
  name: "msgcount",
  usage: "msgcount <true|false>",
  description: "toggle the message count module",
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
        .send(`Usage: ${PREFIX}msgcount <true|false>`)
        .then((msg) =>setTimeout(() => msg.delete(), 2300));

    // If the guild isn't in the JSON file yet, set it up.
    if (!guilds[message.guild.id]) guilds[message.guild.id] = { messageCount: 1 };
    // Otherwise, add one to the guild's message count.
    else guilds[message.guild.id].messageCount++;

    // Write the data back to the JSON file, logging any errors to the console.
    try {
      message.channel.send('testing')
      fs.writeFileSync('./guildsmsg.json', JSON.stringify(guilds)); // Again, path may vary.
    } catch(err) {
      console.error(err);
    }
  },
};
