// @file
// Generic types.

import React from 'react';

interface IStringListDict {
  [key: string]: string[];
}

interface IReactNodeListDict {
  [key: string]: React.ReactNode;
}

export interface IAudioPlayerConfig {
  classNames?: IStringListDict;
  icons?: IStringListDict;
  iconElements?: IReactNodeListDict;
  fastForwardTime?: number;
  rewindTime?: number;
  showDuration?: bool;
}
