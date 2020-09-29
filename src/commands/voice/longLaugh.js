import { playOpusAudioOrCallback } from '@src/responseHandler';
import shoutingSarcastically from '@commands/chat/shoutingSarcastically';

export default {
  name: 'Long Laugh',
  description: 'Playing long laugh track from Bajaj Bajuri if the user that invoke this command is on voice channel. If not, the bot will send a sarcastic message.',
  async execute(messageInstance) {
    await playOpusAudioOrCallback(
      messageInstance,
      'audio/longLaughBajajBajuri.opus',
      shoutingSarcastically.execute,
    );
  },
};
