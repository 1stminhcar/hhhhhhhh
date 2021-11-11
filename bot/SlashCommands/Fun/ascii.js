const figlet = require("figlet");

module.exports = {
  name: "ascii",
  description: "ascii smth",
  options: [
        {
            name: "text",
            description: "Text",
            type: "STRING",
            required: true
        }
    ],
  run: async (client, interaction, args) => {
    let text = args.join(" ");
    if (!text) {
      return interaction.reply(`\`Usage: =ascii <msg>\``);
    }
    let maxlen = 20;
    if (text.length > 20) {
      return interaction.reply(
        `Please put text that has 20 characters or less because the conversion won't be good!`
      );
    }
    // AGAIN, MAKE SURE TO INSTALL FIGLET PACKAGE!
    figlet(text, function (err, data) {
      interaction.reply(data, {
        code: "AsciiArt",
      });
    });
  },
};
