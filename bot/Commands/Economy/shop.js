module.exports = {
  name: "shop",
  description: "Testing",
  run: async (client, message, args) => {
      const shop = client.eco.shop.list(message.guild.id);
        if (!shop.length) return message.reply('No items in the shop!')
        message.reply(shop.map(item => `ID: **${item.id}** - **${item.itemName}** (**${item.price}** coins), description: **${item.description}**, max amount in inventory: **${item.maxAmount || Infinity}**. Role: ${item.role || '**This item don\'t give you a role.**'}`).join('\n'))
  }
}