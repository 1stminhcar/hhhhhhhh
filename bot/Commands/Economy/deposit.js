module.exports = {
  name: "work",
  description: "Testing",
  run: async (client, message, args) => {
    const amount = args[0]
        const balance = client.eco.balance.fetch(message.author.id, message.guild.id)

        if (!amount) return message.reply('Specify an amount.')
        if (isNaN(amount)) return message.reply('Amount must be a number.')
        if (amount > balance) return message.reply(`You don\'t have enough money on your balance to deposit **${amount}** coins.`)

        client.eco.balance.subtract(amount, message.author.id, message.guild.id)
        client.eco.bank.add(amount, message.author.id, message.guild.id)

        message.reply(`Successfully deposited **${amount}** coins!`)
  }
}