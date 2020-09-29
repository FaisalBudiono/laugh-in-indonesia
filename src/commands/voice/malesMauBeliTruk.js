import { playOpusAudio } from '@src/responseHandler';

export default {
  name: 'Males Mau Beli Truk',
  description: 'Playing "Males mau beli truk" meme.',
  async execute(messageInstance) {
    await playOpusAudio(messageInstance, 'audio/malesMauBeliTruk.opus');
  },
};
