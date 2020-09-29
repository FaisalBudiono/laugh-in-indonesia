import dotenv from 'dotenv';
import Discord from 'discord.js';
import command from './src/command';

dotenv.config();

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', async (message) => {
  await command(message);
});

client.login(process.env.DISCORD_BOT_TOKEN);
