const Discord = module.require("discord.js");

module.exports = {
  name: "timer",
  description: "testing",
  options: [
      {
          name: "number",
          description: "uhhh",
          type: 'NUMBER',
      }
  ],
  run: async (client, interaction, args) => {
  const duration = interaction.options.getNumber('number') || 5;
 interaction.reply("testing");
   }
}
