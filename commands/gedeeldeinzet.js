const Discord = require('discord.js')
module.exports = {
    name: 'gedeeldeinzet', // The name of the command
    description: 'Verstuurd een bericht over de gestarte gedeelde inzet waarover in de chat hulp werd gevraagd!', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {
      let reden = args.slice(1).join(" ");
      if(!reden) {
        reden = "Er is geen reden opgegeven.";
      }
      const embed = new Discord.RichEmbed()
          .setTitle("Er is een inzet gedeeld voor hulp!")
          .setDescription("HELP")
          .addField("Reden:",`${reden}`)
          .setURL("https://www.meldkamerspel.com")
          .setColor(0xD1132F)
          .setTimestamp()
          .setFooter("MeldkamerBot","https://i.ibb.co/VNk1Qn8/logo-IMG-20200921-WA0000.jpg")
         

      message.channel.send(embed);
      message.channel.send("@everyone");
      message.delete(1000)
    }
};
