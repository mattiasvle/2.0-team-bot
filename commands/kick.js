const Discord = require('discord.js')
module.exports = {
    name: 'kick', // The name of the command
    description: 'Kickt een speler uit de Discord server', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {
      var member = message.mentions.members.first();
      let user = message.mentions.users.first();
      if (!message.member.roles.find(x => x.name === "Team eigenaar"))
      if (!message.member.roles.find(x => x.name === "Co-Admin")) {
        return message.channel.send("Je hebt geen permissies voor dit commando!");
      }
      if(!member)
        return message.reply("je moet een geldig serverlid noemen!");

      let reden = args.slice(1).join(" ");
      if(!reden) {
        reden = "Er is geen reden opgegeven.";
      }
        const kickEmbed = new Discord.RichEmbed()
        .setColor(0xD1132F)
        .setTitle("Nieuwe mod-log!")
        .addField("Actie:", "Kick")
        .addField("Gekickete gebruiker:",`<@${user.id}>`)
        .addField ("Gekicket door:",`${message.author}`)
        .addField("Reden:",`${reden}`)
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp()
        .setFooter("MeldkamerBot","MELDKAMER LOGO HIER")

        let modlogKanaal = message.guild.channels.get('ID VAN MODLOG KANAAL HIER')
                  if(modlogKanaal) {
                      member.kick(reden)
                      modlogKanaal.send(kickEmbed);
                      message.delete(1000)
                    }
  }}
