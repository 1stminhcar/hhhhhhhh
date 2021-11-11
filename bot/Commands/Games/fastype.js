const { FastType } = require("weky");
module.exports = {
	name: 'fasttype',
	aliases: [],
	run: async (client, message, args) => {
		await FastType({
    message: message,
    embed: {
        title: 'FastType',
        description: 'You have **{{time}}** to type the below sentence.',
        color: '#5865F2',
        footer: 'Typing bois',
        timestamp: true
    },
    sentence: 'This is a sentence!',
    winMessage: 'GG, you have a wpm of **{{wpm}}** and You made it in **{{time}}**.',
    loseMessage: 'Better luck next time!',
    cancelMessage: 'You ended the game!',
    time: 60000,
    buttonText: 'Cancel',
    othersMessage: 'Only <@{{author}}> can use the buttons!'
});
	},
};