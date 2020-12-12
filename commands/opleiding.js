onst Discord = require('discord.js')
module.exports = {
    name: 'opleiding', // The name of the command
    description: 'Verstuurd een bericht over de gestarte opleiding!', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {
      let link = args.slice(0).join(" ");
      if(!link) {
        link = "Er is geen link opgegeven.";
      }
      {
      let opleiding = args.slice(1).join(" ");
      if(!opleiding) {
        opleiding = "Er is geen opleiding opgegeven.";
      let vrijeplaatsen = args.slice(2).join(" ");
      }
      {
      if(!vrijeplaatsen) {
        vrije plaatsen = "Er is geen aantal plaatsen opgegeven.";
      }
      const embed = new Discord.RichEmbed()
          .setTitle("Er is een inzet gedeeld voor hulp!")
          .setDescription("HELP")
          .addField("link:",`${link}`)
          .addField("opleiding:",`${opleiding}`)
          .addField("vrije plaatsen:",`${vrijeplaatsen}`)
          .setURL("https://www.meldkamerspel.com")
          .setColor(0xD1132F)
          .setTimestamp()
          .setFooter("MeldkamerBot","https://i.ibb.co/VNk1Qn8/logo-IMG-20200921-WA0000.jpg")
         

      message.channel.send(embed);
      message.channel.send("@everyone");
      message.delete(1000)
    }
};
