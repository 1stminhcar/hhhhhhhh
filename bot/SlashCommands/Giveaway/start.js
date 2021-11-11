const ms = require('ms');
module.exports = {
  name: "start",
  description: "start a giveaway",
  options: [
      {
          name: "duration",
          description: "time",
          type: 'STRING',
          required: true,
      },
      {
          name: "winners",
          description: "ammount",
          type: 'INTEGER',
          required: true,
      },
      {
          name: "prize",
          description: "prize",
          type: 'STRING',
          required: true,
      },
      {
          name: "channel",
          description: "prize",
          type: 'CHANNEL',
         
      },
  ],
  run: async (client, interaction, args) => {
     const duration = interaction.options.getString('duration');
        const winnerCount = interaction.options.getInteger('winners');
        const prize = interaction.options.getString('prize');
        const channel = interaction.options.getChannel('channel') || interaction.channel;
        await interaction.reply("Done")
             client.giveawaysManager.start(channel, {
            duration: ms(duration),
            winnerCount,
            prize
        }).then((gData) => {
            console.log(gData); // {...} (messageId, end date and more)
        });
        // And the giveaway has started!
    }
};