'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var SrOnly = function SrOnly(_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config,
      children = _ref.children;
  var classNames = [].concat(config.classNames['sr-only'] || []);
  return React.createElement("span", {
    className: classNames.join(' ')
  }, children);
};

var CssClasses = function CssClasses(defaultClassName, optionalClassName, suffix, states) {
  if (optionalClassName === void 0) {
    optionalClassName = '';
  }

  if (suffix === void 0) {
    suffix = '';
  }

  if (states === void 0) {
    states = [];
  }

  var classes = [].concat(defaultClassName.split(/\s+/)).concat(optionalClassName.split(/\s+/)).filter(function (c) {
    return c && c.length;
  }).map(function (c) {
    return suffix.length ? c + "__" + suffix : c;
  });
  return classes.reduce(function (agg, className) {
    return agg.concat([''].concat(states.filter(function (s) {
      return s && s.length;
    })).map(function (state) {
      return "" + className + (state.length ? "--" + state : '');
    }));
  }, []).join(' ');
};

var ActionButton = function ActionButton(_ref) {
  var _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? true : _ref$enabled,
      _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? false : _ref$hidden,
      btnType = _ref.btnType,
      onClick = _ref.onClick,
      children = _ref.children,
      className = _ref.className,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;
  var defaultClassName = (config.classNames[btnType] || []).join(' ');
  var iconClassNames = (config.icons[btnType] || []).join(' ');
  var iconElem = config.iconElements[btnType] || null;
  return React.createElement("button", {
    className: CssClasses(defaultClassName, className || ''),
    disabled: !enabled,
    hidden: hidden,
    onClick: onClick
  }, React.createElement(SrOnly, {
    config: config
  }, children), !iconElem && React.createElement("span", {
    className: CssClasses(iconClassNames, '')
  }), iconElem);
};

var getOffsetX = function getOffsetX(e) {
  if (typeof e.nativeEvent.offsetX === 'number') {
    return e.nativeEvent.offsetX;
  }

  if (typeof e.targetTouches === 'object') {
    var touchE = e;
    var rect = touchE.target.getBoundingClientRect();
    return touchE.targetTouches[0].pageX - rect.left;
  }

  return 0;
};

var ScrubBar = function ScrubBar(_ref) {
  var _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? 0 : _ref$defaultValue,
      className = _ref.className,
      onClick = _ref.onClick;
  var outer = React.useRef(null);

  var _React$useState = React.useState(defaultValue),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var _React$useState2 = React.useState(0),
      offsetX = _React$useState2[0],
      setOffsetX = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      scrubbing = _React$useState3[0],
      setScrubbing = _React$useState3[1];

  React.useEffect(function () {
    setValue(defaultValue);
  }, [defaultValue]);
  React.useEffect(function () {
    if (scrubbing) {
      var pos = offsetX / outer.current.clientWidth;
      setValue(pos * 100);

      if (typeof onClick === 'function') {
        onClick(pos);
      }
    }
  }, [scrubbing, offsetX]);

  var onDown = function onDown(e) {
    setScrubbing(true);
    setOffsetX(getOffsetX(e));
  };

  var onUp = function onUp() {
    return setScrubbing(false);
  };

  return React.createElement("div", {
    className: [className || ''].join(' '),
    onMouseDown: onDown,
    onMouseUp: onUp,
    onMouseMove: function onMouseMove(e) {
      if (scrubbing) {
        setOffsetX(getOffsetX(e));
      }
    },
    onTouchStart: onDown,
    onTouchEnd: onUp,
    onTouchMove: function onTouchMove(e) {
      if (scrubbing) {
        setOffsetX(getOffsetX(e));
      }
    },
    ref: outer
  }, React.createElement("div", {
    className: [className + "__fill"].join(' '),
    style: {
      width: value + "%"
    }
  }, React.createElement("span", {
    className: "sr-only"
  }, value + " percent")));
};

