const Discord = require('discord.js')
module.exports = {
    name: 'teamkalender', // The name of the command
    description: 'Verstuurd een bericht met de kalender van de dag!', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {
      let kalender = args.slice(0).join(" ");
      if(!kalender) {
        kalender = "Er is geen kalender opgegeven.";
      }
      const embed = new Discord.RichEmbed()
          .setTitle("Dit is de teamkalender van vandaag!")
          .setDescription("Zo weet je wat er vandaag komt")
          .addField("kalender:",`${kalender}`)
          .setURL("https://www.meldkamerspel.com")
          .setColor(0xD1132F)
          .setTimestamp()
          .setFooter("MeldkamerBot","https://i.ibb.co/VNk1Qn8/logo-IMG-20200921-WA0000.jpg")
         

      message.channel.send(embed);
      message.channel.send("@everyone");
      message.delete(1000)
    }
};
