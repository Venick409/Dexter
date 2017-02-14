var Discord = require('discord.js');

const auth = require('./auth.json');
const likes = require('./likes.json');

// Start bot
var bot = new Discord.Client();
bot.login(auth.token);

/***
 * Message read
 ***/

bot.on('message', msg => {

	// Get the user's message
	let txt = msg.content;
	// Get each word of command in an array
	let args = txt.split(' ');

	// Convenience function for sending messages
    function say(x) {
        msg.channel.sendMessage(x);
    }

    //Text Tests
	if (txt === 'test'){
		say('Booyah!');
	} else if (args[0] === '.SV'){
		say('testtest');
	}

});