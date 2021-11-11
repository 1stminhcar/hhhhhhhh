const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require("discord.js");

module.exports = {
  name: "help",
  description: "Get the Command List",
  aliases: ["commands", "cmd", "h"],
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    
    let helpMenu = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId("help_menu")
      .setPlaceholder('Help Menu')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
          label: "Settings",
          description: "Change the bot settings",
          value: "settings",
          emoji: "🛠"
        },
        {
          label: "Economy",
          description: "$Grind Money$",
          value: "economy",
          emoji: "💸"
        },
         {
          label: "Activities",
          description: "get some fun",
          value: "activities",
          emoji: "🦾"
        },
        {
          label: "Fun",
          description: "Shows all the fun commands",
          value: "fun",
          emoji: "🎲"
        },
        {
          label: "Image",
          description: "Shows all the image commands",
          value: "image",
          emoji: "🖼"
        },
        {
          label: "Information",
          description: "Shows all the information commands",
          value: "info",
          emoji: "📢"
        },
        {
          label: "Moderation",
          description: "Shows all the moderation commands",
          value: "moderation",
          emoji: "🔒"
        },
        {
          label: "Music",
          description: "Shows all the Music commands!",
          value: "music",
          emoji: "🎵"
        },
        {
          label: "NSFW",
          description: "Shows all the NSFW commands",
          value: "nsfw",
          emoji: "🔞"
        },
        {
          label: "Utility",
          description: "Shows all the utility commands",
          value: "utility",
          emoji: "🔧"
        },
         {
          label: "Giveaway",
          description: "Free Stuff!",
          value: "giveaway",
          emoji: "🎁"
        },
        {
          label: "Leveling",
          description: "Level",
          value: "leveling",
          emoji: "⬆"
        },
        {
          label: "Games",
          description: "Shows all the game commands",
          value: "game",
          emoji: "🎮"
        }
      ])
    )
    let btn = 
      new MessageButton()
	.setCustomId('primary')
	.setLabel('Primary')
	.setStyle('PRIMARY')
  
    let editEmbed = new MessageEmbed()
    .setTitle('Help Menu')
    .setDescription('These Bad Boy are command category!')
    .setColor("GREEN")

    message.channel.send({ embeds: [editEmbed], components: [helpMenu]}).then(msg=>{
      setTimeout(async function () {
        await msg.delete();
      }, 180000)
    })
  }
};
