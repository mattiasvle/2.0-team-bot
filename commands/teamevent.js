const Discord = require('discord.js')
module.exports = {
    name: 'teamevent', // The name of the command
    description: 'Verstuurd een bericht over het gestarte team event!', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message) {

            const embed = new Discord.RichEmbed()
            .setTitle("Er is een team event gestart!")
            .setDescription("Er is een team event gestart! Iedereen graag de benodigde voertuigen naar deze meldingen sturen.")
            .setURL("https://meldkamerspel.com")
            .setColor(0xD1132F)
            .setTimestamp()
            .setFooter("MeldkamerBot","MELDKAMER LOGO HIER")

            message.channel.send(embed);
            message.channel.send("@everyone");
            message.delete(1000)
    },
};
