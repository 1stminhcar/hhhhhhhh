const db = require("quick.db")
module.exports = {
    name: "warning",
    description: "show someone warning",
     botPerms: ["ADMINISTRATOR"],
    userPerms: ["ADMINISTRATOR"],
   options: [{
                    name: 'who',
                    description: 'who to show?',
                    type: "USER",
                    }
                ],
             run: async(client, interaction, args) => {
     const user = interaction.options.getUser('who') || interaction.member
    
  
    let warnings = db.get(`warnings_${interaction.guild.id}_${user.id}`)
    
    
    if(warnings === null) warnings = 0;
    
    
    interaction.reply(`${user} have **${warnings}** warning(s)`)
    }
}
