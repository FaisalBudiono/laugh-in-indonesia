import { createReadStream } from 'fs';
import { playbackVolume } from '@root/config.json';

const directlyPlayOpusAudio = async (messageInstance, opusFilePath) => {
  const connection = await messageInstance.member.voice.channel.join();
  const dispatcher = connection.play(createReadStream(opusFilePath), {
    volume: parseFloat(playbackVolume),
    type: 'ogg/opus',
  });

  dispatcher.on('finish', () => {
    connection.disconnect();
  });
};

export const sendText = async (messageInstance, textMessage) => {
  await messageInstance.channel.send(textMessage);
};

export const playOpusAudio = async (messageInstance, opusFilePath) => {
  const isUserInVoiceChannel = messageInstance.member.voice.channel !== null;

  if (!isUserInVoiceChannel) return;

  await directlyPlayOpusAudio(messageInstance, opusFilePath);
};

export const playOpusAudioOrCallback = async (messageInstance, opusFilePath, callback) => {
  const isUserInVoiceChannel = messageInstance.member.voice.channel !== null;

  if (!isUserInVoiceChannel) {
    return callback(messageInstance);
  }

  return directlyPlayOpusAudio(messageInstance, opusFilePath);
};

export default {
  playOpusAudio,
  playOpusAudioOrCallback,
  sendText,
};
