var commando = require('discord.js-commando');

class marco extends commando.Command 
{
    constructor(client) {
        super(client, {
            name: 'marco',
            group: 'other',
            memberName: 'marco',
            description: 'reply polo when marco is sent'

        })
    }
async run (message, args){
    message.reply("POLO");
}   

}
module.exports = marco;