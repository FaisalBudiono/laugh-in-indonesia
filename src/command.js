import { prefix } from '@root/config.json';
import shortLaugh from '@commands/voice/shortLaugh';
import longLaugh from '@commands/voice/longLaugh';
import malesMauBeliTruk from '@commands/voice/malesMauBeliTruk';
import miskinSandra from '@commands/voice/miskinSandraVoice';
import sombongAmat from '@commands/voice/sombongAmat';
import help from '@commands/help';

const commandList = {
  hehe: shortLaugh,
  help,
  huahaha: longLaugh,
  males: malesMauBeliTruk,
  miskin: miskinSandra,
  sombong: sombongAmat,
};

const fetchCommandAndArguments = (string) => {
  const commandArgs = string.slice(prefix.length).trim().split(' ');
  const commandName = commandArgs.shift().toLowerCase();

  return { commandName, commandArgs };
};

const runCommandStrategy = async (commandName, message) => {
  const isOnCommandList = Object.prototype.hasOwnProperty.call(commandList, commandName);

  if (!isOnCommandList) return;

  await commandList[commandName].execute(message);
};

const runCommand = async (message) => {
  const textMsg = message.content;
  const isCommand = textMsg.startsWith(prefix);
  const isBotMessage = message.author.bot;

  if (!isCommand || isBotMessage) return;

  const { commandName } = fetchCommandAndArguments(textMsg);
  await runCommandStrategy(commandName, message);
};

export default runCommand;
export const CommandList = commandList;
