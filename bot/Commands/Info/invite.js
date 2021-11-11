const Discord = require("discord.js");

module.exports = {
  name: "invite",
  description: "Get the bot's",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
      .setTitle("Invite Me")
      .setColor("RANDOM")
      .setDescription(
        "**Get NMDGTV's Invite Link [Here](https://discord.com/api/oauth2/authorize?client_id=892340813906968587&permissions=8&redirect_uri=https%3A%2F%2Fbotdashboard.minhducgaming.ihostfull.com%2Fthanks&scope=bot%20applications.commands)**\n**Need assistance? Join our [Support Server](https://discord.gg/qJ9tqBVgft) now!**"
      )
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({ embeds: [embed] });
  },
};
