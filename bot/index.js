require("dotenv").config({ path: "src/.env" });
const ts = require('djs-tickets')
// Cónst
const guilds = require('./guilds.json'); // This path may vary.
const Cluster = require("discord-hybrid-sharding")
const fs = require("fs");
const chalk = require("chalk");
const Discord = require("discord.js");
const { Client, Collection, Intents, MessageEmbed, Constants } = require("discord.js");
const Economy = require('discord-economy-super')
const InvitesTracker = require('@androz2091/discord-invites-tracker');
const eco = new Economy({
    storagePath: './storage.json',
    updateCountdown: 1000,
    checkStorage: true,
    dailyAmount: 1000,
    workAmount: [1000, 5000],
    weeklyAmount: 10000,
    dailyCooldown: 60000 * 60 * 24,
    workCooldown: 60000 * 60,
    weeklyCooldown: 60000 * 60 * 24 * 7,
    dateLocale: 'ru',
    updater: {
        checkUpdates: true,
        upToDateMessage: false
    },
    errorHandler: {
        handleErrors: true,
        attempts: 5,
        time: 3000
    },
    optionsChecker: {
        ignoreInvalidTypes: false,
        ignoreUnspecifiedOptions: false,
        ignoreInvalidOptions: false,
        showProblems: false,
        sendLog: false,
        sendSuccessLog: false
    }
})
const { DEFAULT_PREFIX, BOT_TOKEN, ERROR_LOGS_CHANNEL, ALEXFLIPNOTE_API_KEY, YT_COOKIE,MONGOURL } = require("./config.json");
const discord = Discord;
const { loadCommands } = require("./handler/loadCommands");
const { loadEvents } = require("./handler/loadEvents");
const { loadSlashCommands } = require("./handler/loadSlashCommands")
const { loadPlayerEvents } = require("./handler/loadPlayerEvents");
const { DiscordTogether } = require('discord-together')
const { Player } = require('discord-player')
const Enmap = require("enmap")
const Levels = require("discord.js-leveling");
Levels.setURL("mongodb+srv://Notthebot:ntncar311C@cluster0.0488j.mongodb.net/cluster0?retryWrites=true&w=majority");
const client = new Client({
  allowedMentions: { parse: ["users", "roles"] },
  repliedUser: true,
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.DIRECT_MESSAGES,
  ],
  partials: [Constants.PartialTypes.CHANNEL, Constants.PartialTypes.MESSAGE,'MESSAGE', 'CHANNEL', 'REACTION' ],
  shards: Cluster.data.SHARD_LIST,
	shardCount: Cluster.data.TOTAL_SHARDS,
});
const { ReactionRole } = require("reaction-role");
const rrclient = new ReactionRole(BOT_TOKEN, MONGOURL);
const charModMail = require('char-mod-mail');
const { checkValid } = require("./functions/validation/checkValid")
const Embeds = require("./functions/embeds/Embeds")
const Logger = require("./functions/Logger/Logger")
const Util = require("./functions/util/Util")
const { GiveawaysManager } = require
('discord-giveaways');
const usev13 = true;
const option1 = rrclient.createOption("emoji", ["role_id", "role_id"]);

// create option with messages
const option2 = rrclient.createOption(
	"emoji",
	["role_id"],
	"You got a role", // add message
	"removed role", // remove message
);
const alexClient = require("alexflipnote.js")
const gwmanagers = new GiveawaysManager(client, {
    storage: './giveaways.json',
    default: {
        botsCanWin: false,
        embedColor: '#FF0000',
        embedColorEnd: '#000000',
        reaction: '🎉'
    }
});

// client
ts.start(client);
client.cluster = new Cluster.Client(client, usev13); 
client.giveawaysmanager = gwmanagers;
client.eco = eco;
client.images = new alexClient(ALEXFLIPNOTE_API_KEY)
client.discordTogether = new DiscordTogether(client);
client.commands = new Collection();
client.slash = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./Commands/");
client.setMaxListeners(0);
const Cookie = YT_COOKIE;
client.logger = Logger;
client.utils = Util;
client.say = Embeds;
rrclient.createMessage(
	"channel_id",
	"message_id",
	1, // reaction limit
	option1,
	option2,
);

rrclient.init();
client.rrclient = rrclient
client.player = new Player(client, {
  leaveOnEnd: false,
  leaveOnStop: false,
  leaveOnEmpty: false,
  leaveOnEmptyCooldown: 60000,
  autoSelfDeaf: true,
  initialVolume: 130,
  ytdlDownloadOptions: {
    requestOptions: {
      headers: {
        cookie: Cookie,
      }
    }
  },
})

client.player.use("YOUTUBE_DL", require("@discord-player/downloader").Downloader);
client.db = new Enmap({ name: "musicdb" });
loadCommands(client);
console.log('Command Ready')
loadEvents(client);
console.log('Event fully loaded')
loadPlayerEvents(client);
console.log('Loaded the radio!')
loadSlashCommands(client);
console.log('Slashed the command')
console.log('Self-Testing')
checkValid();
const Dashboard = require("./dashboard/dashboard");
    Dashboard(client); 
console.log('Done Loading')

