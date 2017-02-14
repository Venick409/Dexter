var Discord = require('discord.js');

const auth = require('./auth.json');

// Start bot
var bot = new Discord.Client();
bot.login(auth.token);

// Bot send message
bot.on('message', msg => {
    if (msg.content === 'test') {
        msg.channel.sendMessage('Booyah!');
    }
});