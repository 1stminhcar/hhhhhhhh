module.exports = {
    name: "purge",
    description: "purge",
     botPerms: ["MANAGE_MESSAGES"],
    userPerms: ["MANAGE_MESSAGES"],
   options: [
                {
                    name: 'number',
                    description: '1-100',
                    type: "NUMBER",
                    required: true
                },
                {
                    name: 'channel',
                    description: '1-100',
                    type: "CHANNEL",
                    
                }
            ],
             run: async(client, interaction, args) => {
               const channel = interaction.options.getChannel('channel')|| interaction.channel
       const msgnum = interaction.options.getNumber('number')
      const purgemsg = await interaction.reply('Purging...');
       interaction.deleteReply(purgemsg)
       channel.bulkDelete(msgnum);
    const donemsg = channel.send({ content: 'Done i have deleted '+ msgnum + ' message'});
  }
}
