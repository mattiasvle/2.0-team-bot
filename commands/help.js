const { prefix } = require('../config.json');

/**
 * Runs the help command, explaining each available command to the user.
 */
module.exports = {
    name: 'help',
    description: 'Laat alle mogelijke commando\'s zien, of de informatie hiervan.',
    aliases: ['commands'],
    usage: '[command name]',
    cooldown: 5,
    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        // Send help data about ALL commands
        if(!args.length) {
            data.push('Hier is een lijst met al mijn commando\'s:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nTyp: \`${prefix}help [commando naam]\` om informatie te krijgen over een specifiek commando!`);

            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('ik heb je een privébericht gestuurd met al mijn commando\'s!');
                })
                .catch(error => {
                    console.error(`Ik kon de help DM niet versturen naar ${message.author.tag}.\n`, error);
                    message.reply('Het lijkt erop dat ik geen DM naar je kan sturen! Heb je DM\'s uitgeschakeld?');
                });
        }

        // Send help data about the specific command
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('Dat is geen valide commando!');
        }

        data.push(`**Naam:** ${command.name}`);

        if (command.aliases) data.push(`**Ookwel:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Omschrijving:** ${command.description}`);
        if (command.usage) data.push(`**Gebruik:** ${prefix}${command.name} ${command.usage}`);

        data.push(`**Wachttijd:** ${command.cooldown || 3} second(s)`);

        message.channel.send(data, { split: true });
    },
};
