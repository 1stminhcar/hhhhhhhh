module.exports = {
  name: "inventory",
  description: "Testing",
  run: async (client, message, args) => {
      const inv = client.eco.shop.inventory(message.author.id, message.guild.id);
        if (!inv.length) return message.reply('You don\'t have any item in your inventory.');
        return message.reply(inv.map((x, i) => `ID: ${i + 1}: ${x.itemName} - ${x.price} coins (${x.date})`).join('\n'))
  }
}