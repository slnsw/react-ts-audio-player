import { AudioPlayerVolumeControl } from '../Types';

export default {
  classNames: {},
  icons: {},
  iconElements: {},
  fastForwardTime: 5.0,
  rewindTime: 5.0,
  useHoursInTimestamps: true,
  useTooltip: false,
  useRangeForScrubBar: false,
  useProgressForScrubBar: false,
  features: {
    showTracklist: false,
    showTrackNav: false,
    volumeControl: 'hide' as AudioPlayerVolumeControl,
    showFastForward: false,
    showRewind: false,
    showClosedCaptioning: false,
  },
};
