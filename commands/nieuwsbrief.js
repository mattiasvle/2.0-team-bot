const Discord = require('discord.js')
module.exports = {
    name: 'nieuwsbrief', // The name of the command
    description: 'Verstuurd een bericht dat de nieuwsbrief online staat!', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {
      let nieuwsbrief = args.slice(0).join(" ");
      if(!nieuwsbrief) {
        nieuwsbrief = "Er is geen nieuwsbrief opgegeven.";
      }
      const embed = new Discord.RichEmbed()
          .setTitle("De nieuwsbrief staat online!")
          .setDescription("Lees jij hem ook?")
          .addField("nieuwsbrief:",`${nieuwsbrief}`)
          .setURL("https://www.meldkamerspel.com")
          .setColor(0xD1132F)
          .setTimestamp()
          .setFooter("MeldkamerBot","https://i.ibb.co/VNk1Qn8/logo-IMG-20200921-WA0000.jpg")
         

      message.channel.send(embed);
      message.channel.send("@everyone");
      message.delete(1000)
    }
};
