/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/ActionButton.js":
/*!******************************!*\
  !*** ./dist/ActionButton.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SrOnly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SrOnly */ "./dist/SrOnly.js");
/* harmony import */ var _Util_CssClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Util/CssClasses */ "./dist/Util/CssClasses.js");




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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: Object(_Util_CssClasses__WEBPACK_IMPORTED_MODULE_2__["default"])(defaultClassName, className || ''),
    disabled: !enabled,
    hidden: hidden,
    onClick: onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SrOnly__WEBPACK_IMPORTED_MODULE_1__["default"], {
    config: config
  }, children), !iconElem && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: Object(_Util_CssClasses__WEBPACK_IMPORTED_MODULE_2__["default"])(iconClassNames, '')
  }), iconElem);
};

/* harmony default export */ __webpack_exports__["default"] = (ActionButton);

/***/ }),

/***/ "./dist/AudioPlayer.js":
/*!*****************************!*\
  !*** ./dist/AudioPlayer.js ***!
  \*****************************/
/*! exports provided: default, defaultConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConfigs", function() { return defaultConfigs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionButton */ "./dist/ActionButton.js");
/* harmony import */ var _ScrubBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScrubBar */ "./dist/ScrubBar.js");
/* harmony import */ var _SubtitleContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubtitleContainer */ "./dist/SubtitleContainer.js");
/* harmony import */ var _SubtitleMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubtitleMenu */ "./dist/SubtitleMenu.js");
/* harmony import */ var _ToggleButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ToggleButton */ "./dist/ToggleButton.js");
/* harmony import */ var _TracklistMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TracklistMenu */ "./dist/TracklistMenu.js");
/* harmony import */ var _Configs_FontAwesome5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Configs/FontAwesome5 */ "./dist/Configs/FontAwesome5.js");
/* harmony import */ var _Util_CssClasses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Util/CssClasses */ "./dist/Util/CssClasses.js");
/* harmony import */ var _TimeUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TimeUtils */ "./dist/TimeUtils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      fileData = _React$useState2[0],
      setFileData = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selectedFile = _React$useState4[0],
      setSelectedFile = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      progress = _React$useState6[0],
      setProgress = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('00:00'),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      timestamp = _React$useState8[0],
      setTimestamp = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      playing = _React$useState10[0],
      setPlaying = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      ended = _React$useState12[0],
      setEnded = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      muted = _React$useState14[0],
      setMuted = _React$useState14[1];

  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      selectedLanguage = _React$useState16[0],
      setSelectedLanguage = _React$useState16[1];

  var _React$useState17 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      showTrackListMenu = _React$useState18[0],
      setShowTrackListMenu = _React$useState18[1];

  var _React$useState19 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState20 = _slicedToArray(_React$useState19, 2),
      showSubtitleMenu = _React$useState20[0],
      setShowSubtitleMenu = _React$useState20[1];

  var _React$useState21 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState22 = _slicedToArray(_React$useState21, 2),
      videoMetadataLoaded = _React$useState22[0],
      setVideoMetadataLoaded = _React$useState22[1];

  var captionsContainerId = "".concat(id, "__captions");
  var timeIndicatorId = "".concat(id, "__time-indicator");
  var durationIndicatorId = "".concat(id, "__duration-indicator");
  var tracklistId = "".concat(id, "__track-list");
  var subtitleMenuId = "".concat(id, "__subtitle-menu");
  var audioElem = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  var timeElapsedElem = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  var durationElem = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    audioElem.current.setAttribute('playsinline', 'playsinline');
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    setFileData(playlist);
    setSelectedFile(0);
  }, [playlist]);
  var canPlayPrev = selectedFile > 0;
  var canPlayNext = selectedFile < fileData.length - 1;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
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
  };

  var onTimeUpdate = function onTimeUpdate() {
    if (audioElem.current.duration > 0) {
      var value = 100 / audioElem.current.duration * audioElem.current.currentTime;
      setProgress(value);
      setTimestamp(Object(_TimeUtils__WEBPACK_IMPORTED_MODULE_9__["toMMSS"])(audioElem.current.currentTime));
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
    setTimestamp(Object(_TimeUtils__WEBPACK_IMPORTED_MODULE_9__["toMMSS"])(audioElem.current.currentTime));

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
    setTimestamp(Object(_TimeUtils__WEBPACK_IMPORTED_MODULE_9__["toMMSS"])(audioElem.current.currentTime));

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
    setTimestamp(Object(_TimeUtils__WEBPACK_IMPORTED_MODULE_9__["toMMSS"])(audioElem.current.currentTime));
    setProgress(0);

    if (eventRouter) {
      eventRouter.emit('state.ended', false);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
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

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(_Util_CssClasses__WEBPACK_IMPORTED_MODULE_8__["default"])('video-wrapper', className)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio", {
    className: Object(_Util_CssClasses__WEBPACK_IMPORTED_MODULE_8__["default"])('video-element', className),
    "data-oh-audio-player": "1",
    crossOrigin: crossOrigin,
    preload: "metadata",
    ref: audioElem,
    onLoadedMetadata: onLoadedMetadata,
    onEnded: onEnded,
    onTimeUpdate: onTimeUpdate,
    "aria-describedby": captionsContainerId
  }, currentFile && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    src: currentFile.audioUrl,
    type: "audio/mpeg"
  }), currentFile && hasVtt(currentFile) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("track", {
    src: currentFile.transcriptUrl,
    kind: "captions",
    label: "English",
    srcLang: "en"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(_Util_CssClasses__WEBPACK_IMPORTED_MODULE_8__["default"])('video-controls', className)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScrubBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    defaultValue: progress,
    className: "video-controls__progress-bar",
    onClick: function onClick(pos) {
      audioElem.current.currentTime = pos * audioElem.current.duration;
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: timeIndicatorId
  }, "Time elapsed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: Object(_Util_CssClasses__WEBPACK_IMPORTED_MODULE_8__["default"])('video-controls', className, 'time-elapsed'),
    id: timeIndicatorId,
    readOnly: true,
    ref: durationElem,
    value: timestamp
  }), config.showDuration && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: durationIndicatorId
  }, "Duration"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: Object(_Util_CssClasses__WEBPACK_IMPORTED_MODULE_8__["default"])('video-controls', className, 'duration'),
    id: durationIndicatorId,
    readOnly: true,
    ref: timeElapsedElem,
    value: Object(_TimeUtils__WEBPACK_IMPORTED_MODULE_9__["toMMSS"])(audioElem.current ? audioElem.current.duration : 0)
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-100"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(_Util_CssClasses__WEBPACK_IMPORTED_MODULE_8__["default"])('video-controls', className, 'button-wrapper')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    btnType: "tracklist",
    "aria-controls": tracklistId,
    enabled: fileData.length > 0 && !singleTrack,
    onClick: function onClick() {
      setShowSubtitleMenu(false);
      setShowTrackListMenu(!showTrackListMenu);
    },
    toggleState: showTrackListMenu,
    config: config
  }, "Tracklist"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(_Util_CssClasses__WEBPACK_IMPORTED_MODULE_8__["default"])('video-controls', className, 'button-wrapper__space')
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    btnType: "previous-audio",
    enabled: fileData.length > 1 && canPlayPrev,
    onClick: function onClick() {
      if (canPlayPrev) {
        selectTrack(selectedFile - 1);
      }
    },
    config: config
  }, "Previous track"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    btnType: "backward",
    onClick: moveBackwardAction,
    config: config
  }, "Rewind"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    btnType: "play",
    hidden: ended,
    onClick: playPauseAction,
    toggleState: playing,
    config: config
  }, playing ? 'Pause' : 'Play'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    btnType: "reset",
    enabled: ended,
    hidden: !ended,
    onClick: rewindAction,
    config: config
  }, "Restart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    btnType: "forward",
    onClick: moveForwardAction,
    config: config
  }, "Fast forward"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    btnType: "next-audio",
    enabled: fileData.length > 1 && canPlayNext,
    onClick: nextTrackAction,
    config: config
  }, "Next track"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    btnType: "closed-captioning",
    "aria-controls": subtitleMenuId,
    enabled: videoMetadataLoaded && hasVtt(currentFile),
    onClick: function onClick() {
      setShowTrackListMenu(false);
      setShowSubtitleMenu(!showSubtitleMenu);
    },
    toggleState: showSubtitleMenu,
    config: config
  }, "Closed captioning"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(_Util_CssClasses__WEBPACK_IMPORTED_MODULE_8__["default"])('video-controls', className, 'button-wrapper__space')
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    btnType: "mute",
    onClick: toggleMuteAction,
    toggleState: muted,
    config: config
  }, "Mute"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubtitleMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    visible: showSubtitleMenu,
    id: subtitleMenuId,
    tracks: subtitleTracks(),
    selected: selectedLanguage,
    onSelect: selectSubtitleLanguage
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TracklistMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    visible: !singleTrack && showTrackListMenu,
    id: tracklistId,
    tracklist: fileData,
    selected: selectedFile,
    onSelect: function onSelect(trackNumber) {
      setShowTrackListMenu(false);
      selectTrack(trackNumber);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubtitleContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    visible: selectedLanguage !== null,
    lang: selectedLanguage,
    tracks: subtitleTracks(),
    id: captionsContainerId
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AudioPlayer);
var defaultConfigs = {
  FontAwesome5: _Configs_FontAwesome5__WEBPACK_IMPORTED_MODULE_7__["default"]
};

