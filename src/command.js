import { prefix } from '@root/config.json';
import commandList from '@src/commandList';

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
