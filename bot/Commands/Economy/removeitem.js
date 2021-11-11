module.exports = {
  name: "removeitem",
  description: "Testing",
  run: async (client, message, args) => {
        if (!args[0]) return message.reply('Specify an item ID or name.');
        const item = clien.eco.shop.searchItem(args[0], message.guild.id)
        if (!item) return message.reply(`Cannot find item ${args[0]}.`)
       client.eco.shop.removeItem(args[0], message.guild.id);
        return message.reply('Item successfully removed!');
  }
}