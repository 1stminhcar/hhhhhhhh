const Discord = module.require("discord.js");
const djsGames = require('djs-games')

module.exports = {
  name: "guessthenumber",
  description: "Guess The Number.",
  run: async (client, message, args) => {
    let weekly = client.eco.rewards.weekly
    const guessTheNumber = new djsGames.GuessTheNumber()
    guessTheNumber.startGame(message)
  },
};
