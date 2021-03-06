const Discord = require('discord.js')
module.exports = {
    name: 'chat', // The name of the command
    description: 'Verstuurd een bericht over een nieuw chat bericht! Meestal zal dit een belangrijk zijn, soms ook andere', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {
      if (!message.member.roles.find(x => x.name === "eigenaar1"))
      if (!message.member.roles.find(x => x.name === "bestuur")) {
        return message.channel.send("Je hebt geen permissies voor dit commando!");
      }
      let chat = args.slice(0).join(" ");
      if(!chat) {
        chat = "Er is geen chatbericht opgegeven.";
      }
      const embed = new Discord.RichEmbed()
          .setTitle("Er is een (belangrijk) chatbericht geplaatst")
          .setDescription("Lees even goed dan ben je mee")
          .addField("bericht:",`${chat}`)
          .setURL("https://www.meldkamerspel.com")
          .setColor(0xD1132F)
          .setTimestamp()
          .setFooter("MeldkamerBot","https://i.ibb.co/VNk1Qn8/logo-IMG-20200921-WA0000.jpg")
         

      message.channel.send(embed);
      message.delete(1000)
    }
};
