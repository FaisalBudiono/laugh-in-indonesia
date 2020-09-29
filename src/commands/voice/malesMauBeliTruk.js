import { createReadStream } from 'fs';
import { playbackVolume } from '@root/config.json';

const playLaughTrack = async (message) => {
  const connection = await message.member.voice.channel.join();
  const dispatcher = connection.play(createReadStream('audio/malesMauBeliTruk.opus'), {
    volume: parseFloat(playbackVolume),
    type: 'ogg/opus',
  });

  dispatcher.on('finish', () => {
    connection.disconnect();
  });
};

export default {
  name: 'Males Mau Beli Truk',
  description: 'Playing "Males mau beli truk" meme.',
  async execute(message) {
    const isUserInVoiceChannel = message.member.voice.channel !== null;

    if (!isUserInVoiceChannel) return '';

    return playLaughTrack(message);
  },
};
