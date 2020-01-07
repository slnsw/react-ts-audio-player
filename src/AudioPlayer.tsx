// @file
// Audio player base component.

import React from 'react';
import Emitter from 'eventemitter3';

import ActionButton from './ActionButton';
import ScrubBar from './ScrubBar';
import SubtitleContainer from './SubtitleContainer';
import SubtitleMenu from './SubtitleMenu';
import ToggleButton from './ToggleButton';
import TracklistMenu from './TracklistMenu';

import { toMMSS } from './TimeUtils';

type PlaylistItem = {
  index: number;
  label: string;
  audioUrl: string;
  transcriptUrl: string | null;
};

type Props = {
  playlist: PlaylistItem[];
  id?: string;
  eventRouter?: Emitter;
};

const AudioPlayer: React.FunctionComponent<Props> = ({
  playlist = [],
  id = 'audio-player',
  eventRouter,
}) => {
  const audioElem = React.useRef(null);
  const progressBarElem = React.useRef(null);
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

  const canPlayPrev = selectedFile > 0;
  const canPlayNext = selectedFile < fileData.length - 1;

  React.useEffect(() => {
    audioElem.current.load();
    audioElem.current.currentTime = 0;
    setProgress(0);
  }, [selectedFile]);

  const selectTrack = (trackNumber) => {
    setPlaying(false);
    setEnded(false);
    setVideoMetadataLoaded(false);
    setSelectedFile(trackNumber);
  };

  const hasVtt = (file) => {
    return file.transcriptUrl && file.transcriptUrl.length;
  };

  const subtitleTracks = () => {
    if (!videoMetadataLoaded) {
      return [];
    }
    return audioElem.current.textTracks;
  };

  const playable = fileData && fileData.length && videoMetadataLoaded;

  const onLoadedMetadata = (e) => {};

  const onTimeUpdate = (e) => {};

  const onEnded = (e) => {};

  const progressBarClickAction = (pos) => {};

  const prevTrackAction = () => {
    if (!canPlayPrev) {
      return;
    }
    selectTrack(selectedFile - 1);
  };

  const nextTrackAction = () => {
    if (canPlayNext) {
      return false;
    }
    selectTrack(selectedFile + 1);
  };

  const moveBackwardAction = () => {};

  const moveForwardAction = () => {};

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
      eventRouter.emit('state.playing', playing);
    }
  };

  const playPauseAction = () => {};

  const rewindAction = () => {};

  const selectTrackAction = (trackNumber) => {
    setShowTrackListMenu(false);
    selectTrack(trackNumber);
  };

  const selectSubtitleLanguage = () => {
    setShowSubtitleMenu(false);
    setSelectedLanguage(lang && lang.length ? lang : null);
  };

  React.useEffect(() => {
    let i;
    for (i = 0; i < audioElem.current.textTracks.length; i++) {
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

  const currentFile = fileData[selectedFile] || null;

  return (
    <div className="video-wrapper">
      <audio
        className="video-element"
        data-oh-audio-player="1"
        crossorigin="anonymous"
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
            srclang="en"
          />
        )}
      </audio>

      <div className="video-controls">
        <ScrubBar
          defaultValue={progress}
          className="video-controls__progress-bar"
          onClick={progressBarClickAction}
          ref={progressBarElem}
        />

        <label className="sr-only" htmlFor={timeIndicatorId}>
          Time elapsed
        </label>

        <input
          className="video-controls__time-elapsed"
          id={timeIndicatorId}
          readonly
          ref={timeElapsedElem}
          value={timestamp}
        />

        <div className="w-100" />

        <div className="video-controls__button-wrapper">
          <ToggleButton
            btnType="tracklist"
            aria-controls={tracklistId}
            disabled={!fileData.length}
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
            onClick={prevTrackAction}
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
            enabled={videoMetadataLoaded && this.hasVtt(file)}
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

          <div class="video-controls__button-wrapper__space" />

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
        onSelect={selectTrackAction}
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
