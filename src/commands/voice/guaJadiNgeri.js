import { playOpusAudio } from '@src/responseHandler';

export default {
  name: 'Gua Jadi Ngeri',
  description: 'Playing "Gua jadi ngeri" meme.',
  async execute(messageInstance) {
    await playOpusAudio(messageInstance, 'audio/guaJadiNgeri.opus');
  },
};
