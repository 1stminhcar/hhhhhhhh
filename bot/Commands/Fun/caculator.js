const Discord = module.require("discord.js");
const { Calculator } = require('weky');
module.exports = {
  name: "calculator",
  usage: "calculator <text>",
  description: "Tells you a fortune",
  run: async (client, message, args) => {
   await Calculator({
			message: message,
			embed: {
				title: 'Calculator',
				color: '#5865F2',
				footer: 'Do Some Math',
				timestamp: true,
			},
			disabledQuery: 'Calculator is disabled!',
			invalidQuery: 'The provided equation is invalid!',
			othersMessage: 'Only <@{{author}}> can use the buttons!',
    })
  },
};
