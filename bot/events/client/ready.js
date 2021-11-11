const chalk = require("chalk");
const mongoose = require("mongoose");
const { mongoPass } = require("../../config.json"); 
module.exports = (client) => {
const guildin = client.guilds.cache.size;
const guildmember = client.users.cache.size;
let textList = ['All the info about your activity being sent to the owner','Spoting everyone activity','Working in: ' + guildin + ' Server.' + 'Serving: ' + guildmember + ' member']
        var text = textList[Math.floor(Math.random() * textList.length)];
 client.user.setPresence({ status: "online" });
 client.user.setActivity(text, { type: "STREAMING", url: 'https://twitch.tv/notminhducgamingtv' });

  let allMembers = new Set();
  client.guilds.cache.forEach((guild) => {
    guild.members.cache.forEach((member) => {
      allMembers.add(member.user.id);
    });
  });

  let allChannels = new Set();
  client.guilds.cache.forEach((guild) => {
    guild.channels.cache.forEach((channel) => {
      allChannels.add(channel.id);
    });
  });

  console.log(
    chalk.bgMagentaBright.black(` ${client.guilds.cache.size} servers `),
    chalk.bgMagentaBright.black(` ${client.channels.cache.size} channels `),
    chalk.bgMagentaBright.black(` ${allMembers.size} members `)
  );

  mongoose
    .connect(mongoPass, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(
      console.log(
        chalk.bgGreenBright.black(
          ` ${client.user.username} connecting to Mongo DB `
        )
      )
    )
    .catch((err) =>
      console.log(
        chalk.bgRedBright.black(
          ` ${client.user.username} could not connect to mongo DB `
        )
      )
    );
};
