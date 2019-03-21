const Discord = require('discord.js'); //Extract Discord.js Module
const client = new Discord.Client({disableEveryone: true}); //Make a new cilent also disable @everyone
let config = require('./config.json'); //Register config Directory
const prefix = config.PREFIX; //Register Prefix

client.on('message', message => { //When There Is A Message
if(message.content === prefix + 'hi') { //Check if message is prefix + hi
if(message.author.bot) return; //If the user is a bot then return
if(message.channel.type === 'dm') return; //If the channel type is dm Return
message.channel.send('Hello!') //Send Message To That Channel
}})

client.login(config.BOT_TOKEN); //Login To The Bot Token

//More Thing That This Can Do On This Website https://discord.js.org/#/docs/main/stable/general/welcome
