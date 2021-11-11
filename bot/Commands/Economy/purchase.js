module.exports = {
  name: "purchases",
  description: "Testing",
  run: async (client, message, args) => {
     const history = client.eco.shop.history(message.author.id, message.guild.id)
        if (!history.length) return message.reply('Your purchases history is empty.')
        return message.reply(history.map(x => `ID: ${x.id}: ${x.itemName} - ${x.price} coins (${x.date})`).join('\n'))
  }
}