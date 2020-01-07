module.exports = require('./dist/AudioPlayer');
if (typeof window !== 'undefined') {
  window = module.exports;
}
