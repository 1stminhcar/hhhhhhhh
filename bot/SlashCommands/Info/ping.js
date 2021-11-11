const discord = require("discord.js");

module.exports = {
  name: "ping",
  description: "Get the bot's ping!",
  options:null,
  run: async (client, interaction, args) => {
    
    let embed1 = new discord.MessageEmbed()
    .setDescription("Looks like the bot is slow.")
    .setColor("RANDOM")
     let embed2 = new discord.MessageEmbed()
    .setDescription("Looks like the bot is blazing fast.")
    .setColor("RANDOM")
    let embed3 = new discord.MessageEmbed()
    .setDescription("Looks like the bot is fast enough to use.")
    .setColor("RANDOM")
    let embed4 = new discord.MessageEmbed()
    .setDescription("Looks like the bot is super slow.")
    .setColor("RANDOM")
    
 if (Math.round(client.ws.ping) > 200)
    return await interaction.reply({
        embeds: [embed1]
      })
     else if (Math.round(client.ws.ping) < 50)
    return await interaction.reply({
        embeds: [embed2]
      })
       else if (Math.round(client.ws.ping) < 100)
    return await interaction.reply({
        embeds: [embed3]
      })
      else if (Math.round(client.ws.ping) > 1000)
    return await interaction.reply({
        embeds: [embed4]
      })
           
 let end = Date.now();
 
        let embed = new discord.MessageEmbed()
          .setTitle("Pong!")
          .addField("API Latency", `${Math.round(client.ws.ping)}ms`, true)
          .setColor("RANDOM");

        interaction.editReply({ embeds: [embed] }).catch((e) => interaction.followUp(e));
      },
}
