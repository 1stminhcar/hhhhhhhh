module.exports = {
  name: "banklb",
  description: "Testing",
  run: async (client, message, args) => {
    const lb = client.eco.bank.leaderboard(message.guild.id)
        if (!lb.length) return message.reply('Cannot generate a leaderboard: no one started saving.')
        message.reply(`Bank Leaderboard for **${message.guild.name}** [**${lb.length}**]\n-----------------------------------\n` + lb.map((x, i) => `${i + 1}. <@${x.userID}> - ${x.money} coins`).join('\n'))
  }
}