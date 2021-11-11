const Discord = module.require("discord.js");

module.exports = {
  name: "kiss",
  description: "Tells you a fortune",
  options: [
      {
          name: "who",
          description: "who to kiss?",
          type: 'USER',
      }
  ],
  run: async (client, interaction, args) => {
  const optionuser = interaction.options.getUser('who')
  const user = optionuser.id || interaction.member.user.id
    await interaction.reply(
      `<@${interaction.member.user.id}> kissed <@${user}>`
    );
  },
};
