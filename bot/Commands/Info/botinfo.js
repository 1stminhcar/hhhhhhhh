/**
* READ THIS BEFORE YOU CHANGE THE CONTENT OF THIS COMMAND!
* You are not allowed to change lines about this repo in this command.
* You can change bot name and owner name, but not the source of this bot.
* You are also not allowed to remove the credits from the footer to the orginal owner from this bot.
* If you want to change the description, you will have to add the line that: "[YOUR BOT NAME] is an modified instance of Reaper-2.0 bot made by Simpleboy353.
* These points are not optional, but remarks from the dev team of Reaper-2.0.
*/

const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
  name: "botinfo",
  description: "Shows the bot info",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const duration = moment
      .duration(client.uptime)
      .format(" D [days], H [hrs], m [mins], s [secs]");

    let embed = new Discord.MessageEmbed()
      .setAuthor("NMDGTV Info", client.user.avatarURL())
      .setColor("RANDOM")
      .setDescription(
        `**Bot Name: **NMDGTV \n**Owner: **NotMinhDucGamingTV® \n**Total Categories: **11 \n**Total Commands: **${client.commands.size} \n**Users:** ${
          client.users.cache.size
        } \n**Servers:** ${client.guilds.cache.size} \n**Channels:** ${
          client.channels.cache.size
        }`
      )
      .addField(
        "About NMDGTV",
        "NMDGTV is an bot built based on open-source repo multi-purpose discord bot with features like moderation, music, logging, welcomer and so much more!\nYou can find the link to the [GitHub Repo Here](https://github.com/Simpleboy353/REAPER-2.0)"
      )
      .addField(
        "Some Useful Links",
        "**Get your own bot!** **[Here](https://github.com/Simpleboy353/REAPER-2.0)** \n**Need Help? Join repo owner ** **[Support/Development Server](https://discord.gg/YpbvvR9SX8)** **for assistance**"
      )
      .setFooter("Regards, NMDGTV Development Team");
    message.channel.send({ embeds: [embed] });
  },
};
