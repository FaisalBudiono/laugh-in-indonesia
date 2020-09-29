import { playOpusAudio } from '@src/responseHandler';

export default {
  name: 'Miskin Sandra',
  description: "Playing one of Raditya Dika's standup comedy bit that says, \"Miskin! Miskin Sandra!\".",
  async execute(messageInstance) {
    await playOpusAudio(messageInstance, 'audio/miskinSandra.opus');
  },
};
