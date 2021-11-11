const Discord = module.require("discord.js");
const { WillYouPressTheButton } = require('weky');
module.exports = {
  name: "thebutton",
  description: "hmmmm",
  run: async (client, message, args) => {
   await WillYouPressTheButton({
	message: message,
	embed: {
		title: 'Will you press the button?',
		description: '```{{statement1}}```\n**but**\n\n```{{statement2}}```',
		color: '#5865F2',
        footer: 'Choose wisely',
		timestamp: true
	},
	button: { yes: 'Yes', no: 'No' },
	thinkMessage: 'I am thinking',
	othersMessage: 'Only <@{{author}}> can use the buttons!'
});
  },
};
