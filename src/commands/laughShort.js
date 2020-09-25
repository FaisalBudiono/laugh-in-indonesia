const grumbleChat = (message) => {
  message.channel.send('GAK LUCU GOVLOG!');
};

const playLaughTrack = async (message, funcName) => {
  const connection = await message.member.voice.channel.join();
  const dispatcher = connection.play('audio/chuckleBajajBajuri.ogg');

  dispatcher.on('start', () => {
    console.log(`${funcName} audio is playing!`);
  });

  dispatcher.on('finish', () => {
    console.log(`${funcName} audio is finish!`);
    message.member.voice.channel.leave();
  });

  dispatcher.on('error', console.error);
};

export default {
  name: 'Laugh Short',
  description: 'Playing short laugh track from Bajaj Bajuri',
  async execute(message) {
    const isUserInVoiceChannel = message.member.voice.channel !== null;

    if (!isUserInVoiceChannel) {
      grumbleChat(message);
    } else {
      await playLaughTrack(message, this.name);
    }
  },
};
