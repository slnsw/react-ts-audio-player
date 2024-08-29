const AudioPlayer = require('./dist/AudioPlayer');
const PlayerRemote = require('./dist/Context/PlayerRemote');
module.exports = AudioPlayer.default;
if (typeof window !== 'undefined') {
  window.AudioPlayer = AudioPlayer.default;
  window.AudioPlayer.defaultConfigs = AudioPlayer.defaultConfigs;
  window.AudioPlayer.PlayerRemote = PlayerRemote;
}
