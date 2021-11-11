const { MessageEmbed } = module.require("discord.js");
const ms = require("ms");
const discord = require("discord.js");

module.exports = {
  name: "mute",
  category: "info",
  description: "mute someone",
  userPerms: ["MANAGE_ROLES"],
  botPerms: ["EMBED_LINKS", "MANAGE_ROLES"],
  run: async (client, message, args) => {
    const user = message.mentions.members.first();

    const role = message.guild.roles.cache.find((ro) => ro.name === "Muted");
    if (!role) {
      message.guild.roles.create({
        data: {
          name: "muted",
          color: "GRAY",
        },
      });
    }
    if (!user) {
      return message.channel.send("you need to specify the user");
    }
    if (user.id === message.owner.id) {
      return message.channel.send(
        "You can't use any Mod Command against the Server Owner"
      );
    }
    const time = args[0];
    if (!time) {
      return message.channel.send(
        "How long are you going to mute that person ()"
      );
    }
    const reason = args.slice(1).join(" ");
    if (!reason) {
      return message.channel.send(
        "Why do you mute him?"
      );
    }
    const mtembde = new MessageEmbed()
      .setTitle("Action: Tempmute")
      .setColor("RANDOM")
      .addField("User:", user)
      .addField("Reason", reason)
      .addField("Moderator:", message.member.displayName)
      .addField("Time", time, true);
    const mtuembde = new MessageEmbed()
      .setTitle("YOU HAVE BEEN MUTED!!")
      .setColor("RANDOM")
      .addField("Reason", reason)
      .addField("Moderator:", message.member.displayName)
      .addField("Time", time, true);
    user.send({ embeds: [mtuembde] });
    message.channel.send({ embeds: [mtembde] });
    user.roles.add(role);
    setTimeout(function () {
      user.roles.remove(role);
      user.send(`You are now unmuted! We hope you Follow the Rules next time`);
    }, ms(time));
  },
};