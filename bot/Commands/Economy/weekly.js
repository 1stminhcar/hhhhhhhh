module.exports = {
  name: "weekly",
  description: "Testing",
  run: async (client, message, args) => {
   let weekly = client.eco.rewards.weekly(message.author.id, message.guild.id)
        if (!weekly.status) return message.reply(`You have already claimed your weekly reward! Time left until next claim: **${weekly.value.days}** days, **${weekly.value.hours}** hours, **${weekly.value.minutes}** minutes and **${weekly.value.seconds}** seconds.`)
        message.reply(`You have received **${weekly.reward}** weekly coins!`)
  }
}