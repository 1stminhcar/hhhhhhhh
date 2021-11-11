module.exports = {
  name: "inventory",
  description: "Testing",
  run: async (client, message, args) => {
      if (!args[0]) return message.channel.send('Specify an name or ID of item you have in your inventory.');
        const itemMessage = client.eco.shop.useItem(args[0], message.author.id, message.guild.id, bot);
        if (!itemMessage) return message.reply(`Cannot find item ${args[0]} in your inventory.`);
        return message.reply(itemMessage);
  }
}