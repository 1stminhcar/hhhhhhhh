module.exports = {
    name: "ban",
    description: "ban some one with 1 shot",
     botPerms: ["MANAGE_MESSAGES"],
    userPerms: ["MANAGE_MESSAGES"],
   options: [
                {
                    name: 'violator',
                    description: 'the violator',
                    type: "USER",
                    
                },
                {
                    name: 'reason',
                    description: 'reason',
                    type: "STRING",
                    
                }
            ],
             run: async(client, interaction, args) => {
               let reason = interaction.options.getString('reason');
    if (!reason) reason = "Unspecified";

    const target = interaction.options.getUser('violator') || interaction.member;

    if (!target) {
      return interaction.reply(
        `**${interaction.member.displayname}**, Please mention the person who you want to ban.`
      );
    }

    if (target.id === interaction.member.id) {
      return interaction.reply(
        `**${interaction.member.displayname}**, You can not ban yourself!`
      );
    }
    if (target.id === message.guild.ownerId) {
      return interaction.reply("You cannot Ban The Server Owner");
    }

    let embed = new discord.MessageEmbed()
      .setTitle("Action : Ban")
      .setDescription(`Banned ${target} (${target.id})\nReason: ${reason}`)
      .setColor("#ff2050")
      .setThumbnail(target.avatarURL)
      .setFooter(`Banned by ${interaction.member.tag}`);

    target
      .ban({
        reason: reason,
      })
      .then(() => {
        interaction.reply({ embeds: [embed] });
      });
  }
}