/***/ }),

/***/ "./dist/Configs/FontAwesome5.js":
/*!**************************************!*\
  !*** ./dist/Configs/FontAwesome5.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  classNames: {
    'sr-only': ['sr-only'],
    tracklist: ['btn', 'btn-tracklist'],
    'previous-audio': ['btn', 'btn-previous-audio'],
    backward: ['btn', 'btn-backward'],
    play: ['btn', 'btn-play'],
    reset: ['btn', 'btn-reset'],
    forward: ['btn', 'btn-forward'],
    'next-audio': ['btn', 'btn-next-audio'],
    'closed-captioning': ['btn', 'btn-closed-captioning'],
    mute: ['btn', 'btn-mute']
  },
  icons: {
    tracklist__false: ['fa', 'fa-list-ol'],
    tracklist__true: ['fa', 'fa-window-close'],
    'previous-audio': ['fa', 'fa-step-backward'],
    backward: ['fa', 'fa-backward'],
    play__false: ['fa', 'fa-play'],
    play__true: ['fa', 'fa-pause'],
    reset: ['fa', 'fa-undo'],
    forward: ['fa', 'fa-forward'],
    'next-audio': ['fa', 'fa-step-forward'],
    'closed-captioning__false': ['fa', 'fa-closed-captioning'],
    'closed-captioning__true': ['fa', 'fa-window-close'],
    mute__false: ['fa', 'fa-volume-up'],
    mute__true: ['fa', 'fa-volume-off']
  },
  iconElements: {
    tracklist__false: null,
    tracklist__true: null,
    'previous-audio': null,
    backward: null,
    play__false: null,
    play__true: null,
    reset: null,
    forward: null,
    'next-audio': null,
    'closed-captioning__false': null,
    'closed-captioning__true': null,
    mute__false: null,
    mute__true: null
  }
});

/***/ }),

