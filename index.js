var commando = require('discord.js-commando');
var elonBot = new commando.Client();

const token = 'NDYwODMxNDEzNTcxMjg5MDg4.DhKeRQ.xFoAtfHumA_be6BB-5eP7BWcMOA';

var BOT_TOKEN = 'NDYwODMxNDEzNTcxMjg5MDg4.DhKeRQ.xFoAtfHumA_be6BB-5eP7BWcMOA'

elonBot.login(process.env.BOT_TOKEN);

elonBot.registry.registerGroups([
    ['other', 'Other']
]);

elonBot.registry.registerCommandsIn(__dirname + "/commands")
elonBot.registry.registerDefaults()



