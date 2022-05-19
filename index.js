const AudioPlayer = require('./src/AudioPlayer.tsx');
module.exports = AudioPlayer.default;
if (typeof window !== 'undefined') {
  window.AudioPlayer = AudioPlayer.default;
  window.AudioPlayer.defaultConfigs = AudioPlayer.defaultConfigs;
}