/***/ "./dist/Menu.js":
/*!**********************!*\
  !*** ./dist/Menu.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Menu = function Menu(_ref) {
  var id = _ref.id,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible,
      className = _ref.className,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    className: ['video-wrapper__popup-menu', className || ''].join(' '),
    id: id,
    hidden: !visible,
    "aria-expanded": visible
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./dist/MenuItem.js":
/*!**************************!*\
  !*** ./dist/MenuItem.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var MenuItem = function MenuItem(_ref) {
  var label = _ref.label,
      value = _ref.value,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? false : _ref$selected,
      onSelect = _ref.onSelect;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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

/* harmony default export */ __webpack_exports__["default"] = (MenuItem);

/***/ }),

/***/ "./dist/ScrubBar.js":
/*!**************************!*\
  !*** ./dist/ScrubBar.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var getOffsetX = function getOffsetX(e) {
  if (typeof e.nativeEvent.offsetX === 'number') {
    return e.nativeEvent.offsetX;
  }

  if (_typeof(e.targetTouches) === 'object') {
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
  var outer = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(defaultValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      offsetX = _React$useState4[0],
      setOffsetX = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      scrubbing = _React$useState6[0],
      setScrubbing = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    setValue(defaultValue);
  }, [defaultValue]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ["".concat(className, "__fill")].join(' '),
    style: {
      width: "".concat(value, "%")
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "".concat(value, " percent"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ScrubBar);

/***/ }),

/***/ "./dist/SrOnly.js":
/*!************************!*\
  !*** ./dist/SrOnly.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SrOnly = function SrOnly(_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config,
      children = _ref.children;
  var classNames = [].concat(config.classNames['sr-only'] || []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classNames.join(' ')
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (SrOnly);

/***/ }),

/***/ "./dist/SubtitleContainer.js":
/*!***********************************!*\
  !*** ./dist/SubtitleContainer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      text = _React$useState2[0],
      setText = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      currentTrack = _React$useState4[0],
      setCurrentTrack = _React$useState4[1];

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

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (currentTrack) {
      currentTrack.addEventListener('cuechange', cueChange, false);
    }

    return function () {
      if (currentTrack) {
        currentTrack.removeEventListener('cuechange', cueChange, false);
      }
    };
  }, [memoiseTrack(currentTrack)]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

/* harmony default export */ __webpack_exports__["default"] = (SubtitleContainer);

/***/ }),

/***/ "./dist/SubtitleMenu.js":
/*!******************************!*\
  !*** ./dist/SubtitleMenu.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ "./dist/Menu.js");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem */ "./dist/MenuItem.js");




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

  var languageOptions = [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      languageOptions.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: "".concat(track.language, "-").concat(i),
        label: track.label,
        value: track.language,
        selected: selected && track.language === selected,
        onSelect: onSelectLang
      }));
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: [className || '', 'subtitles-menu'].join(' '),
    id: id,
    visible: visible
  }, languageOptions);
};

