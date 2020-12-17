const Discord = require('discord.js')
module.exports = {
    name: 'chatoff', // The name of the command
    description: 'De chatbot gaat offline', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {
      let chatoff = args.slice(0).join(" ");
      if(!chatoff) {
        chatoff = "Er is geen tijd opgegeven.";
      }
      const embed = new Discord.RichEmbed()
          .setTitle("De chatbot gaat offline")
          .setDescription("toedeloe")
          .addField("Ik kom terug rond",`${chatoff} uur`)
          .setURL("https://www.meldkamerspel.com")
          .setColor(0xD1132F)
          .setTimestamp()
          .setFooter("MeldkamerBot","https://i.ibb.co/VNk1Qn8/logo-IMG-20200921-WA0000.jpg")
         

      message.channel.send(embed);
      message.delete(1000)
    }
};
