const Discord = module.require("discord.js");

module.exports = {
  name: "orangetext",
  description: "Colors your text with orange color",
  options: [
        {
            name: "text",
            description: "the text",
            type: "STRING",
            required: true
        }
    ],
  run: async (client, interaction, args) => {
    const text = args.join(" ");
    if (!text) {
      return interaction.reply("You need to enter some text");
    }
    interaction.reply(`\`\`\`fix\n${text}\n\`\`\``);
  },
};
