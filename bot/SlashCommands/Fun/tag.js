const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "tag",
    description: "Testing!",
  options: [ {name: "query",
                    description: "Testing!",
                    type: 'STRING',
                    required: true,
                    choices: [
                        {
                            name: "This",
                            value: "this"
                        },
                        {
                            name: "Is",
                            value: "is"
                        },
                        {
                            name: "a",
                            value: "a"
                        },
                        {
                            name: "Deadchat",
                            value: "dedchat"
                        }
                    ],
                    },
                    {name: "who",
                    description: "Testing!",
                    type: 'USER',
                                      }
                    ],  
    run: async(client, interaction, args) => {
        const arg = interaction.options.getString("query", false);
        const whoarg = interaction.options.getUser("who") || interaction.member
         switch (arg) {
      case "this":
         interaction.reply(`This is what are u talking about,right <@${whoarg.id}>?`)
        break;
      case "is":
        interaction.reply(`hmmm,<@${whoarg.id}>?`);
        break;
      case "a":
                interaction.reply(`a box is on your head,<@${whoarg.id}>!`);
        break;
      case "dedchat":
    interaction.reply(`yep it is,<@${whoarg.id}>.`);
        break;
      default:
        return interaction.reply("bruh")    }
        
        }
        }
