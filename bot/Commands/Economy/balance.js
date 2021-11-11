module.exports = {
  name: "balance",
  description: "Testing",
  run: async (client, message, args) => {
    let member = message.mentions.members.first() || message.author

        let balance = client.eco.balance.fetch(member.id, message.guild.id)
        let bank = client.eco.bank.fetch(member.id, message.guild.id)

        message.reply(`**${member.username}**'s Balance:\nCash: **${balance}** coins.\nBank: **${bank}** coins.`)
  }
}