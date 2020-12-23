const Discord = require('discord.js')
module.exports = {
    name: 'dagelijks', // The name of the command
    description: 'Verstuurd een herinnering voor het ophalen van de dagelijkse beloning!', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message) {
      if (!message.member.roles.find(x => x.name === "eigenaar1"))
      if (!message.member.roles.find(x => x.name === "bestuur")) {
      const embed = new Discord.RichEmbed()
          .setTitle("Je word beloond!")
          .setDescription("Vergeet je dagelijkse beloning niet op te halen!")
          .setURL("https://meldkamerspel.com")
          .setColor(0xD1132F)
          .setTimestamp()
          .setFooter("MeldkamerBot","https://i.ibb.co/VNk1Qn8/logo-IMG-20200921-WA0000.jpg")

      message.channel.send(embed);
      message.channel.send("@everyone");
      message.delete(1000)
    }};
