import { createReadStream } from 'fs';
import shoutingAngrily from '@commands/chat/shoutingAngrily';
import { playbackVolume } from '@root/config.json';

const playLaughTrack = async (message) => {
  const connection = await message.member.voice.channel.join();
  const dispatcher = connection.play(createReadStream('audio/chuckleBajajBajuri2.opus'), {
    volume: parseFloat(playbackVolume),
    type: 'ogg/opus',
  });

  dispatcher.on('finish', () => {
    connection.disconnect();
  });
};

export default {
  name: 'Short Laugh',
  description: 'Playing short laugh track from Bajaj Bajuri if the user that invoke this command is on voice channel. If not, the bot will send an angrily message.',
  async execute(message) {
    const isUserInVoiceChannel = message.member.voice.channel !== null;

    if (!isUserInVoiceChannel) {
      return shoutingAngrily.execute(message);
    }

    return playLaughTrack(message);
  },
};
