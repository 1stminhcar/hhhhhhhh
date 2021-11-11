const Discord = module.require("discord.js");

module.exports = {
  name: "slap",
  description: "slap smb",
  options: [
        {
            name: "enemy",
            description: "the enemy",
            type: "MENTIONABLE",
        }
    ],
  run: async (client, interaction, args) => {
    let members = interaction.options.getMentionable('enemy');
   if (!members) {
      return interaction.reply("You need a mention a user");
    }
    const embed = new Discord.MessageEmbed()
    .setTitle(interaction.member.displayName + " slapped :raised_back_of_hand: " +
          members.displayName +
          ", " +
          members.displayName +
          " is now in the hospital! :hospital:")
      .setColor("RANDOM");
    await interaction.reply({ embeds: [embed] });
  },
};