var memoiseTrack = function memoiseTrack(track) {
  if (!track) {
    return '';
  }

  var kind = track.kind,
      mode = track.mode,
      language = track.language,
      cues = track.cues;
  return [kind, mode, language, cues.length].join(',');
};

var SubtitleContainer = function SubtitleContainer(_ref) {
  var _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? true : _ref$visible,
      lang = _ref.lang,
      _ref$tracks = _ref.tracks,
      tracks = _ref$tracks === void 0 ? [] : _ref$tracks,
      id = _ref.id,
      className = _ref.className;

  var _React$useState = React.useState(''),
      text = _React$useState[0],
      setText = _React$useState[1];

  var _React$useState2 = React.useState(null),
      currentTrack = _React$useState2[0],
      setCurrentTrack = _React$useState2[1];

  var cueChange = function cueChange(e) {
    var activeCues = e.target.activeCues;
    var newText = '';
    var cue;
    var i;

    for (i = 0; i < activeCues.length; i += 1) {
      cue = activeCues[i];

      if (typeof cue.text !== 'undefined') {
        newText += cue.text;
      }
    }

    setText(newText);
  };

  React.useEffect(function () {
    if (currentTrack) {
      currentTrack.addEventListener('cuechange', cueChange, false);
    }

    return function () {
      if (currentTrack) {
        currentTrack.removeEventListener('cuechange', cueChange, false);
      }
    };
  }, [memoiseTrack(currentTrack)]);
  React.useEffect(function () {
    if (lang && lang.length && tracks && tracks.length) {
      var track = null;
      var i;

      for (i = 0; i < tracks.length; i += 1) {
        if (tracks[i].language === lang) {
          track = tracks[i];
          break;
        }
      }

      setCurrentTrack(track);
    }
  }, [lang, tracks]);
  return React.createElement("div", {
    className: [className || '', 'video-wrapper__subtitle-container'].join(' '),
    hidden: !visible,
    "aria-hidden": !visible,
    lang: lang,
    id: id,
    "aria-atomic": "true",
    "aria-live": "polite",
    "aria-relevant": "additions text"
  }, visible ? text : ' ');
};

var Menu = function Menu(_ref) {
  var id = _ref.id,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible,
      className = _ref.className,
      children = _ref.children;
  return React.createElement("ol", {
    className: ['video-wrapper__popup-menu', className || ''].join(' '),
    id: id,
    hidden: !visible,
    "aria-expanded": visible
  }, children);
};

var MenuItem = function MenuItem(_ref) {
  var label = _ref.label,
      value = _ref.value,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? false : _ref$selected,
      onSelect = _ref.onSelect;
  return React.createElement("li", null, React.createElement("button", {
    "data-value": value,
    "data-state": selected ? 'active' : 'inactive',
    onClick: onSelect,
    onKeyUp: function onKeyUp(e) {
      if (e.key === 'Enter') {
        onSelect(e);
      }
    }
  }, label));
};

var SubtitleMenu = function SubtitleMenu(_ref) {
  var _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible,
      id = _ref.id,
      tracks = _ref.tracks,
      selected = _ref.selected,
      onSelect = _ref.onSelect,
      className = _ref.className;

  var onSelectLang = function onSelectLang(e) {
    var itemElem = e.target;
    var selectedLang = itemElem.getAttribute('data-value') || null;

    if (typeof onSelect === 'function') {
      onSelect(selectedLang);
    }
  };

  var languageOptions = [React.createElement(MenuItem, {
    key: '_none_',
    label: 'Off',
    value: null,
    selected: !selected,
    onSelect: onSelectLang
  })];
  var track;
  var i;

  if (tracks && tracks.length) {
    for (i = 0; i < tracks.length; i += 1) {
      track = tracks[i];
      languageOptions.push(React.createElement(MenuItem, {
        key: track.language + "-" + i,
        label: track.label,
        value: track.language,
        selected: selected && track.language === selected,
        onSelect: onSelectLang
      }));
    }
  }

  return React.createElement(Menu, {
    className: [className || '', 'subtitles-menu'].join(' '),
    id: id,
    visible: visible
  }, languageOptions);
};

