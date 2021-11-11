const ms = require('ms');
module.exports = {
  name: "edit",
  description: "edit a giveaway",
  options: [
      {
          name: "message_id",
          description: "time",
          type: 'STRING',
          required: true,
      },
      {
          name: "newprize",
          description: "prize",
          type: 'STRING',
          required: true,
      },
       {
          name: "duration",
          description: "time",
          type: 'STRING',
          required: true,
      },
       {
          name: "winners",
          description: "winners",
          type: 'INTEGER',
          required: true,
      },
  ],
  run: async (client, interaction, args) => {
   const messageId = interaction.options.getString('message_id');
   const duration =  interaction.options.getString('duration');
   const newprize =  interaction.options.getString('newprize');
        client.giveawaysManager.edit(messageId, {
            addTime: duration,
            newWinnerCount: messageId,
            newPrize: newprize
        }).then(() => {
            interaction.reply('Success! Giveaway updated!');
        }).catch((err) => {
            interaction.reply(`An error has occurred, please check and try again.\n\`${err}\``);
        });
    }
};