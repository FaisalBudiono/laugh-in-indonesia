import { createReadStream } from 'fs';
import { playbackVolume } from '@root/config.json';

const grumbleChat = async (message) => {
  await message.channel.send('GAK LUCU GOVLOG!');
};

const playLaughTrack = async (message) => {
  const connection = await message.member.voice.channel.join();
  connection.play(createReadStream('audio/chuckleBajajBajuri.opus'), {
    volume: parseFloat(playbackVolume),
    type: 'ogg/opus',
  });
};

export default {
  name: 'Laugh Short',
  description: 'Playing short laugh track from Bajaj Bajuri',
  async execute(message) {
    const isUserInVoiceChannel = message.member.voice.channel !== null;

    if (!isUserInVoiceChannel) {
      return grumbleChat(message);
    }

    return playLaughTrack(message);
  },
};
