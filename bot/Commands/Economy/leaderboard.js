module.exports = {
  name: "leaderboard",
  description: "Testing",
  run: async (client, message, args) => {
    const lb = client.eco.balance.leaderboard(message.guild.id)
        if (!lb.length) return message.reply('Cannot generate a leaderboard: No one started working.')
        message.reply(`Money Leaderboard for **${message.guild.name}**\n-----------------------------------\n` + lb.map((x, i) => `${i + 1}. <@${x.userID}> - ${x.money} coins`).join('\n'))
  }
}