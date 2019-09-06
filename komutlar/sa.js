const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, params) => {

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.sendCode('asciidoc', `https://discord.gg/FXM3HZ7`);
  if (message.channel.type !== 'dm') {
	  
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor()
    .setTimestamp()
    .setAuthor()
    .setDescription('');
    message.channel.sendEmbed() }
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.sendCode('asciidoc', `https://discord.gg/FXM3HZ7`);
    }
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sa'],
  permLevel: 0
};

exports.help = {
  name: 'sa',
  description: 'Tüm komutları gösterir.',
  usage: 'sa'
};
