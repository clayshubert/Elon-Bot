var commando = require('discord.js-commando');
var elonBot = new commando.Client();

const token = 'YOUR_BOT_TOKEN';

var BOT_TOKEN = 'YOUR_BOT_TOKEN'

elonBot.login(process.env.BOT_TOKEN);

elonBot.registry.registerGroups([
    ['other', 'Other']
]);

elonBot.registry.registerCommandsIn(__dirname + "/commands")
elonBot.registry.registerDefaults()



