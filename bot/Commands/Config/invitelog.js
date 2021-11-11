const prefixModel = require("../../database/guildData/invitelog");

module.exports = {
  name: "loginvite",
  description: "Log Invite!",
  userPerms: ["MANAGE_GUILD"],
  run: async (client, message, args) => {
  
    const data = await prefixModel.findOne({
      GuildID: message.guild.id,
    });

    if (!args[0])
      return message.channel.send("On Or Off?");

    if (args[0].length > 5)
      return message.channel.send(
        "On Or Off?"
      );

    if (data) {
      await prefixModel.findOneAndRemove({
        GuildID: message.guild.id,
      });

      message.channel.send(`The new prefix is now **\`${args[0]}\`**`);

      let newData = new prefixModel({
        Invitelogger: args[0],
        GuildID: message.guild.id,
      });
      newData.save();
    } else if (!data) {
      message.channel.send(`The new prefix is now **\`${args[0]}\`**`);

      let newData = new prefixModel({
        Invitelogger: args[0],
        GuildID: message.guild.id,
      });
      newData.save();
    }
  },
};