// @file
// Audio player base component.

import Emitter from 'eventemitter3';
import React from 'react';

import ActionButton from './ActionButton';
import ScrubBar from './ScrubBar';
import SubtitleContainer from './SubtitleContainer';
import SubtitleMenu from './SubtitleMenu';
import ToggleButton from './ToggleButton';
import TracklistMenu from './TracklistMenu';

import { toMMSS } from './TimeUtils';

interface IPlaylistItem {
  index: number;
  label: string;
  audioUrl: string;
  transcriptUrl: string | null;
}

interface IProps {
  playlist: IPlaylistItem[];
  id?: string;
  eventRouter?: Emitter;
  onEndNextFile?: boolean;
}

const AudioPlayer: React.FunctionComponent<IProps> = ({
  playlist = [],
  id = 'audio-player',
  eventRouter,
  onEndNextFile = false,
}: IProps) => {
  const audioElem = React.useRef(null);
  const timeElapsedElem = React.useRef(null);

  const [fileData, setFileData] = React.useState([]);
  const [selectedFile, setSelectedFile] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const [timestamp, setTimestamp] = React.useState('00:00');
  const [playing, setPlaying] = React.useState(false);
  const [ended, setEnded] = React.useState(false);
  const [muted, setMuted] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState(null);
  const [showTrackListMenu, setShowTrackListMenu] = React.useState(false);
  const [showSubtitleMenu, setShowSubtitleMenu] = React.useState(false);
  const [videoMetadataLoaded, setVideoMetadataLoaded] = React.useState(false);

  const captionsContainerId = `${id}__captions`;
  const timeIndicatorId = `${id}__time-indicator`;
  const tracklistId = `${id}__track-list`;
  const subtitleMenuId = `${id}__subtitle-menu`;

  React.useEffect(() => {
    setFileData(playlist);
    setSelectedFile(0);
  }, [playlist]);

  const canPlayPrev = selectedFile > 0;
  const canPlayNext = selectedFile < fileData.length - 1;

  React.useEffect(() => {
    audioElem.current.load();
    audioElem.current.currentTime = 0;
    setProgress(0);
  }, [selectedFile]);

  const selectTrack = (trackNumber: number) => {
    setPlaying(false);
    setEnded(false);
    setVideoMetadataLoaded(false);
    setSelectedFile(trackNumber);
  };

  const hasVtt = (file: IPlaylistItem) => {
    return file.transcriptUrl && file.transcriptUrl.length > 0;
  };

  const subtitleTracks = () => {
    if (!videoMetadataLoaded) {
      return [];
    }
    return audioElem.current.textTracks;
  };

  const playable = fileData && fileData.length && videoMetadataLoaded;

  const selectSubtitleLanguage = (lang?: string) => {
    setShowSubtitleMenu(false);
    setSelectedLanguage(lang && lang.length ? lang : null);
  };

  const onLoadedMetadata = () => {
    setVideoMetadataLoaded(true);
    selectSubtitleLanguage(selectedLanguage);

    // this.highlighter.selectedFile = this.state.selectedFile;
    // this.highlighter.updateVideoElement(this.videoElement);
    // this.highlighter.onVideoElementLoad();
  };

  const onTimeUpdate = () => {
    const value =
      (100 / audioElem.current.duration) * audioElem.current.currentTime;
    setProgress(value);
    timeElapsedElem.current.value = toMMSS(audioElem.current.currentTime);
  };

  const playPauseAction = () => {
    if (!playable) {
      return;
    }
    let newPlaying = false;
    if (audioElem.current.paused) {
      audioElem.current.play();
      newPlaying = true;
    } else {
      audioElem.current.pause();
    }
    setPlaying(newPlaying);
    setTimestamp(toMMSS(audioElem.current.currentTime));
    if (eventRouter) {
      eventRouter.emit('state.playing', newPlaying);
    }
  };

  const nextTrackAction = () => {
    if (canPlayNext) {
      selectTrack(selectedFile + 1);
    }
  };

  const nextTrackAndPlayAction = () => {
    if (canPlayNext) {
      nextTrackAction();
      setTimeout(() => playPauseAction(), 500);
    }
  };

  const onEnded = () => {
    if (onEndNextFile) {
      nextTrackAndPlayAction();
      return;
    }
    setEnded(true);
    setTimestamp(toMMSS(audioElem.current.currentTime));
    if (eventRouter) {
      eventRouter.emit('state.playing', false);
      eventRouter.emit('state.ended', true);
    }
  };

  const moveBackwardAction = () => {
    if (!playable) {
      return;
    }
    audioElem.current.currentTime -= 5;
  };

  const moveForwardAction = () => {
    if (!playable) {
      return;
    }
    audioElem.current.currentTime += 5;
  };

  const rewindAction = () => {
    audioElem.current.currentTime = 0;
    setEnded(false);
    setTimestamp(toMMSS(audioElem.current.currentTime));
    setProgress(0);
    if (eventRouter) {
      eventRouter.emit('state.ended', false);
    }
  };

  React.useEffect(() => {
    let i;
    for (i = 0; i < audioElem.current.textTracks.length; i += 1) {
      audioElem.current.textTracks[i].mode =
        audioElem.current.textTracks[i].language === selectedLanguage
          ? 'showing'
          : 'hidden';
    }
  }, [selectedLanguage]);

  const toggleMuteAction = () => {
    const newMute = !audioElem.current.muted;
    audioElem.current.muted = newMute;
    setMuted(newMute);
  };

  const handleRemoteAction = (action: string) => {
    if (action === 'backward') {
      moveBackwardAction();
    } else if (action === 'play_pause') {
      playPauseAction();
    } else if (action === 'reset') {
      rewindAction();
    } else if (action === 'forward') {
      moveForwardAction();
    }
  };

  React.useEffect(() => {
    if (eventRouter) {
      eventRouter.on('remote.action', handleRemoteAction);
    }
    return () => {
      if (eventRouter) {
        eventRouter.off('remote.action', handleRemoteAction);
      }
    };
  }, []);

  const currentFile = fileData[selectedFile] || null;

  return (
    <div className="video-wrapper">
      <audio
        className="video-element"
        data-oh-audio-player="1"
        crossOrigin="anonymous"
        playsinline
        preload="metadata"
        ref={audioElem}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
        onTimeUpdate={onTimeUpdate}
        aria-describedby={captionsContainerId}
      >
        {currentFile && <source src={currentFile.audioUrl} type="audio/mpeg" />}
        {currentFile && hasVtt(currentFile) && (
          <track
            src={currentFile.transcriptUrl}
            kind="captions"
            label="English"
            srcLang="en"
          />
        )}
      </audio>

      <div className="video-controls">
        <ScrubBar
          defaultValue={progress}
          className="video-controls__progress-bar"
          onClick={(pos: number) => {
            audioElem.current.currentTime = pos * audioElem.current.duration;
          }}
        />

        <label className="sr-only" htmlFor={timeIndicatorId}>
          Time elapsed
        </label>

        <input
          className="video-controls__time-elapsed"
          id={timeIndicatorId}
          readOnly
          ref={timeElapsedElem}
          value={timestamp}
        />

        <div className="w-100" />

        <div className="video-controls__button-wrapper">
          <ToggleButton
            btnType="tracklist"
            aria-controls={tracklistId}
            enabled={fileData.length > 0}
            onClick={() => {
              setShowSubtitleMenu(false);
              setShowTrackListMenu(!showTrackListMenu);
            }}
            toggleState={showTrackListMenu}
            iconFalse="list-ol"
            iconTrue="window-close"
          >
            Tracklist
          </ToggleButton>

          <div className="video-controls__button-wrapper__space" />

          <ActionButton
            btnType="previous-audio"
            enabled={fileData.length > 1 && canPlayPrev}
            onClick={() => {
              if (canPlayPrev) {
                selectTrack(selectedFile - 1);
              }
            }}
            icon="step-backward"
          >
            Previous track
          </ActionButton>

          <ActionButton btnType="backward" onClick={moveBackwardAction}>
            Rewind
          </ActionButton>

          <ToggleButton
            btnType="play"
            hidden={ended}
            onClick={playPauseAction}
            toggleState={playing}
            iconFalse="play"
            iconTrue="pause"
          >
            {playing ? 'Pause' : 'Play'}
          </ToggleButton>

          <ActionButton
            btnType="reset"
            enabled={ended}
            hidden={!ended}
            onClick={rewindAction}
            icon="undo"
          >
            Restart
          </ActionButton>

          <ActionButton btnType="forward" onClick={moveForwardAction}>
            Fast forward
          </ActionButton>

          <ActionButton
            btnType="next-audio"
            enabled={fileData.length > 1 && canPlayNext}
            onClick={nextTrackAction}
            icon="step-forward"
          >
            Next track
          </ActionButton>

          <ToggleButton
            btnType="closed-captioning"
            aria-controls={subtitleMenuId}
            enabled={videoMetadataLoaded && hasVtt(currentFile)}
            onClick={() => {
              setShowTrackListMenu(false);
              setShowSubtitleMenu(!showSubtitleMenu);
            }}
            toggleState={showSubtitleMenu}
            iconFalse="closed-captioning"
            iconTrue="window-close"
          >
            Closed captioning
          </ToggleButton>

          <div className="video-controls__button-wrapper__space" />

          <ToggleButton
            btnType="mute"
            onClick={toggleMuteAction}
            toggleState={muted}
            iconFalse="volume-up"
            iconTrue="volume-off"
          >
            Mute
          </ToggleButton>
        </div>
      </div>

      <SubtitleMenu
        visible={showSubtitleMenu}
        id={subtitleMenuId}
        subtitleTracks={subtitleTracks()}
        selected={selectedLanguage}
        onSelect={selectSubtitleLanguage}
      />

      <TracklistMenu
        visible={showTrackListMenu}
        id={tracklistId}
        tracklist={fileData}
        selected={selectedFile}
        onSelect={(trackNumber) => {
          setShowTrackListMenu(false);
          selectTrack(trackNumber);
        }}
      />

      <SubtitleContainer
        visible={selectedLanguage !== null}
        lang={selectedLanguage}
        tracks={subtitleTracks()}
        id={captionsContainerId}
      />
    </div>
  );
};

export default AudioPlayer;
