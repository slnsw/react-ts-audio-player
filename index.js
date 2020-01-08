const AudioPlayer = require('./dist/AudioPlayer');
module.exports = AudioPlayer.default;
if (typeof window !== 'undefined') {
  window.AudioPlayer = AudioPlayer.default;
  window.AudioPlayer.defaultConfigs = AudioPlayer.defaultConfigs;
}
