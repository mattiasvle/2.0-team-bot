const Discord = require('discord.js')
module.exports = {
    name: 'kick', // The name of the command
    description: 'Kickt een speler uit de Discord server', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {
      var member = message.mentions.members.first();
      if (!message.member.roles.find("name", "Team eigenaar")) {
        return message.channel.send("Je hebt geen permissies voor dit commando!");
      }
      if(!member)
        return message.reply("Je moet een geldig serverlid noemen!");
      if(!member.bannable) {
        return message.channel.send("Ik kan deze persoon niet kicken. Heeft hij een hogere rol? Heb ik wel permissies?");
      }


      let reason = args.slice(1).join(" ");
      if(!reason) {
        reason = "Er is geen reden opgegeven.";
      }
      member.kick(reason)
        const embed = new Discord.RichEmbed()
        .setColor(0xD1132F)
        .setTitle("Er is een lid gekicked!")
        .addField("Naam van de verwijderde gebruiker:",`${member.displayName}`)
        .addField("Reden:",`${reason}`)
        .addField ("Gekicked door:",`${message.author.tag}`)
        .setImage("PLAATJE HIER")
      message.channel.send(embed);
      message.delete(1000)
  }}
