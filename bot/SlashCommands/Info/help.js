const { MessageEmbed, MessageActionRow, MessageSelectMenu} = require("discord.js");

module.exports = {
  name: "help",
  description: "Shows the Help Menu",
  options: [
    {
      name: "commands",
      description: "Shows the Help Menu",
      type: 'STRING'
    }
  ],
  run: async (client, interaction, args) => {

   let commandInfo = await interaction.options.getString("commands")

    if (commandInfo) {
      let cmd = client.commands.get(commandInfo);

      if (!cmd) {
        return interaction.reply("Couldn't find that command!")
      } else if (cmd) {
        let description = cmd.description ? cmd.description : "No description available.";
        let aliases = cmd.aliases ? cmd.aliases.join(", ") : "No aliases available.";
        let botPerms = cmd.botPerms ? cmd.botPerms.join(", ") : "No permissions required.";
        let userPerms = cmd.userPerms ? cmd.userPerms.join(", ") : "No permissions required.";
        let ownerOnly = cmd.ownerOnly ? "Yes" : "No";
        let nsfwOnly = cmd.nsfwOnly ? "Yes" : "No";
        let cooldown = cmd.cooldown ? cmd.cooldown : "No cooldown.";
        let isDisabled = cmd.isDisabled ? "Yes" : "No";

        let helpEmbed = new MessageEmbed()
        .setTitle(`Help for **${cmd.name}**`)
        .addField("Name", `${cmd.name}`, true)
        .addField("Description", `${description}`, true)
        .addField("Aliases", `${aliases}`, true)
        .addField("Owner Only", `${ownerOnly}`, true)
        .addField("NSFW Only", `${nsfwOnly}`, true)
        .addField("Cooldown", `${cooldown}`, true)
        .addField("Disabled", `${isDisabled}`, true)
        .addField("Required Bot Permissions", `${botPerms}`, true)
        .addField("Required User Permissions", `${userPerms}`, true)
        .setColor("GREEN")

        return interaction.reply({ embeds: [helpEmbed], ephemeral: true });
      }
    } else {

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

    let helpEmbed = new MessageEmbed()
    .setTitle('Help Menu')
    .setDescription('Choose an option from the menu below!')
    .setColor("GREEN")

    interaction.reply({ embeds: [helpEmbed], components: [helpMenu]})
    }
  }
};
