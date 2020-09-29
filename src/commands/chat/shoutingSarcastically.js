import { sendText } from '@src/responseHandler';

export default {
  name: 'Shouting Sarcastically',
  description: 'Appreciate the jokes funniness... sarcastically...',
  async execute(messageInstance) {
    await sendText(messageInstance, 'LUCU SEKALI DIA YANG MILIHYA!');
  },
};
