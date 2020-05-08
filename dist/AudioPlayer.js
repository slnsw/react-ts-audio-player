import React from 'react';
import ActionButton from './ActionButton';
import ScrubBar from './ScrubBar';
import SubtitleContainer from './SubtitleContainer';
import SubtitleMenu from './SubtitleMenu';
import ToggleButton from './ToggleButton';
import TracklistMenu from './TracklistMenu';
import FontAwesome5 from './Configs/FontAwesome5';
import CssClasses from './Util/CssClasses';
import { toMMSS } from './TimeUtils';
const AudioPlayer = ({ playlist = [], id = 'audio-player', className, eventRouter, crossOrigin, onEndNextFile = false, config = {}, singleTrack = false, }) => {
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
    const durationIndicatorId = `${id}__duration-indicator`;
    const tracklistId = `${id}__track-list`;
    const subtitleMenuId = `${id}__subtitle-menu`;
    const audioElem = React.useRef(null);
    const timeElapsedElem = React.useRef(null);
    const durationElem = React.useRef(null);
    React.useEffect(() => {
        audioElem.current.setAttribute('playsinline', 'playsinline');
    }, []);
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
    const selectTrack = (trackNumber) => {
        setPlaying(false);
        setEnded(false);
        setVideoMetadataLoaded(false);
        setSelectedFile(trackNumber);
    };
    const hasVtt = (file) => {
        return file.transcriptUrl && file.transcriptUrl.length > 0;
    };
    const subtitleTracks = () => {
        if (!videoMetadataLoaded) {
            return [];
        }
        return audioElem.current.textTracks;
    };
    const playable = fileData && fileData.length && videoMetadataLoaded;
    const selectSubtitleLanguage = (lang) => {
        setShowSubtitleMenu(false);
        setSelectedLanguage(lang && lang.length ? lang : null);
    };
    const onLoadedMetadata = () => {
        setVideoMetadataLoaded(true);
        selectSubtitleLanguage(selectedLanguage);
    };
    const onTimeUpdate = () => {
        if (audioElem.current.duration > 0) {
            const value = (100 / audioElem.current.duration) * audioElem.current.currentTime;
            setProgress(value);
            setTimestamp(toMMSS(audioElem.current.currentTime));
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
        }
        else {
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
        audioElem.current.currentTime -= (config.rewindTime || 5);
    };
    const moveForwardAction = () => {
        if (!playable) {
            return;
        }
        audioElem.current.currentTime += (config.fastForwardTime || 5);
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
    const handleRemoteAction = (action) => {
        if (action === 'backward') {
            moveBackwardAction();
        }
        else if (action === 'play_pause') {
            playPauseAction();
        }
        else if (action === 'reset') {
            rewindAction();
        }
        else if (action === 'forward') {
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
    return (React.createElement("div", { className: CssClasses('video-wrapper', className) },
        React.createElement("audio", { className: CssClasses('video-element', className), "data-oh-audio-player": "1", crossOrigin: crossOrigin, preload: "metadata", ref: audioElem, onLoadedMetadata: onLoadedMetadata, onEnded: onEnded, onTimeUpdate: onTimeUpdate, "aria-describedby": captionsContainerId },
            currentFile && React.createElement("source", { src: currentFile.audioUrl, type: "audio/mpeg" }),
            currentFile && hasVtt(currentFile) && (React.createElement("track", { src: currentFile.transcriptUrl, kind: "captions", label: "English", srcLang: "en" }))),
        React.createElement("div", { className: CssClasses('video-controls', className) },
            React.createElement(ScrubBar, { defaultValue: progress, className: "video-controls__progress-bar", onClick: (pos) => {
                    audioElem.current.currentTime = pos * audioElem.current.duration;
                } }),
            React.createElement("label", { className: "sr-only", htmlFor: timeIndicatorId }, "Time elapsed"),
            React.createElement("input", { className: CssClasses('video-controls', className, 'time-elapsed'), id: timeIndicatorId, readOnly: true, ref: durationElem, value: timestamp }),
            config.showDuration && (React.createElement(React.Fragment, null,
                React.createElement("label", { className: "sr-only", htmlFor: durationIndicatorId }, "Duration"),
                React.createElement("input", { className: CssClasses('video-controls', className, 'duration'), id: durationIndicatorId, readOnly: true, ref: timeElapsedElem, value: toMMSS(audioElem.current ? audioElem.current.duration : 0) }))),
            React.createElement("div", { className: "w-100" }),
            React.createElement("div", { className: CssClasses('video-controls', className, 'button-wrapper') },
                React.createElement(ToggleButton, { btnType: "tracklist", "aria-controls": tracklistId, enabled: fileData.length > 0 && !singleTrack, onClick: () => {
                        setShowSubtitleMenu(false);
                        setShowTrackListMenu(!showTrackListMenu);
                    }, toggleState: showTrackListMenu, config: config }, "Tracklist"),
                React.createElement("div", { className: CssClasses('video-controls', className, 'button-wrapper__space') }),
                React.createElement(ActionButton, { btnType: "previous-audio", enabled: fileData.length > 1 && canPlayPrev, onClick: () => {
                        if (canPlayPrev) {
                            selectTrack(selectedFile - 1);
                        }
                    }, config: config }, "Previous track"),
                React.createElement(ActionButton, { btnType: "backward", onClick: moveBackwardAction, config: config }, "Rewind"),
                React.createElement(ToggleButton, { btnType: "play", hidden: ended, onClick: playPauseAction, toggleState: playing, config: config }, playing ? 'Pause' : 'Play'),
                React.createElement(ActionButton, { btnType: "reset", enabled: ended, hidden: !ended, onClick: rewindAction, config: config }, "Restart"),
                React.createElement(ActionButton, { btnType: "forward", onClick: moveForwardAction, config: config }, "Fast forward"),
                React.createElement(ActionButton, { btnType: "next-audio", enabled: fileData.length > 1 && canPlayNext, onClick: nextTrackAction, config: config }, "Next track"),
                React.createElement(ToggleButton, { btnType: "closed-captioning", "aria-controls": subtitleMenuId, enabled: videoMetadataLoaded && hasVtt(currentFile), onClick: () => {
                        setShowTrackListMenu(false);
                        setShowSubtitleMenu(!showSubtitleMenu);
                    }, toggleState: showSubtitleMenu, config: config }, "Closed captioning"),
                React.createElement("div", { className: CssClasses('video-controls', className, 'button-wrapper__space') }),
                React.createElement(ToggleButton, { btnType: "mute", onClick: toggleMuteAction, toggleState: muted, config: config }, "Mute"))),
        React.createElement(SubtitleMenu, { visible: showSubtitleMenu, id: subtitleMenuId, tracks: subtitleTracks(), selected: selectedLanguage, onSelect: selectSubtitleLanguage }),
        React.createElement(TracklistMenu, { visible: !singleTrack && showTrackListMenu, id: tracklistId, tracklist: fileData, selected: selectedFile, onSelect: (trackNumber) => {
                setShowTrackListMenu(false);
                selectTrack(trackNumber);
            } }),
        React.createElement(SubtitleContainer, { visible: selectedLanguage !== null, lang: selectedLanguage, tracks: subtitleTracks(), id: captionsContainerId })));
};
export default AudioPlayer;
export const defaultConfigs = {
    FontAwesome5,
};
//# sourceMappingURL=AudioPlayer.js.map