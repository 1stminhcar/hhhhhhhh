const Discord = module.require("discord.js");
const Levels = require("discord.js-leveling");

module.exports = {
  name: "level",
  description: "level",
  options: [
      {
        name: "name",
        description: "give da bot da name to check",
        type: 'USER',
      }
  ],
  run: async (client, interaction, args) => {
     const target = interaction.options.getUser('name') || interaction.member.user; // Grab the target.

const user = await Levels.fetch(target.id, interaction.guild.id); // Selects the target from the database.

if (!user) return interaction.reply("Seems like this user has not earned any xp so far."); // If there isnt such user in the database, we send a message in general.

interaction.reply(`> **${target.username}** is currently level ${user.level}.`); // We show the level.
  },
};
