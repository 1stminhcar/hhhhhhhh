module.exports = {
    name: "purge",
    description: "purge",
     botPerms: ["MANAGE_MESSAGES"],
    userPerms: ["MANAGE_MESSAGES"],
             run: async(client, message, args) => {
       const msgnum = args.join(" ");
       const reply = await message.reply('Purging...');
       message.delete(reply)
    const delmsg = await message.channel.bulkDelete(msgnum);
    message.channel.send({ content: 'Done i have deleted '+ msgnum + ' message'});
   }
}