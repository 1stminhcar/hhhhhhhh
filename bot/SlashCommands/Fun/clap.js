const Discord = module.require("discord.js");

module.exports = {
  name: "clap",
  description: "Add a Clap👏 btw word",
  options: [
        {
            name: "text",
            description: "the text",
            type: "STRING",
            required: true
        }
    ],
run: async (client, interaction, args) => {
    if (!args.length) {
      return interaction.reply("`Usage: =clap <msg>`");
    }
    interaction.reply(args.join(" ").replace(/ /g, " 👏 "));
  },
};