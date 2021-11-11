module.exports = {
  name: "daily",
  description: "Testing",
  run: async (client, message, args) => {
    const daily = client.eco.rewards.daily(message.author.id, message.guild.id)
        if (!daily.status) return message.reply(`You have already claimed your daily reward! Time left until next claim: **${daily.value.days}** days, **${daily.value.hours}** hours, **${daily.value.minutes}** minutes and **${daily.value.seconds}** seconds.`)
        message.reply(`You have received **${daily.reward}** daily coins!`)
  }
}