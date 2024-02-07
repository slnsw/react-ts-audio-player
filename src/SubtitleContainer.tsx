// @file
// Oral Histories subtitle menu.

import React from 'react';

const memoiseTrack = (track: TextTrack): string => {
  if (!track) {
    return '';
  }
  const { kind, mode, language, cues } = track;
  return [kind, mode, language, cues.length].join(',');
};

interface IProps {
  visible?: boolean;
  lang?: string;
  tracks: TextTrack[];
  id: string;
  className?: string;
}

const SubtitleContainer: React.FunctionComponent<IProps> = ({
  visible = true,
  lang,
  tracks = [],
  id,
  className,
}: IProps) => {
  const [text, setText] = React.useState('');
  const [currentTrack, setCurrentTrack] = React.useState(null);

  const cueChange = (e: Event) => {
    const { activeCues } = e.target as TextTrack;

    let newText = '';
    let cue;

    let i;
    for (i = 0; i < activeCues.length; i += 1) {
      cue = activeCues[i];
      if (typeof (cue as any).text !== 'undefined') {
        newText += (cue as any).text;
      }
    }
    setText(newText);
  };

  React.useEffect(() => {
    if (currentTrack) {
      currentTrack.addEventListener('cuechange', cueChange, false);
    }
    return () => {
      if (currentTrack) {
        currentTrack.removeEventListener('cuechange', cueChange, false);
      }
    };
  }, [memoiseTrack(currentTrack)]);

  React.useEffect(() => {
    if (lang && lang.length && tracks && tracks.length) {
      let track = null;
      let i;
      for (i = 0; i < tracks.length; i += 1) {
        if (tracks[i].language === lang) {
          track = tracks[i];
          break;
        }
      }
      setCurrentTrack(track);
    }
  }, [lang, tracks]);

  return (
    <div
      className={[className || '', 'video-wrapper__subtitle-container'].join(
        ' ',
      )}
      hidden={!visible}
      aria-hidden={!visible}
      lang={lang}
      id={id}
      aria-atomic="true"
      aria-live="polite"
      aria-relevant="additions text"
    >
      {visible ? text : ' '}
    </div>
  );
};

export default SubtitleContainer;
