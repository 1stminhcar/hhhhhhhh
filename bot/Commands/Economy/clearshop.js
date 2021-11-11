module.exports = {
  name: "clearshop",
  description: "Testing",
  run: async (client, message, args) => {
     client.eco.shop.clear(message.guild.id)
        return message.reply('Shop was cleared successfully!')
  }
}