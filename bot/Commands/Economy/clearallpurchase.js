module.exports = {
  name: "clearallpurchase",
  description: "Testing",
  run: async (client, message, args) => {
     const cleared = client.eco.shop.clearHistory(message.author.id, message.guild.id)
        if (!cleared) return message.reply('Couldn\'t clear your purchases history: Your history is already empty!')
        return message.reply('Your purchases history was successfully cleared!')
  }
}