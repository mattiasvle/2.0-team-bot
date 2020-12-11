const Discord = require('discord.js')
module.exports = {
    name: 'regels', // The name of the command
    description: 'Verstuurd een bericht over de team regels!', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message) {

      const embed = new Discord.RichEmbed()
          .setTitle("Team Regels")
          .setDescription("Er zijn een aantal regels verbonden aan ons team. Dit zijn onze regels:")
            .addField("1.","REGEL 1 HIER")
            .addField("2.","REGEL 2 HIER")
            .addField("3.","REGEL 3 HIER")
            .addField("4.","REGEL 4 HIER")
            .addField("5.","REGEL 5 HIER")
            .addField("6.","REGEL 6 HIER")
          .setURL("https://meldkamerspel.com")
          .setColor(0xD1132F)
          .setTimestamp()
          .setFooter("MeldkamerBot","MELDKAMER LOGO HIER")

      message.channel.send(embed);
      message.channel.send("@everyone");
      message.delete(1000)
    }
};
