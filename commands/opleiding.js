const Discord = require('discord.js')
module.exports = {
    name: 'Opleidingen', // The name of the command
    description: 'Verstuurd een bericht over de gestarte opleidingen!', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message) {
      const embed = new Discord.RichEmbed()
 if (message.content.startsWith(';opleidinggestart')) {
          let rest_of_the_string = message.content.slice(';opleidinggestart'.length); //removes the first part
          let array_of_arguments = rest_of_the_string.split('*'); //[title, description, link, image]
.addField('Opleiding:', array_of_arguments[0])
          .setTitle("Er is een opleiding!")
          .setDescription("Er is een grote team inzet gestart! Iedereen graag de benodigde voertuigen naar deze melding sturen.")
          .setURL("https://meldkamerspel.com")
          .setColor(0xD1132F)
          .setTimestamp()
          .setFooter("MeldkamerBot","https://i.ibb.co/VNk1Qn8/logo-IMG-20200921-WA0000.jpg")

      message.channel.send(embed);
      message.channel.send("@everyone");
      message.delete(1000)
    }
};
