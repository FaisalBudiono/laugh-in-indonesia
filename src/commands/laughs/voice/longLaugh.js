import { createReadStream } from 'fs';
import shoutingSarcastically from '@commands/laughs/chat/shoutingSarcastically';
import { playbackVolume } from '@root/config.json';

const playLaughTrack = async (message) => {
  const connection = await message.member.voice.channel.join();
  const dispatcher = connection.play(createReadStream('audio/longLaughBajajBajuri.opus'), {
    volume: parseFloat(playbackVolume),
    type: 'ogg/opus',
  });

  dispatcher.on('finish', () => {
    connection.disconnect();
  });
};

export default {
  name: 'Long Laugh',
  description: 'Playing long laugh track from Bajaj Bajuri if the user that invoke this command is on voice channel. If not, the bot will send a sarcastic message.',
  async execute(message) {
    const isUserInVoiceChannel = message.member.voice.channel !== null;

    if (!isUserInVoiceChannel) {
      return shoutingSarcastically.execute(message);
    }

    return playLaughTrack(message);
  },
};
