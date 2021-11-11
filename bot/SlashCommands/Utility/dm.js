const Discord = require('discord.js')
module.exports = {
    name: "dm",
    description: "dm someone",
     botPerms: ["MANAGE_MESSAGES"],
    userPerms: ["MANAGE_MESSAGES"],
   options: [
                {
                    name: 'reciever',
                    description: 'the reciever',
                    type: "USER",
                    
                },
                {
                    name: 'message',
                    description: 'the Message',
                    type: "STRING",
                    
                }
            ],
             run: async(client, interaction, args) => {
               let msg = interaction.options.getString('message');
   const target = interaction.options.getUser('reciever') || interaction.member;
    if (!msg) return msg = "Hi";
    

    if (!target) {
      return interaction.reply("Enter an Name");
    }
    const embed = new Discord.MessageEmbed()
      .setTitle("Mail!")
      .setDescription(`${msg}`)
      .setFooter(`Regards, ${interaction.guild.name} Mod Team`)
      .setColor("RANDOM");

    target.send({ embeds: [embed] });
    interaction.reply('Sent the mail to '+ target)
  }
}
