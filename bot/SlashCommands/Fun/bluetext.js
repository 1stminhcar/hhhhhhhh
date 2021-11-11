const Discord = module.require("discord.js");

module.exports = {
  name: "bluetext",
  description: "Colors your text with blue color",
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
    interaction.reply(`\`\`\`yaml\n${text}\n\`\`\``);
  },
};
