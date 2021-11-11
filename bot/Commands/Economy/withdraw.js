module.exports = {
  name: "withdraw",
  description: "Testing",
  run: async (client, message, args) => {
    const amount = args[0]
        const balance = client.eco.bank.fetch(message.author.id, message.guild.id)

        if (!amount) return message.reply('Specify an amount.')
        if (isNaN(amount)) return message.reply('Amount must be a number.')
        if (amount > balance) return message.channel.send(`You don\'t have enough money in your bank to send **${amount}** coins on your balance.`)

        client.eco.balance.add(amount, message.author.id, message.guild.id)
        client.eco.bank.subtract(amount, message.author.id, message.guild.id)

        message.reply(`Successfully sent **${amount}** on your balance!`)
  }
}