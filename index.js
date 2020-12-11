const fs = require('fs');                               // Loads the Filesystem library
const Discord = require('discord.js');                  // Loads the discord API library
const { prefix, token } = require('./config.json');     // Loads the "token" and "prefix" values from the config file

const client = new Discord.Client(); // Initiates the client
client.commands = new Discord.Collection(); // Creates an empty list in the client object to store all commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); // Loads the code for each command from the "commands" folder

const cron1 = require('node-cron');

// Loops over each file in the command folder and sets the commands to respond to their name
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection(); // Creates an empty list for storing timeouts so people can't spam with commands

// Starts the bot and makes it begin listening for commands.
client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot is gestart, met ${client.users.size} gebruikers, in ${client.channels.size} kanalen of ${client.guilds.size} server.`);
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`;help | Actief op ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`Nieuwe server gejoind: ${guild.name} (id: ${guild.id}). Deze server heeft ${guild.memberCount} leden!`);
  client.user.setActivity(`Gebruikt op ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`Ik ben verwijderd van: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Gebruikt op ${client.guilds.size} servers`);
});

client.on('guildMemberAdd', member => {
  let guildChannel = member.guild.channels.find(channel => channel.id === 'ID VAN WELKOMKANAAL HIER');
  // channel: the channel you want to send the welcome message in
  let welkomembed = new Discord.RichEmbed()
    .setTitle("Welkom!")
    .setDescription(`Welkom op de Discord server van Meldkamer Groningen, ${member}!`)
    .setThumbnail("PLAATJE HIER")
    .setURL("https://meldkamerspel.com")
    .setColor(0xD1132F)
    .setTimestamp()
    .setFooter("MeldkamerBot","PLAATJE HIER")
});

/**
 * This function controls how the bot reacts to messages it receives
 */
client.on('message', message => {
    // Ignore bot messages and messages that dont start with the prefix defined in the config file
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    // Split commands and arguments from message so they can be passed to functions
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    // If the command isn't in the  command folder, move on
    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if(!command) return;

        // If the command requires arguments, make sure they're there.
        if (command.args && !args.length) {
            let reply = 'Dat commando vereist meer details!';

            // If we have details on how to use the args, provide them
            if (command.usage) {
                reply += `\nHet commando is als volgt te gebruiken: \`${prefix}${command.name} ${command.usage}\``;
            }

            // Send a reply from the bot about any error encountered
            return message.channel.send(reply);
        }

    /**
     * The following block of code handles "cooldowns" making sure that users can only use a command every so often.
     * This is helpful for commands that require loading time or computation, like image requests.
     */
    if(!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3 ) * 1000;

    if(!timestamps.has(message.author.id)) {
        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    } else {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if(now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`Zo snel kan ik niet! Je moet nog ${timeLeft.toFixed(1)} seconde(s) wachten voordat je het commando \`${command.name}\` kan doen!`);
        }

        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount)
    }
    /**
     * End cooldown code
     */

    try {
        // Run the command
        command.execute(message, args);
    } catch(error) {
        console.error(error);
        message.reply('Sorry! Er heeft zich een fout voorgedaan!');
    }
});

client.login(process.env.token); // Log the bot in using the token provided in the config file
