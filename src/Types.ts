// @file
// Generic types.

import React from 'react';

interface IStringListDict {
  [key: string]: string[];
}

interface IReactNodeListDict {
  [key: string]: React.ReactNode;
}

export type AudioPlayerVolumeControl = 'hide' | 'mute' | number;

export interface IAudioPlayerConfig {
  classNames?: IStringListDict;
  icons?: IStringListDict;
  iconElements?: IReactNodeListDict;
  fastForwardTime?: number;
  rewindTime?: number;
  showDuration?: boolean;
  useHoursInTimestamps?: boolean;
  useTooltip?: boolean;
  useRangeForScrubBar?: boolean;
  useProgressForScrubBar?: boolean;
  features?: {
    showTracklist?: boolean;
    showTrackNav?: boolean;
    volumeControl?: 'hide' | 'mute' | number;
    showFastForward?: boolean;
    showRewind?: boolean;
    showClosedCaptioning?: boolean;
  };
}
