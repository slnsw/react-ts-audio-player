import AudioPlayer, { defaultConfigs } from './AudioPlayer';

declare global {
  interface Window {
    AudioPlayer: any;
  }
}

if (typeof window !== 'undefined') {
  window.AudioPlayer = AudioPlayer;
  window.AudioPlayer.defaultConfigs = defaultConfigs;
}
