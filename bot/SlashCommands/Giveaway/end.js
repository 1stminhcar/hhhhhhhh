const ms = require('ms');
module.exports = {
  name: "end",
  description: "end a giveaway",
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
        client.giveawaysManager.end(messageId).then(() => {
            interaction.channel.send('Success! Giveaway ended!');
        }).catch((err) => {
            interaction.channel.send(`An error has occurred, please check and try again.\n\`${err}\``);
        });
    }
};