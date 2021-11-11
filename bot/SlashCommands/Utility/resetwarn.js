const db = require("quick.db")
module.exports = {
    name: "resetwarning",
    description: "clear all warning",
     botPerms: ["ADMINISTRATOR"],
    userPerms: ["ADMINISTRATOR"],
   options: [{
                    name: 'who',
                    description: 'who to clear?',
                    type: "USER",
                    }
                ],
             run: async(client, interaction, args) => {
                
    
    const user = interaction.options.getUser('who')
    if(!user) {
    return interaction.reply("Please mention the person whose warning you want to reset")
    }
    if(user.bot) {
      return interaction.reply("Bot are not allowed to have warnings")
    }
    let warnings = db.get(`warnings_${interaction.guild.id}_${user.id}`)
    
    if(warnings === null) {
      return interaction.reply(`${user.username} do not have any warnings`)
    }
    
    db.delete(`warnings_${interaction.guild.id}_${user.id}`)
    user.send(`Your all warnings are reseted by ${interaction.member.username} from ${interaction.guild.name}`)
    await interaction.reply(`Reseted all warnings of ${user.username}`)
  }
}
