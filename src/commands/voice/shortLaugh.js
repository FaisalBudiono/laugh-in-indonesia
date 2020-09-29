import { playOpusAudioOrCallback } from '@src/responseHandler';
import shoutingAngrily from '@commands/chat/shoutingAngrily';

export default {
  name: 'Short Laugh',
  description: 'Playing short laugh track from Bajaj Bajuri if the user that invoke this command is on voice channel. If not, the bot will send an angrily message.',
  async execute(messageInstance) {
    await playOpusAudioOrCallback(
      messageInstance,
      'audio/chuckleBajajBajuri.opus',
      shoutingAngrily.execute,
    );
  },
};
