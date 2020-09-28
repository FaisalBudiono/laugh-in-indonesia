import { prefix } from '@root/config.json';
import laughShort from '@commands/laughs/voice/laughShort';
import laughLong from '@commands/laughs/voice/laughLong';
import help from '@commands/help';

const commandList = {
  hehe: laughShort,
  help,
  huahaha: laughLong,
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
