const Discord = module.require("discord.js");

module.exports = {
  name: "howgay",
  description: "Just for fun command",
  options: [
    {
        name: "user",
        description: " who you want to be checked",
        type: "USER",
        required: true
    }
],
run: async (client, interaction, args) => {
let target = interaction.options.getUser('user')
  let rng = Math.floor(Math.random() * 101);

  const howgayembed = new Discord.MessageEmbed()
    .setTitle(`Gay Machine Calculator`)
    .setDescription(`${target.username} is ` + rng + "% Gay🌈")
    .setColor("RANDOM");

    interaction.reply({ embeds: [howgayembed] });
},
}
