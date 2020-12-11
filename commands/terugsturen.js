const Discord = require('discord.js')
module.exports = {
    name: 'terugsturen', // The name of the command
    description: 'Verstuurd een bericht over het terugsturen van ambulances en overige voertuigen!', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message) {

      const embed = new Discord.RichEmbed()
          .setTitle("Voertuigen terugsturen!")
          .setDescription("Wil iedereen zijn ambulances (of overige voertuigen) terugsturen? Dan kan de melding afgerond worden!")
          .setURL("https://meldkamerspel.com")
          .setColor(0xD1132F)
          .setTimestamp()
          .setFooter("MeldkamerBot","https://i.ibb.co/5n0F3Rf/Meldkamer-Bot-01.png")
          .setThumbnail("https://i.ibb.co/KhQX5Nh/Terugsturen-01.png")

      message.channel.send(embed);
      message.channel.send("@everyone");
      message.delete(1000)
    }};
