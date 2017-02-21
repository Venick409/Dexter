var Discord = require('discord.js');
var fs = require("fs");
var parse = JSON.parse(fs.readFileSync('./likes.json'));
var contents = JSON.parse(fs.readFileSync('./likes.json')); // Read likes.json
const auth = require('./auth.json');
var todoList = JSON.parse(fs.readFileSync('./todo.json')); // Read todo.json

// Start bot
var bot = new Discord.Client();
bot.login(auth.token);


/***
 * Message read
 ***/

bot.on('message', msg => {

	let txt = msg.content; // Get the user's message
	let args = txt.split(' '); // Turn user's message into an array
	const defined = contents[args[1]] !== undefined // shorthand to check if undefined

	// Convenience function for sending messages
    function say(x) {
        msg.channel.sendMessage(x);
    }

    function todomsg(){
    	let todo = '```';
    	for (let i = 0; i < todoList.length; i++){
    		todo += '\n' + (i + 1) +  ':' + todoList[i]
    	}
    	todo += '\n```';
    	say(todo)
}
	function todoadd(x){
		todoList.push(x)
		say(x + ' added to todo list.')
}


    //Text Tests
	if (txt === 'test'){
		say('Booyah!');
	}else if (args[0] === '.sv' && defined){
		say(contents[args[1]].villager + contents[args[1]].birthday + contents[args[1]].loves + contents[args[1]].likes);
	}else if (contents[args[1]] === 'villagers'){
		say(cpmtemts[args[1]].bachelors + '' + cpmtemts[args[1]].bachelorettes + '' + cpmtemts[args[1]].villagers);
	}else if (txt.toLowerCase() === 'dexter'){
		say('I\'m Dexter, a Pokédex programmed by Professor Oak for Pokémon Trainer Ash Ketchum of the town of Pallet. My function is to provide Ash with information and advice regarding Pokémon and their training. If lost or stolen, I cannot be replaced.');
	}else if (args[0] === '.todo'){
		todomsg();
	}else if (args[0] === '.todoadd'){
		todoadd(args[1]);
	}

});