var ToggleButton = function ToggleButton(_ref) {
  var _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? true : _ref$enabled,
      _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? false : _ref$hidden,
      btnType = _ref.btnType,
      _ref$toggleState = _ref.toggleState,
      toggleState = _ref$toggleState === void 0 ? false : _ref$toggleState,
      children = _ref.children,
      onClick = _ref.onClick,
      className = _ref.className,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;
  var defaultClassName = (config.classNames[btnType] || []).join(' ');
  var iconClassNamesFalse = (config.icons[btnType + "__false"] || []).join(' ');
  var iconClassNamesTrue = (config.icons[btnType + "__true"] || []).join(' ');
  var iconElemFalse = config.iconElements[btnType + "__false"] || null;
  var iconElemTrue = config.iconElements[btnType + "__true"] || null;
  return React.createElement("button", {
    className: CssClasses(defaultClassName, className || ''),
    disabled: !enabled,
    hidden: hidden,
    onClick: onClick
  }, React.createElement(SrOnly, {
    config: config
  }, children), !iconElemFalse && React.createElement("span", {
    className: CssClasses(iconClassNamesFalse),
    hidden: toggleState
  }), iconElemFalse, !iconElemTrue && React.createElement("span", {
    className: CssClasses(iconClassNamesTrue),
    hidden: !toggleState
  }), iconElemTrue);
};

var TracklistMenu = function TracklistMenu(_ref) {
  var _ref$tracklist = _ref.tracklist,
      tracklist = _ref$tracklist === void 0 ? [] : _ref$tracklist,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? 0 : _ref$selected,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible,
      onSelect = _ref.onSelect,
      id = _ref.id,
      className = _ref.className;

  var onSelectTrack = function onSelectTrack(e) {
    var itemElem = e.target;
    var indexAttr = itemElem.getAttribute('data-value') || null;

    if (indexAttr === null) {
      return;
    }

    var index = parseInt(indexAttr, 10);

    if (typeof onSelect === 'function') {
      onSelect(index);
    }
  };

  var trackOptions = tracklist.map(function (track, index) {
    return React.createElement(MenuItem, {
      key: index,
      label: track.label,
      value: index,
      selected: index === selected,
      onSelect: onSelectTrack
    });
  });
  return React.createElement(Menu, {
    className: [className || '', 'track-menu'].join(' '),
    id: id,
    visible: visible
  }, trackOptions);
};

var strPadLeft = function strPadLeft(n) {
  if (n < 10) {
    return "0" + n;
  }

  return n.toString();
};

var toHHMMSS = function toHHMMSS(str) {
  var secNum = parseInt(str, 10);
  var hours = Math.floor(secNum / 3600);
  var minutes = Math.floor((secNum - hours * 3600) / 60);
  var seconds = secNum - hours * 3600 - minutes * 60;
  return strPadLeft(hours) + ":" + strPadLeft(minutes) + ":" + strPadLeft(seconds);
};
var toMMSS = function toMMSS(str) {
  var secNum = parseInt(str, 10);
  var minutes = Math.floor(secNum / 60);
  var seconds = secNum - minutes * 60;
  return strPadLeft(minutes) + ":" + strPadLeft(seconds);
};