client.on("ready", () => {
charModMail.ModMail(client, {
  guildID: "870197933197369394",
  categoryID: "908209786724704276",
  staffRole: "903244697538035712",
  embedColor: "HEX",
  anonymousReply: false/true,
  closedTitle: "Your Mod Mail Has Been Closed",
  closedMessage: "A Staff Member Has Deleted You Mod Mail!",
  staffOpenedTitle: "User Opened Mod Mail",
  staffOpenedMessage: "The User Opened A Mod Mail And Is Now Wait For A Reply!",
  userOpenedTitle: "Mod Mail Created",
  userOpenedMessage: "You Created A Mod Mail Ticket!",
  wrongEmoji: "✅",
  rightEmoji: "❎" 
})
});
client.on("messageCreate", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return; 
  
const user = await Levels.fetch(message.author.id, message.guild.id);
 const requiredXp = Levels.xpFor(parseInt(user.level) + 1)

 const randomAmountOfXp = Math.floor(Math.random() * 29) + 1; // Min 1, Max 30
 const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);

if (!user) return Levels.createUser(message.author.id, message.guild.id);
 if(hasLeveledUp) {
	
		const user = await Levels.fetch(message.author.id, message.guild.id);
		
		const levelEmbed = new MessageEmbed()
		.setTitle('New Level!')
		.setDescription(`**GG** ${message.author}, you just leveled up to level **${user.level + 1}** in ${message.guild.name} !\n🥳`)
		if (message.guild.id === '820122909687021581') return;
		const sendEmbed = await message.author.send({embeds: [levelEmbed]})
		sendEmbed.react('🥳')
	}
});
eco.on('balanceSet', balance => {
    console.log(`Someone's just set ${balance.amount} coins for balance for member ${balance.memberID} on guild ${balance.guildID}. His balance is ${balance.balance} coins now.\nReason: ${balance.reason}\nOperation type: '${balance.type}'`)
})
eco.on('balanceAdd', balance => {
    console.log(`Someone's just added ${balance.amount} coins for balance for member ${balance.memberID} on guild ${balance.guildID}. His balance is ${balance.balance} coins now.\nReason: ${balance.reason}\nOperation type: '${balance.type}'`)
})
eco.on('balanceSubtract', balance => {
    console.log(`Someone's just subtracted ${balance.amount} coins from balance for member ${balance.memberID} on guild ${balance.guildID}. His balance is ${balance.balance} coins now.\nReason: ${balance.reason}\nOperation type: '${balance.type}'.`)
})


// bank balance events
eco.on('bankSet', balance => {
    console.log(`Someone's just set ${balance.amount} coins in bank for member ${balance.memberID} on guild ${balance.guildID}. His bank balance is ${balance.balance} coins now.\nReason: ${balance.reason}\nOperation type: '${balance.type}'`)
})
eco.on('bankAdd', balance => {
    console.log(`Someone's just added ${balance.amount} coins in bank for member ${balance.memberID} on guild ${balance.guildID}. His bank balance is ${balance.balance} coins now.\nReason: ${balance.reason}\nOperation type: '${balance.type}'`)
})
eco.on('bankSubtract', balance => {
    console.log(`Someone's just subtracted ${balance.amount} coins from bank for member ${balance.memberID} on guild ${balance.guildID}. His bank balance is ${balance.balance} coins now.\nReason: ${balance.reason}\nOperation type: '${balance.type}'`)
})

// shop events
eco.on('shopAddItem', item => {
    console.log(`Someone's just added an item in the shop!\nItem data:\nID: ${item.id}\nName: ${item.itemName}\nPrice: ${item.price}\nDescription: ${item.description}\nMessage on use: ${item.message}\nMax amount of item in inventory: ${item.maxAmount}\nRole ID: ${item.role || 'Not specified'}`)
})
eco.on('shopRemoveItem', item => {
    console.log(`Someone's just removed an item from the shop!\nItem data:\nID: ${item.id}\nName: ${item.itemName}\nPrice: ${item.price}\nDescription: ${item.description}\nMessage on use: ${item.message}\nMax amount of item in inventory: ${item.maxAmount}\nRole ID: ${item.role || 'Not specified'}`)
})
eco.on('shopEditItem', item => {
    console.log(`Someone's just edited an item in the shop!\nID: ${item.id}\Guild ID: ${item.guildID}\nWhat changed: ${item.changed}\nBefore: ${item.oldValue}\nAfter: ${item.newValue}`)
})
eco.on('shopItemBuy', item => {
    console.log(`Someone's just bought an item from the shop!\nItem data:\nID: ${item.id}\nName: ${item.itemName}\nPrice: ${item.price}\nDescription: ${item.description || 'Not specified'}\nMessage on use: ${item.message || 'Not specified'}\nMax amount of item in inventory: ${item.maxAmount || 'Any'}\nRole ID: ${item.role || 'Not specified'}`)
})
eco.on('shopItemUse', item => {
    console.log(`Someone's just used an item!\nItem data:\nID: ${item.id}\nName: ${item.itemName}\nPrice: ${item.price}\nDescription: ${item.description || 'Not specified'}\nMessage on use: ${item.message || 'Not specified'}\nMax amount of item in inventory: ${item.maxAmount || 'Any'}\nRole ID: ${item.role || 'Not specified'}`)
})
eco.on('shopClear', cleared => {
    if (cleared) console.log('The shop was cleared successfully!')
    else console.log('Cannot clear the shop!')
})

client.login(BOT_TOKEN).then(() => {
  console.log(
    chalk.bgBlueBright.black(
      ` Successfully logged in as: ${client.user.username}#${client.user.discriminator} `
    )
  );
}); 
