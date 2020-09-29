import shortLaugh from '@commands/voice/shortLaugh';
import longLaugh from '@commands/voice/longLaugh';
import malesMauBeliTruk from '@commands/voice/malesMauBeliTruk';
import miskinSandra from '@commands/voice/miskinSandraVoice';
import sombongAmat from '@commands/voice/sombongAmat';
import guaJadiNgeri from '@commands/voice/guaJadiNgeri';
import help from '@commands/help';

export default {
  hehe: shortLaugh,
  help,
  huahaha: longLaugh,
  males: malesMauBeliTruk,
  miskin: miskinSandra,
  ngeri: guaJadiNgeri,
  sombong: sombongAmat,
};
