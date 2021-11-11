module.exports = {
  name: "work",
  description: "Testing",
  run: async (client, message, args) => {
    let work = client.eco.rewards.work(message.author.id, message.guild.id)
        if (!work.status) return message.reply(`You have already worked! Time left until next work: **${work.value.days}** days, **${work.value.hours}** hours, **${work.value.minutes}** minutes and **${work.value.seconds}** seconds.`)
        message.reply(`You worked hard and earned **${work.pretty}** coins!`)
  }
}