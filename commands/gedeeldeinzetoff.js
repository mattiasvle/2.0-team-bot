const Discord = require('discord.js')
module.exports = {
    name: 'gedeeldeinzetoff', // The name of the command
    description: 'de gedeelde inzet bot gaat offline!', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {
      let off = args.slice(0).join(" ");
      if(!off) {
        offline tot = "Er is geen tijd opgegeven.";
      }
      const embed = new Discord.RichEmbed()
          .setTitle("Slaapwel!")
          .setDescription("Droom zacht")
          .addField("offline tot:",`${off} uur`)
          .setURL("https://www.meldkamerspel.com")
          .setColor(0xD1132F)
          .setTimestamp()
          .setFooter("MeldkamerBot","https://i.ibb.co/VNk1Qn8/logo-IMG-20200921-WA0000.jpg")
         

      message.channel.send(embed);
      message.delete(1000)
    }
};
