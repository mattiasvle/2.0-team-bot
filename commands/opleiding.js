const Discord = require('discord.js')
module.exports = {
    name: 'opleiding', // The name of the command
    description: 'Verstuurd een bericht over de gestarte opleiding!', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {
      if (message.content.startsWith(';opleidinggestart')) {
          let rest_of_the_string = message.content.slice(';opleidinggestart'.length); //removes the first part
          let array_of_arguments = rest_of_the_string.split('*'); //[title, description, link, image]
      }
      const embed = new Discord.RichEmbed()
          .setTitle("Er is een inzet gedeeld voor hulp!")
          .setDescription("HELP")
          .addField('Opleiding:', array_of_arguments[0])
          .addField('link:', array_of_arguments[1])
          .addField('plaatsen:', array_of_arguments[2])
          .setURL("https://www.meldkamerspel.com")
          .setColor(0xD1132F)
          .setTimestamp()
          .setFooter("MeldkamerBot","https://i.ibb.co/VNk1Qn8/logo-IMG-20200921-WA0000.jpg")
         

      message.channel.send(embed);
      message.channel.send("@everyone");
      message.delete(1000)
    }
};
