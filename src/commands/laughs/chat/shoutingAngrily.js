export default {
  name: 'Shouting Angrily',
  description: "Shouting angrily because... It's not funny...",
  async execute(message) {
    await message.channel.send('GAK LUCU GOVLOG!');
  },
};
