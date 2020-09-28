import { createReadStream } from 'fs';
import shoutingAngrily from '@commands/laughs/chat/shoutingAngrily';
import { playbackVolume } from '@root/config.json';

const playLaughTrack = async (message) => {
  const connection = await message.member.voice.channel.join();
  const dispatcher = connection.play(createReadStream('audio/chuckleBajajBajuri.opus'), {
    volume: parseFloat(playbackVolume),
    type: 'ogg/opus',
  });

  dispatcher.on('finish', () => {
    connection.disconnect();
  });
};

export default {
  name: 'Laugh Short',
  description: 'Playing short laugh track from Bajaj Bajuri.',
  async execute(message) {
    const isUserInVoiceChannel = message.member.voice.channel !== null;

    if (!isUserInVoiceChannel) {
      return shoutingAngrily.execute(message);
    }

    return playLaughTrack(message);
  },
};
