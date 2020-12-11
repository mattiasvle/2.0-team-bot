const Discord = require('discord.js')
module.exports = {
    name: 'opleiding', // The name of the command
    description: 'Verstuurd een bericht over de gestarte opleiding!', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message) {
 if (message.content.startsWith(';opleiding')) {
          let rest_of_the_string = message.content.slice(';opleiding'.length); //removes the first part
          let array_of_arguments = rest_of_the_string.split('*'); //[title, description, link, image]
.addField('Opleiding:', array_of_arguments[0])
      const embed = new Discord.RichEmbed()
          .setTitle("Er is een opleiding gestart!")
          .setDescription("Er is een opleiding gestart!")
          .setURL("https://meldkamerspel.com")
          .setColor(0xD1132F)
          .setTimestamp()
          .setFooter("MeldkamerBot","https://i.ibb.co/VNk1Qn8/logo-IMG-20200921-WA0000.jpg")

      message.channel.send(embed);
      message.channel.send("@everyone");
      message.delete(1000)
    }
};
