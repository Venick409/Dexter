var Discord = require('discord.js');
var fs = require("fs");
var contents = JSON.parse(fs.readFileSync("./likes.json"));
6
const auth = require('./auth.json');

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
	}else if (args[0] === '.sv' && contents[args[1]] !== undefined){
		say(contents[args[1]].villager + contents[args[1]].birthday + contents[args[1]].loves + contents[args[1]].likes);
	}else if (contents[args[1]] === "villagers"){
		say(cpmtemts[args[1]].bachelors + '' + cpmtemts[args[1]].bachelorettes + '' + cpmtemts[args[1]].villagers);
	}else if (txt === 'Dexter')
		say("I'm Dexter, a Pokédex programmed by Professor Oak for Pokémon Trainer Ash Ketchum of the town of Pallet. My function is to provide Ash with information and advice regarding Pokémon and their training. If lost or stolen, I cannot be replaced.")
});