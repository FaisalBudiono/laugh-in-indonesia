import { sendText } from '@src/responseHandler';
import commandList from '@src/commandList';
import { prefix } from '@root/config.json';

const firstCharacterLowercase = (string) => string.charAt(0).toLowerCase() + string.slice(1);

export default {
  name: 'Help',
  description: 'Displaying all command list and the descriptions.',
  async execute(messageInstance) {
    let helpText = 'Here is the list of all commands the bot have:\n\n';

    Object.entries(commandList).forEach(([commandTriggerName, { description }]) => {
      const formattedDescription = firstCharacterLowercase(description);
      helpText += `\`${prefix}${commandTriggerName}\` for ${formattedDescription}\n`;
    });

    await sendText(messageInstance, helpText);
  },
};
