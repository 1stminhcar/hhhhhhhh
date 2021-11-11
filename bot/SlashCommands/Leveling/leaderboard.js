const Discord = module.require("discord.js");
const Levels = require("discord.js-leveling");

module.exports = {
  name: "xpleaderboard",
  description: "leaderboard",
  options: null,
  run: async (client, interaction, args) => {
   const rawLeaderboard = await Levels.fetchLeaderboard(interaction.guild.id, 10); // We grab top 10 users with most xp in the current server.

if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true); // We process the leaderboard.

const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`); // We map the outputs.

interaction.reply(`**Leaderboard**:\n\n${lb.join("\n\n")}`);
  },
};
