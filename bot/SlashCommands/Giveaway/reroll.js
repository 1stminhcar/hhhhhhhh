const ms = require('ms');
module.exports = {
  name: "reroll",
  description: "reroll a giveaway",
  options: [
      {
          name: "message_id",
          description: "time",
          type: 'STRING',
          required: true,
      }
     
  ],
  run: async (client, interaction, args) => {
    const messageId = interaction.options.getString('message_id');
        client.giveawaysManager.reroll(messageId).then(() => {
            interaction.reply('Success! Giveaway rerolled!');
        }).catch((err) => {
            interaction.reply(`An error has occurred, please check and try again.\n\`${err}\``);
        });
    }
};