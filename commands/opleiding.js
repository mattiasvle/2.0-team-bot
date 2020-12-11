const Discord = require('discord.js')
module.exports = {
    name: 'opleiding', // The name of the command
    description: 'vestuurt een bericht over een gestrte opleiding', // The description of the command (for help text)
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {
      var member = message.mentions.members.first();
      let user = message.mentions.users.first();
      if (!message.member.roles.find(x => x.name === "eigenaar1"))
      if (!message.member.roles.find(x => x.name === "bestuur")) {
        return message.channel.send("Je hebt geen permissies voor dit commando!");
      }
  

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
        .setFooter("MeldkamerBot","https://i.ibb.co/VNk1Qn8/logo-IMG-20200921-WA0000.jpg")

        let modlogKanaal = message.guild.channels.get('786947624811888640')
                  if(modlogKanaal) {
                      member.kick(reden)
                      modlogKanaal.send(kickEmbed);
                      message.delete(1000)
                    }
  }}
