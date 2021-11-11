module.exports = {
  name: "additem",
  description: "Testing",
  run: async (client, message, args) => {
    if (!args[0]) return message.reply('Specify an item name.');
        if (!args[1]) return message.reply('Specify a price.');
        client.eco.shop.addItem(message.guild.id, {
            itemName: args[0],
            price: args[1],
            message: args[2],
            description: args[3],
            maxAmount: args[4],
            role: args[5]
        })
        message.reply('Item successfully added!')
  }
}