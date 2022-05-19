import AudioPlayer, { defaultConfigs } from './AudioPlayer';

declare global {
  interface Window {
    AudioPlayer: any;
  }
}

export { AudioPlayer, defaultConfigs };
export default AudioPlayer;
