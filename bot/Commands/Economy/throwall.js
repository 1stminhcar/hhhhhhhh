module.exports = {
  name: "throwall",
  description: "Testing",
  run: async (client, message, args) => {
     client.eco.shop.clearInventory(message.author.id, message.guild.id);
        return message.reply('all your item in inventory was successfully thrown away!');
  }
}