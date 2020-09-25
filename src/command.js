import { prefix } from '@root/config.json';
import laughShort from '@commands/laughShort';

const commandList = {
  hehe: laughShort,
};

const fetchCommandAndArguments = (string) => {
  const commandArgs = string.slice(prefix.length).trim().split(' ');
  const commandName = commandArgs.shift().toLowerCase();

  return { commandName, commandArgs };
};

const runCommandStrategy = async (commandName, message) => {
  const isOnCommandList = Object.prototype.hasOwnProperty.call(commandList, commandName);

  if (!isOnCommandList) return;

  console.log(`RUN command: ${commandName}`);
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
