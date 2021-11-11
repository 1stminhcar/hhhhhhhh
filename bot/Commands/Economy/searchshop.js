module.exports = {
  name: "searchshop",
  description: "Testing",
  run: async (client, message, args) => {
     if (!args[0]) return message.reply('Specify an item ID or name.')
        const item = client.eco.shop.searchItem(args[0], message.guild.id);
        if (!item) return message.reply(`Cannot find item ${args[0]}.`);
        return message.reply(`Item info:\nID: **${item.id}**\nName: **${item.itemName}**\nPrice: **${item.price}** coins\nDesciption: **${item.description}**\nMessage on use: **${item.message}**\nMax amount in inventory: **${item.maxAmount || Infinity}**. Role: ${item.role || '**This item don\'t give you a role.**'}`)
  }
}