/* harmony default export */ __webpack_exports__["default"] = (SubtitleMenu);

/***/ }),

/***/ "./dist/TimeUtils.js":
/*!***************************!*\
  !*** ./dist/TimeUtils.js ***!
  \***************************/
/*! exports provided: toHHMMSS, toMMSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHHMMSS", function() { return toHHMMSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMMSS", function() { return toMMSS; });
var strPadLeft = function strPadLeft(n) {
  if (n < 10) {
    return "0".concat(n);
  }

  return n.toString();
};

var toHHMMSS = function toHHMMSS(str) {
  var secNum = parseInt(str, 10);
  var hours = Math.floor(secNum / 3600);
  var minutes = Math.floor((secNum - hours * 3600) / 60);
  var seconds = secNum - hours * 3600 - minutes * 60;
  return "".concat(strPadLeft(hours), ":").concat(strPadLeft(minutes), ":").concat(strPadLeft(seconds));
};
var toMMSS = function toMMSS(str) {
  var secNum = parseInt(str, 10);
  var minutes = Math.floor(secNum / 60);
  var seconds = secNum - minutes * 60;
  return "".concat(strPadLeft(minutes), ":").concat(strPadLeft(seconds));
};

/***/ }),

/***/ "./dist/ToggleButton.js":
/*!******************************!*\
  !*** ./dist/ToggleButton.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SrOnly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SrOnly */ "./dist/SrOnly.js");
/* harmony import */ var _Util_CssClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Util/CssClasses */ "./dist/Util/CssClasses.js");




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
  var iconClassNamesFalse = (config.icons["".concat(btnType, "__false")] || []).join(' ');
  var iconClassNamesTrue = (config.icons["".concat(btnType, "__true")] || []).join(' ');
  var iconElemFalse = config.iconElements["".concat(btnType, "__false")] || null;
  var iconElemTrue = config.iconElements["".concat(btnType, "__true")] || null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: Object(_Util_CssClasses__WEBPACK_IMPORTED_MODULE_2__["default"])(defaultClassName, className || ''),
    disabled: !enabled,
    hidden: hidden,
    onClick: onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SrOnly__WEBPACK_IMPORTED_MODULE_1__["default"], {
    config: config
  }, children), !iconElemFalse && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: Object(_Util_CssClasses__WEBPACK_IMPORTED_MODULE_2__["default"])(iconClassNamesFalse),
    hidden: toggleState
  }), iconElemFalse, !iconElemTrue && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: Object(_Util_CssClasses__WEBPACK_IMPORTED_MODULE_2__["default"])(iconClassNamesTrue),
    hidden: !toggleState
  }), iconElemTrue);
};

/* harmony default export */ __webpack_exports__["default"] = (ToggleButton);

/***/ }),

/***/ "./dist/TracklistMenu.js":
/*!*******************************!*\
  !*** ./dist/TracklistMenu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ "./dist/Menu.js");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem */ "./dist/MenuItem.js");




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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      label: track.label,
      value: index,
      selected: index === selected,
      onSelect: onSelectTrack
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: [className || '', 'track-menu'].join(' '),
    id: id,
    visible: visible
  }, trackOptions);
};

/* harmony default export */ __webpack_exports__["default"] = (TracklistMenu);

/***/ }),

/***/ "./dist/Util/CssClasses.js":
/*!*********************************!*\
  !*** ./dist/Util/CssClasses.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CssClasses = function CssClasses(defaultClassName) {
  var optionalClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var states = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var classes = [].concat(defaultClassName.split(/\s+/)).concat(optionalClassName.split(/\s+/)).filter(function (c) {
    return c && c.length;
  }).map(function (c) {
    return suffix.length ? "".concat(c, "__").concat(suffix) : c;
  });
  return classes.reduce(function (agg, className) {
    return agg.concat([''].concat(states.filter(function (s) {
      return s && s.length;
    })).map(function (state) {
      return "".concat(className).concat(state.length ? "--".concat(state) : '');
    }));
  }, []).join(' ');
};

/* harmony default export */ __webpack_exports__["default"] = (CssClasses);

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AudioPlayer = __webpack_require__(/*! ./dist/AudioPlayer */ "./dist/AudioPlayer.js");

module.exports = AudioPlayer["default"];

if (typeof window !== 'undefined') {
  window.AudioPlayer = AudioPlayer["default"];
  window.AudioPlayer.defaultConfigs = AudioPlayer.defaultConfigs;
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ })

/******/ });
//# sourceMappingURL=index.dev.js.map