const Discord = module.require("discord.js");

module.exports = {
name: "avatar",
    description: "Give you your avatar [J4F]",
    options: null,
   run: async (client, interaction, args) => {

  const useravatar = interaction.member.user.avatarURL()  
     const embed = new Discord.MessageEmbed()
      .setTitle("Here is your Avatar")
       .setImage(useravatar)
      .setColor("RANDOM");
    interaction.reply({ embeds: [embed] });
  },
};
    
