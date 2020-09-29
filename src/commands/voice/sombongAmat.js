import { playOpusAudio } from '@src/responseHandler';

export default {
  name: 'Sombong Amat',
  description: "Playing Mandra's phrase that says, \"Sombong Amat!\".",
  async execute(messageInstance) {
    await playOpusAudio(messageInstance, 'audio/sombongAmatMandra.opus');
  },
};
