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

import FontAwesome5 from './Configs/FontAwesome5';
import Plain from './Configs/Plain';
import CssClasses from './Util/CssClasses';
import { toHHMMSS, toMMSS } from './TimeUtils';
import { IAudioPlayerConfig } from './Types';

interface IPlaylistItem {
  index: number;
  label: string;
  audioUrl: string;
  transcriptUrl: string | null;
}

interface IPlaybackEvent {
  fileData?: any[];
  selectedFile?: number;
  currentTime?: number;
  duration?: number;
}

interface IProps {
  playlist: IPlaylistItem[];
  id?: string;
  className?: string;
  eventRouter?: Emitter;
  crossOrigin?: 'anonymous' | 'use-credentials';
  onEndNextFile?: boolean;
  config?: IAudioPlayerConfig;
  singleTrack?: boolean;
  useRangeOnScrubBar?: boolean;
  useProgressOnScrubBar?: boolean;
  onLoad?: (e?: IPlaybackEvent) => void;
  onPlay?: (e?: IPlaybackEvent) => void;
  onPause?: (e?: IPlaybackEvent) => void;
  onEnd?: (e?: IPlaybackEvent) => void;
  onTimeUpdate?: (e?: IPlaybackEvent) => void;
}

const AudioPlayer: React.FunctionComponent<IProps> = ({
  playlist = [],
  id = 'audio-player',
  className,
  eventRouter,
  crossOrigin,
  onEndNextFile = false,
  config = {},
  singleTrack = false,
  useRangeOnScrubBar = false,
  useProgressOnScrubBar = false,
  onLoad,
  onPlay,
  onPause,
  onEnd,
  onTimeUpdate,
}: IProps) => {
  const audioElem = React.useRef(null);
  const timeElapsedElem = React.useRef(null);
  const durationElem = React.useRef(null);

  const [activeConfig, setActiveConfig] = React.useState<IAudioPlayerConfig>(
    {},
  );
  const [duration, setDuration] = React.useState(0);
  const [timestamp, setTimestamp] = React.useState(0);
  const [fileData, setFileData] = React.useState([]);
  const [selectedFile, setSelectedFile] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const [ended, setEnded] = React.useState(false);
  const [muted, setMuted] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState(null);
  const [showTrackListMenu, setShowTrackListMenu] = React.useState(false);
  const [showSubtitleMenu, setShowSubtitleMenu] = React.useState(false);
  const [videoMetadataLoaded, setVideoMetadataLoaded] = React.useState(false);

  const captionsContainerId = `${id}__captions`;
  const timeIndicatorId = `${id}__time-indicator`;
  const durationIndicatorId = `${id}__duration-indicator`;
  const tracklistId = `${id}__track-list`;
  const subtitleMenuId = `${id}__subtitle-menu`;

  const { features = {} } = activeConfig;

  const getTimestampString = (
    seconds: number = 0,
    isDuration: boolean = false,
  ): string => {
    if (typeof seconds !== 'number') {
      return '';
    }
    if (
      activeConfig.useHoursInTimestamps &&
      ((isDuration && seconds >= 3600) || duration >= 3600)
    ) {
      return toHHMMSS(seconds.toString());
    }
    return toMMSS(seconds.toString());
  };

  React.useEffect(() => {
    audioElem.current.setAttribute('playsinline', 'playsinline');
  }, []);

  React.useEffect(() => {
    const newFeatures = {
      showTracklist:
        config.features.showTracklist || Plain.features.showTracklist,
      showTrackNav: config.features.showTrackNav || Plain.features.showTrackNav,
      volumeControl:
        config.features.volumeControl || Plain.features.volumeControl,
      showFastForward:
        config.features.showFastForward || Plain.features.showFastForward,
      showRewind: config.features.showRewind || Plain.features.showRewind,
      showClosedCaptioning:
        config.features.showClosedCaptioning ||
        Plain.features.showClosedCaptioning,
    };
    const newConfig = { ...Plain, ...config, features: newFeatures };
    setActiveConfig(newConfig as IAudioPlayerConfig);
  }, [config]);

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
    if (typeof onLoad === 'function') {
      onLoad({ fileData, selectedFile: trackNumber, duration });
    }
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
    setDuration(audioElem.current.duration);

    // this.highlighter.selectedFile = this.state.selectedFile;
    // this.highlighter.updateVideoElement(this.videoElement);
    // this.highlighter.onVideoElementLoad();
  };

  const internalOnTimeUpdate = () => {
    const currentTime = audioElem.current.currentTime;
    if (duration > 0) {
      const value = (100 / duration) * currentTime;
      setProgress(value);
      setTimestamp(currentTime);
    }
    if (typeof onTimeUpdate === 'function') {
      onTimeUpdate({ fileData, selectedFile, currentTime, duration });
    }
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
    const currentTime = audioElem.current.currentTime;
    setPlaying(newPlaying);
    setTimestamp(currentTime);
    if (eventRouter) {
      eventRouter.emit('state.playing', newPlaying);
    }
    if (newPlaying) {
      if (typeof onPlay === 'function') {
        onPlay({ fileData, selectedFile, currentTime, duration });
      }
    } else {
      if (typeof onPause === 'function') {
        onPause({ fileData, selectedFile, currentTime, duration });
      }
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
    const currentTime = audioElem.current.currentTime;
    setTimestamp(currentTime);
    if (eventRouter) {
      eventRouter.emit('state.playing', false);
      eventRouter.emit('state.ended', true);
    }
    if (typeof onEnd === 'function') {
      onEnd({ fileData, selectedFile, currentTime, duration });
    }
  };

  const moveBackwardAction = () => {
    if (!playable) {
      return;
    }
    audioElem.current.currentTime -= activeConfig.rewindTime || 5;
  };

  const moveForwardAction = () => {
    if (!playable) {
      return;
    }
    audioElem.current.currentTime += activeConfig.fastForwardTime || 5;
  };

  const rewindAction = () => {
    audioElem.current.currentTime = 0;
    setEnded(false);
    setTimestamp(audioElem.current.currentTime);
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
    <div className={CssClasses('video-wrapper', className)}>
      <audio
        className={CssClasses('video-element', className)}
        data-oh-audio-player="1"
        crossOrigin={crossOrigin}
        preload="metadata"
        ref={audioElem}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
        onTimeUpdate={internalOnTimeUpdate}
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

      <div className={CssClasses('video-controls', className)}>
        <ScrubBar
          defaultValue={progress}
          className={CssClasses('video-controls', className, 'progress-bar')}
          onClick={(pos: number) => {
            audioElem.current.currentTime = pos * duration;
            setTimestamp(pos * duration);
          }}
          useTooltip={activeConfig.useTooltip || false}
          useRange={useRangeOnScrubBar}
          useProgress={useProgressOnScrubBar}
          valueToTooltipString={(pos) =>
            getTimestampString(
              audioElem.current ? pos * audioElem.current.duration : 0,
            )
          }
        />

        <label className="sr-only" htmlFor={timeIndicatorId}>
          Time elapsed
        </label>

        <input
          className={CssClasses('video-controls', className, 'time-elapsed')}
          id={timeIndicatorId}
          readOnly
          ref={timeElapsedElem}
          value={getTimestampString(timestamp)}
        />

        {activeConfig.showDuration && (
          <>
            <label className="sr-only" htmlFor={durationIndicatorId}>
              Duration
            </label>

            <input
              className={CssClasses('video-controls', className, 'duration')}
              id={durationIndicatorId}
              readOnly
              ref={durationElem}
              value={getTimestampString(duration, true)}
            />
          </>
        )}

        <div className="w-100" />

        <div
          className={CssClasses('video-controls', className, 'button-wrapper')}
        >
          {(features.showTracklist || false) && (
            <ToggleButton
              btnType="tracklist"
              aria-controls={tracklistId}
              enabled={fileData.length > 0 && !singleTrack}
              onClick={() => {
                setShowSubtitleMenu(false);
                setShowTrackListMenu(!showTrackListMenu);
              }}
              toggleState={showTrackListMenu}
              config={activeConfig}
            >
              Tracklist
            </ToggleButton>
          )}

          <div
            className={CssClasses(
              'video-controls',
              className,
              'button-wrapper__space',
            )}
          />

          <ActionButton
            btnType="previous-audio"
            enabled={fileData.length > 1 && canPlayPrev}
            onClick={() => {
              if (canPlayPrev) {
                selectTrack(selectedFile - 1);
              }
            }}
            config={activeConfig}
          >
            Previous track
          </ActionButton>

          <ActionButton
            btnType="backward"
            onClick={moveBackwardAction}
            config={activeConfig}
          >
            Rewind
          </ActionButton>

          <ToggleButton
            btnType="play"
            hidden={ended}
            onClick={playPauseAction}
            toggleState={playing}
            config={activeConfig}
          >
            {playing ? 'Pause' : 'Play'}
          </ToggleButton>

          <ActionButton
            btnType="reset"
            enabled={ended}
            hidden={!ended}
            onClick={rewindAction}
            config={activeConfig}
          >
            Restart
          </ActionButton>

          <ActionButton
            btnType="forward"
            onClick={moveForwardAction}
            config={activeConfig}
          >
            Fast forward
          </ActionButton>

          <ActionButton
            btnType="next-audio"
            enabled={fileData.length > 1 && canPlayNext}
            onClick={nextTrackAction}
            config={activeConfig}
          >
            Next track
          </ActionButton>

          {(features.showClosedCaptioning || false) && (
            <ToggleButton
              btnType="closed-captioning"
              aria-controls={subtitleMenuId}
              enabled={videoMetadataLoaded && hasVtt(currentFile)}
              onClick={() => {
                setShowTrackListMenu(false);
                setShowSubtitleMenu(!showSubtitleMenu);
              }}
              toggleState={showSubtitleMenu}
              config={activeConfig}
            >
              Closed captioning
            </ToggleButton>
          )}

          <div
            className={CssClasses(
              'video-controls',
              className,
              'button-wrapper__space',
            )}
          />

          <ToggleButton
            btnType="mute"
            onClick={toggleMuteAction}
            toggleState={muted}
            config={activeConfig}
          >
            Mute
          </ToggleButton>
        </div>
      </div>

      {(features.showClosedCaptioning || false) && (
        <SubtitleMenu
          visible={showSubtitleMenu}
          id={subtitleMenuId}
          tracks={subtitleTracks()}
          selected={selectedLanguage}
          onSelect={selectSubtitleLanguage}
        />
      )}

      {(features.showTracklist || false) && (
        <TracklistMenu
          visible={!singleTrack && showTrackListMenu}
          id={tracklistId}
          tracklist={fileData}
          selected={selectedFile}
          onSelect={(trackNumber) => {
            setShowTrackListMenu(false);
            selectTrack(trackNumber);
          }}
        />
      )}

      {(features.showClosedCaptioning || false) && (
        <SubtitleContainer
          visible={selectedLanguage !== null}
          lang={selectedLanguage}
          tracks={subtitleTracks()}
          id={captionsContainerId}
        />
      )}
    </div>
  );
};

export default AudioPlayer;

export const defaultConfigs = {
  FontAwesome5,
  Plain,
};