var AudioPlayer = function AudioPlayer(_ref) {
  var _ref$playlist = _ref.playlist,
      playlist = _ref$playlist === void 0 ? [] : _ref$playlist,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? 'audio-player' : _ref$id,
      className = _ref.className,
      eventRouter = _ref.eventRouter,
      crossOrigin = _ref.crossOrigin,
      _ref$onEndNextFile = _ref.onEndNextFile,
      onEndNextFile = _ref$onEndNextFile === void 0 ? false : _ref$onEndNextFile,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config,
      _ref$singleTrack = _ref.singleTrack,
      singleTrack = _ref$singleTrack === void 0 ? false : _ref$singleTrack;
  var audioElem = React.useRef(null);
  var timeElapsedElem = React.useRef(null);
  var durationElem = React.useRef(null);

  var _React$useState = React.useState(0),
      duration = _React$useState[0],
      setDuration = _React$useState[1];

  var _React$useState2 = React.useState(0),
      timestamp = _React$useState2[0],
      setTimestamp = _React$useState2[1];

  var _React$useState3 = React.useState([]),
      fileData = _React$useState3[0],
      setFileData = _React$useState3[1];

  var _React$useState4 = React.useState(0),
      selectedFile = _React$useState4[0],
      setSelectedFile = _React$useState4[1];

  var _React$useState5 = React.useState(0),
      progress = _React$useState5[0],
      setProgress = _React$useState5[1];

  var _React$useState6 = React.useState(false),
      playing = _React$useState6[0],
      setPlaying = _React$useState6[1];

  var _React$useState7 = React.useState(false),
      ended = _React$useState7[0],
      setEnded = _React$useState7[1];

  var _React$useState8 = React.useState(false),
      muted = _React$useState8[0],
      setMuted = _React$useState8[1];

  var _React$useState9 = React.useState(null),
      selectedLanguage = _React$useState9[0],
      setSelectedLanguage = _React$useState9[1];

  var _React$useState10 = React.useState(false),
      showTrackListMenu = _React$useState10[0],
      setShowTrackListMenu = _React$useState10[1];

  var _React$useState11 = React.useState(false),
      showSubtitleMenu = _React$useState11[0],
      setShowSubtitleMenu = _React$useState11[1];

  var _React$useState12 = React.useState(false),
      videoMetadataLoaded = _React$useState12[0],
      setVideoMetadataLoaded = _React$useState12[1];

  var captionsContainerId = id + "__captions";
  var timeIndicatorId = id + "__time-indicator";
  var durationIndicatorId = id + "__duration-indicator";
  var tracklistId = id + "__track-list";
  var subtitleMenuId = id + "__subtitle-menu";

  var getTimestampString = function getTimestampString(seconds, isDuration) {
    if (seconds === void 0) {
      seconds = 0;
    }

    if (isDuration === void 0) {
      isDuration = false;
    }

    if (config.useHoursInTimestamps && (isDuration && seconds >= 3600 || duration >= 3600)) {
      return toHHMMSS(seconds.toString());
    }

    return toMMSS(seconds.toString());
  };

  React.useEffect(function () {
    audioElem.current.setAttribute('playsinline', 'playsinline');
  }, []);
  React.useEffect(function () {
    setFileData(playlist);
    setSelectedFile(0);
  }, [playlist]);
  var canPlayPrev = selectedFile > 0;
  var canPlayNext = selectedFile < fileData.length - 1;
  React.useEffect(function () {
    audioElem.current.load();
    audioElem.current.currentTime = 0;
    setProgress(0);
  }, [selectedFile]);

  var selectTrack = function selectTrack(trackNumber) {
    setPlaying(false);
    setEnded(false);
    setVideoMetadataLoaded(false);
    setSelectedFile(trackNumber);
  };

  var hasVtt = function hasVtt(file) {
    return file.transcriptUrl && file.transcriptUrl.length > 0;
  };

  var subtitleTracks = function subtitleTracks() {
    if (!videoMetadataLoaded) {
      return [];
    }

    return audioElem.current.textTracks;
  };

  var playable = fileData && fileData.length && videoMetadataLoaded;

  var selectSubtitleLanguage = function selectSubtitleLanguage(lang) {
    setShowSubtitleMenu(false);
    setSelectedLanguage(lang && lang.length ? lang : null);
  };

  var onLoadedMetadata = function onLoadedMetadata() {
    setVideoMetadataLoaded(true);
    selectSubtitleLanguage(selectedLanguage);
    setDuration(audioElem.current.duration);
  };

  var onTimeUpdate = function onTimeUpdate() {
    if (duration > 0) {
      var value = 100 / duration * audioElem.current.currentTime;
      setProgress(value);
      setTimestamp(audioElem.current.currentTime);
    }
  };

  var playPauseAction = function playPauseAction() {
    if (!playable) {
      return;
    }

    var newPlaying = false;

    if (audioElem.current.paused) {
      audioElem.current.play();
      newPlaying = true;
    } else {
      audioElem.current.pause();
    }

    setPlaying(newPlaying);
    setTimestamp(audioElem.current.currentTime);

    if (eventRouter) {
      eventRouter.emit('state.playing', newPlaying);
    }
  };

  var nextTrackAction = function nextTrackAction() {
    if (canPlayNext) {
      selectTrack(selectedFile + 1);
    }
  };

  var nextTrackAndPlayAction = function nextTrackAndPlayAction() {
    if (canPlayNext) {
      nextTrackAction();
      setTimeout(function () {
        return playPauseAction();
      }, 500);
    }
  };

  var onEnded = function onEnded() {
    if (onEndNextFile) {
      nextTrackAndPlayAction();
      return;
    }

    setEnded(true);
    setTimestamp(audioElem.current.currentTime);

    if (eventRouter) {
      eventRouter.emit('state.playing', false);
      eventRouter.emit('state.ended', true);
    }
  };

  var moveBackwardAction = function moveBackwardAction() {
    if (!playable) {
      return;
    }

    audioElem.current.currentTime -= config.rewindTime || 5;
  };

  var moveForwardAction = function moveForwardAction() {
    if (!playable) {
      return;
    }

    audioElem.current.currentTime += config.fastForwardTime || 5;
  };

  var rewindAction = function rewindAction() {
    audioElem.current.currentTime = 0;
    setEnded(false);
    setTimestamp(audioElem.current.currentTime);
    setProgress(0);

    if (eventRouter) {
      eventRouter.emit('state.ended', false);
    }
  };

  React.useEffect(function () {
    var i;

    for (i = 0; i < audioElem.current.textTracks.length; i += 1) {
      audioElem.current.textTracks[i].mode = audioElem.current.textTracks[i].language === selectedLanguage ? 'showing' : 'hidden';
    }
  }, [selectedLanguage]);

  var toggleMuteAction = function toggleMuteAction() {
    var newMute = !audioElem.current.muted;
    audioElem.current.muted = newMute;
    setMuted(newMute);
  };

  var handleRemoteAction = function handleRemoteAction(action) {
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

  React.useEffect(function () {
    if (eventRouter) {
      eventRouter.on('remote.action', handleRemoteAction);
    }

    return function () {
      if (eventRouter) {
        eventRouter.off('remote.action', handleRemoteAction);
      }
    };
  }, []);
  var currentFile = fileData[selectedFile] || null;
  return React.createElement("div", {
    className: CssClasses('video-wrapper', className)
  }, React.createElement("audio", {
    className: CssClasses('video-element', className),
    "data-oh-audio-player": "1",
    crossOrigin: crossOrigin,
    preload: "metadata",
    ref: audioElem,
    onLoadedMetadata: onLoadedMetadata,
    onEnded: onEnded,
    onTimeUpdate: onTimeUpdate,
    "aria-describedby": captionsContainerId
  }, currentFile && React.createElement("source", {
    src: currentFile.audioUrl,
    type: "audio/mpeg"
  }), currentFile && hasVtt(currentFile) && React.createElement("track", {
    src: currentFile.transcriptUrl,
    kind: "captions",
    label: "English",
    srcLang: "en"
  })), React.createElement("div", {
    className: CssClasses('video-controls', className)
  }, React.createElement(ScrubBar, {
    defaultValue: progress,
    className: "video-controls__progress-bar",
    onClick: function onClick(pos) {
      audioElem.current.currentTime = pos * duration;
    }
  }), React.createElement("label", {
    className: "sr-only",
    htmlFor: timeIndicatorId
  }, "Time elapsed"), React.createElement("input", {
    className: CssClasses('video-controls', className, 'time-elapsed'),
    id: timeIndicatorId,
    readOnly: true,
    ref: timeElapsedElem,
    value: getTimestampString(timestamp)
  }), config.showDuration && React.createElement(React.Fragment, null, React.createElement("label", {
    className: "sr-only",
    htmlFor: durationIndicatorId
  }, "Duration"), React.createElement("input", {
    className: CssClasses('video-controls', className, 'duration'),
    id: durationIndicatorId,
    readOnly: true,
    ref: durationElem,
    value: getTimestampString(duration, true)
  })), React.createElement("div", {
    className: "w-100"
  }), React.createElement("div", {
    className: CssClasses('video-controls', className, 'button-wrapper')
  }, React.createElement(ToggleButton, {
    btnType: "tracklist",
    "aria-controls": tracklistId,
    enabled: fileData.length > 0 && !singleTrack,
    onClick: function onClick() {
      setShowSubtitleMenu(false);
      setShowTrackListMenu(!showTrackListMenu);
    },
    toggleState: showTrackListMenu,
    config: config
  }, "Tracklist"), React.createElement("div", {
    className: CssClasses('video-controls', className, 'button-wrapper__space')
  }), React.createElement(ActionButton, {
    btnType: "previous-audio",
    enabled: fileData.length > 1 && canPlayPrev,
    onClick: function onClick() {
      if (canPlayPrev) {
        selectTrack(selectedFile - 1);
      }
    },
    config: config
  }, "Previous track"), React.createElement(ActionButton, {
    btnType: "backward",
    onClick: moveBackwardAction,
    config: config
  }, "Rewind"), React.createElement(ToggleButton, {
    btnType: "play",
    hidden: ended,
    onClick: playPauseAction,
    toggleState: playing,
    config: config
  }, playing ? 'Pause' : 'Play'), React.createElement(ActionButton, {
    btnType: "reset",
    enabled: ended,
    hidden: !ended,
    onClick: rewindAction,
    config: config
  }, "Restart"), React.createElement(ActionButton, {
    btnType: "forward",
    onClick: moveForwardAction,
    config: config
  }, "Fast forward"), React.createElement(ActionButton, {
    btnType: "next-audio",
    enabled: fileData.length > 1 && canPlayNext,
    onClick: nextTrackAction,
    config: config
  }, "Next track"), React.createElement(ToggleButton, {
    btnType: "closed-captioning",
    "aria-controls": subtitleMenuId,
    enabled: videoMetadataLoaded && hasVtt(currentFile),
    onClick: function onClick() {
      setShowTrackListMenu(false);
      setShowSubtitleMenu(!showSubtitleMenu);
    },
    toggleState: showSubtitleMenu,
    config: config
  }, "Closed captioning"), React.createElement("div", {
    className: CssClasses('video-controls', className, 'button-wrapper__space')
  }), React.createElement(ToggleButton, {
    btnType: "mute",
    onClick: toggleMuteAction,
    toggleState: muted,
    config: config
  }, "Mute"))), React.createElement(SubtitleMenu, {
    visible: showSubtitleMenu,
    id: subtitleMenuId,
    tracks: subtitleTracks(),
    selected: selectedLanguage,
    onSelect: selectSubtitleLanguage
  }), React.createElement(TracklistMenu, {
    visible: !singleTrack && showTrackListMenu,
    id: tracklistId,
    tracklist: fileData,
    selected: selectedFile,
    onSelect: function onSelect(trackNumber) {
      setShowTrackListMenu(false);
      selectTrack(trackNumber);
    }
  }), React.createElement(SubtitleContainer, {
    visible: selectedLanguage !== null,
    lang: selectedLanguage,
    tracks: subtitleTracks(),
    id: captionsContainerId
  }));
};

exports.default = AudioPlayer;
//# sourceMappingURL=react-ts-media-player.cjs.development.js.map
