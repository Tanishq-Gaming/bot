const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 't!how to embed') {
    const embed = new MessageEmbed()
      .setTitle('A slick little embed')
      .setColor(0xff0000)
      .setDescription('Hello, this is a slick embed!');
    message.channel.send(embed);
  }
});

client.login(process.env.VrNERTK-ZaRo3sBTFTtVO80yAFCowizA);