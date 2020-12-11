const Discord = require('discord.js')
module.exports = {
    name: 'ban', // The name of the command
    description: 'Verbant een speler uit de Discord server', // The description of the command (for help text)
    category: 'Admin',
    args: false, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {
      var member = message.mentions.members.first();
      let user = message.mentions.users.first();
      if (!message.member.roles.find(x => x.name === "eigenaar1"))
      if (!message.member.roles.find(x => x.name === "bestuur")) {
        return message.channel.send("Je hebt geen permissies voor dit commando!");
      }
      if(!member)
        return message.reply("je moet een geldig serverlid noemen!");
      if(!member.bannable) {
        return message.channel.send("Ik kan deze persoon niet verbannen. Heeft hij een hogere rol? Heb ik wel permissies?");
      }

      let reden = args.slice(1).join(" ");
      if(!reden) {
        reden = "Er is geen reden opgegeven.";
      }

        const banEmbed = new Discord.RichEmbed()
        .setTitle("Nieuwe mod-log!")
        .setColor(0xD1132F)
        .addField("Actie:", "Verbanning")
        .addField("Verbannen gebruiker:",`<@${user.id}>`)
        .addField ("Verbannen door:",`${message.author}`)
        .addField("Reden:",`${reden}`)
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp()
        .setFooter("MeldkamerBot","MELDKAMER LOGO HIER")

      let modlogKanaal = message.guild.channels.get('786947624811888640')
                if(modlogKanaal) {
                  modlogKanaal.send(banEmbed)
                  member.ban(reden)
                  message.delete(1000)
                }
  }}
