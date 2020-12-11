const Discord = require('discord.js')
module.exports = {
    name: 'purge',
    description: 'Verwijder tot maximaal 99 berichten.',
    args: true, // Specified that this command doesn't need any data other than the command
    usage: '[aantal berichten]', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {

        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply('Dat lijkt geen geldig getal te zijn!');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('Je moet een getal tussen de 1 en 99 invullen!');
        }
        // For todays date;
        Date.prototype.today = function () {
            return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
        }

        // For the time now
        Date.prototype.timeNow = function () {
             return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
        }

        message.channel.bulkDelete(amount, true).then(deletedMessages => {
            // Filter the deleted messages with .filter()
            var botMessages = deletedMessages.filter(m => m.author.bot);
            var userPins = deletedMessages.filter(m => m.pinned);
            var userMessages = deletedMessages.filter(m => !m.author.bot);
            var newDate = new Date();
            var datetime = "" + newDate.today() + " @ " + newDate.timeNow();
            const embed = new Discord.RichEmbed()
                .setTitle("Berichten verwijderd!")
                .setColor(0xD1132F)
                .setFooter("MeldkamerBot", "MELDKAMER LOGO HIER")
                .setTimestamp()
                .addField("Verwijderd door:", `${message.author}`)
                .addField("Tijdstip:", datetime)
                .addField("Bot berichten verwijderd:", botMessages.size, false)
                .addField("Gebruiker pins verwijderd:", userPins.size, false)
                .addField("Gebruiker berichten verwijderd:", userMessages.size, false)
                .addField("Totaal aantal berichten verwijderd:", deletedMessages.size, false)
                .setThumbnail(message.author.displayAvatarURL)

                let updateChannel = message.guild.channels.get('KANAAL VOOR PURGE LOGS HIER, KAN OOK MODLOG KANAAL ZIJN')
                      if(updateChannel) {
                      updateChannel.send(embed)
                      console.log("Berichten verwijderen. Tijdstip: " + datetime)
                    }
        }).catch(err => {
            console.error(err);
            message.channel.send('Er was een error bij het verwijderen van de berichten in dit kanaal!');
        });

    },
};
