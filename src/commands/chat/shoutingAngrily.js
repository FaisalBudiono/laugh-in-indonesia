import { sendText } from '@src/responseHandler';

export default {
  name: 'Shouting Angrily',
  description: "Shouting angrily because... It's not funny...",
  async execute(message) {
    await sendText(message, 'GAK LUCU GOVLOG!');
  },
};
