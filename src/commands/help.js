import { CommandList } from '@src/command';
import { prefix } from '@root/config.json';

const firstCharacterLowercase = (string) => string.charAt(0).toLowerCase() + string.slice(1);

const getFormattedText = () => {
  let text = 'Here is the list of all command the bot have:\n\n';

  Object.entries(CommandList).forEach(([commandTriggerName, { description }]) => {
    const formattedDescription = firstCharacterLowercase(description);
    text += `\`${prefix}${commandTriggerName}\`: ${formattedDescription}\n`;
  });

  return text;
};

export default {
  name: 'Help',
  description: 'Displaying all command list and the descriptions.',
  async execute(message) {
    await message.reply(getFormattedText());
  },
};
