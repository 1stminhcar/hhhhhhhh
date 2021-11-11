const Discord = module.require("discord.js");
const Jimp = require("jimp");

module.exports = {
name: "achievement",
    description: "Give you your achievement [J4F]",
    options: [
        {
            name: "text",
            description: "Text",
            type: "STRING",
            required: true
        }
    ],
   run: async (client, interaction, args) => {

  if (interaction.channel.type === "dm") return;
    let text = interaction.options.getSting('text');
    const link = await client.images.image.achievement({ text: text })
    interaction.reply({
      files: [
        {
          attachment: link
        },
      ],
    });
  },
};
    
