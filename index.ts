import AudioPlayer, { defaultConfigs } from './src/AudioPlayer';
import { PlayerRemoteProvider, usePlayerRemote, usePlayerRemoteById } from './src/Context/PlayerRemote';

export default AudioPlayer;
export { PlayerRemoteProvider, usePlayerRemote, usePlayerRemoteById };

declare global {
  interface Window {
    AudioPlayer: typeof AudioPlayer & {
      defaultConfigs?: any;
      PlayerRemote?: {
        PlayerRemoteProvider?: typeof PlayerRemoteProvider;
        usePlayerRemote?: typeof usePlayerRemote;
        usePlayerRemoteById?: typeof usePlayerRemoteById;
      };
    };
  }
}

if (typeof window !== 'undefined') {
  window.AudioPlayer = AudioPlayer;
  window.AudioPlayer.defaultConfigs = defaultConfigs;
  window.AudioPlayer.PlayerRemote = {
    PlayerRemoteProvider,
    usePlayerRemote,
    usePlayerRemoteById,
  };
}
