import dotenv from 'dotenv';
import Discord from 'discord.js';
import { createServer } from 'http';
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

const { PORT } = process.env;

createServer((req, res) => {
  res.writeHead(204, {
    'Content-Type': 'application/json',
  });
  res.end();
}).listen(PORT || 5000, () => console.log(`Web Ready on ${PORT}`));
