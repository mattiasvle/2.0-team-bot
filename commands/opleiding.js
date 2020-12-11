const Discord = require('discord.js')
module.exports = {
    name: 'opleiding', // The name of the command
    description: 'Verstuurt een bericht over een gestarte opleiding', // The description of the command (for help text)
    category: 'Admin',
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {
      var member = message.mentions.members.first();
      if (!message.member.roles.find(x => x.name === "eigenaar1"))
      if (!message.member.roles.find(x => x.name === "bestuur")) {
        return message.channel.send("Je hebt geen permissies voor dit commando!");
      }
      if(!member)
        return message.reply("je moet een opleiding opgeven!");
   
      }

      let reden = args.slice(1).join(" ");
      if(!reden) {
        reden = "Er is geen reden opgegeven.";
      }

       
        .setTitle("Nieuwe mod-log!")
        .setColor(0xD1132F)
        .addField("Opleiding:", "Verbanning")
        .addField("Verbannen gebruiker:",`<@${user.id}>`)
        .addField ("Verbannen door:",`${message.author}`)
        .addField("Reden:",`${reden}`)
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp()
       

      let modlogKanaal = message.guild.channels.get('786947624811888640')
                if(modlogKanaal) {
                  modlogKanaal.send(banEmbed)
                  member.ban(reden)
                  message.delete(1000)
                }
  }}
