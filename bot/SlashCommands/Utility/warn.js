const db = require("quick.db")
module.exports = {
    name: "warn",
    description: "warn someone",
     botPerms: ["ADMINISTRATOR"],
    userPerms: ["ADMINISTRATOR"],
   options: [{
                    name: 'who',
                    description: 'who to warn?',
                    type: "USER",
                    },
                    {
                    name: 'reason',
                    description: 'reason?',
                    type: "STRING",
                    }
                ],
             run: async(client, interaction, args) => {
                
    
     const user = interaction.options.getUser('who')
    
    if(!user) {
      return interaction.reply("Please Mention the person to who you want to warn - warn @mention <reaosn>")
    }
    
    if(user.bot) {
      return interaction.reply("You can not warn bots")
    }
    
    if(interaction.member.id === user.id) {
      return interaction.reply("You can not warn yourself")
    }
    
    if(user.id === interaction.guild.owner.id) {
      return interaction.reply("You jerk, how you can warn server owner -_-")
    }
    
    const reason = interaction.options.getString('reason')
    
    if(!reason) {
      return interaction.reply("Please provide reason to warn - warn @mention <reason>")
    }
    
    let warnings = db.get(`warnings_${interaction.guild.id}_${user.id}`)
    
    
    if(warnings === null) {
      db.set(`warnings_${interaction.guild.id}_${user.id}`, 1)
      user.send(`You have been warned in **${interaction.guild.name}** for ${reason}`)
      await interaction.reply(`You warned **${interaction.mentions.users.first().username}** for ${reason}`)
    } else if(warnings !== null) {
        db.add(`warnings_${interaction.guild.id}_${user.id}`, 1)
       user.send(`You have been warned in **${interaction.guild.name}** for ${reason}`)
      await interaction.reply(`You warned **${interaction.mentions.users.first().username}** for ${reason}`)
    }
    
    }
}
