import React__default, { useRef, useState, useEffect, useCallback, createElement, Fragment } from 'react';
import debounce from 'debounce';

var collapseArrayProperty = function collapseArrayProperty(prop, delimiter) {
  if (prop === void 0) {
    prop = [];
  }
  if (delimiter === void 0) {
    delimiter = ' ';
  }
  var localProp = prop;
  if (!Array.isArray(localProp)) {
    localProp = [localProp];
  }
  return localProp.join(delimiter);
};

var SrOnly = function SrOnly(_ref) {
  var _ref$config = _ref.config,
    config = _ref$config === void 0 ? {} : _ref$config,
    children = _ref.children;
  var classNames = [].concat(collapseArrayProperty(config.classNames['sr-only']));
  return /*#__PURE__*/React__default.createElement("span", {
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
    config = _ref$config === void 0 ? {} : _ref$config,
    ariaControls = _ref.ariaControls;
  var defaultClassName = collapseArrayProperty(config.classNames[btnType]);
  var iconClassNames = collapseArrayProperty(config.icons[btnType]);
  var iconElem = config.iconElements[btnType] || null;
  return /*#__PURE__*/React__default.createElement("button", {
    className: CssClasses(defaultClassName, className || ''),
    disabled: !enabled,
    hidden: hidden,
    onClick: onClick,
    "aria-controls": ariaControls
  }, /*#__PURE__*/React__default.createElement(SrOnly, {
    config: config
  }, children), !iconElem && /*#__PURE__*/React__default.createElement("span", {
    className: CssClasses(iconClassNames, '')
  }), iconElem);
};

var clampNumber = function clampNumber(num, min, max) {
  return Math.max(min, Math.min(max, num));
};

var getOffsetXNative = function getOffsetXNative(e, container) {
  var offsetX = 0;
  var rect = container.getBoundingClientRect();
  if (e.type === 'mousemove') {
    offsetX = e.pageX - rect.left;
  }
  if (e.type === 'touchmove') {
    offsetX = e.targetTouches[0].pageX - rect.left;
  }
  return offsetX;
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
var ON_CLICK_DEBOUNCE = 250;
var ScrubBarTooltip = function ScrubBarTooltip(_ref) {
  var title = _ref.title,
    className = _ref.className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  return /*#__PURE__*/React__default.createElement("div", {
    style: style,
    className: className || ''
  }, title);
};
var ScrubBarTooltipOuter = function ScrubBarTooltipOuter(_ref2) {
  var wrapperClassName = _ref2.wrapperClassName,
    tooltipClassName = _ref2.tooltipClassName,
    _ref2$valueToTooltipS = _ref2.valueToTooltipString,
    valueToTooltipString = _ref2$valueToTooltipS === void 0 ? function () {
      return '';
    } : _ref2$valueToTooltipS,
    _ref2$defaultValue = _ref2.defaultValue,
    defaultValue = _ref2$defaultValue === void 0 ? 0 : _ref2$defaultValue,
    _ref2$show = _ref2.show,
    show = _ref2$show === void 0 ? false : _ref2$show;
  var outer = React__default.useRef(null);
  var _React$useState = React__default.useState(defaultValue),
    value = _React$useState[0],
    setValue = _React$useState[1];
  var outerWidth = outer.current ? outer.current.clientWidth : 0;
  var content = valueToTooltipString(value) || '';
  return /*#__PURE__*/React__default.createElement("div", {
    ref: outer,
    onMouseMove: function onMouseMove(e) {
      setValue(getOffsetX(e) / outerWidth);
    },
    className: wrapperClassName
  }, show && content.length > 0 && (/*#__PURE__*/React__default.createElement(ScrubBarTooltip, {
    title: valueToTooltipString(value),
    className: tooltipClassName,
    style: {
      left: outerWidth * value + "px"
    }
  })));
};
var ScrubBar = function ScrubBar(_ref3) {
  var _ref3$defaultValue = _ref3.defaultValue,
    defaultValue = _ref3$defaultValue === void 0 ? 0 : _ref3$defaultValue,
    _ref3$useTooltip = _ref3.useTooltip,
    useTooltip = _ref3$useTooltip === void 0 ? false : _ref3$useTooltip,
    _ref3$useRange = _ref3.useRange,
    useRange = _ref3$useRange === void 0 ? false : _ref3$useRange,
    _ref3$useProgress = _ref3.useProgress,
    useProgress = _ref3$useProgress === void 0 ? false : _ref3$useProgress,
    _ref3$valueToTooltipS = _ref3.valueToTooltipString,
    valueToTooltipString = _ref3$valueToTooltipS === void 0 ? function () {
      return '';
    } : _ref3$valueToTooltipS,
    id = _ref3.id,
    className = _ref3.className,
    label = _ref3.label,
    onClick = _ref3.onClick;
  var outer = React__default.useRef(null);
  var scrubbing = React__default.useRef(false);
  var _React$useState2 = React__default.useState(false),
    hover = _React$useState2[0],
    setHover = _React$useState2[1];
  var _React$useState3 = React__default.useState(clampNumber(defaultValue, 0, 1)),
    value = _React$useState3[0],
    setValue = _React$useState3[1];
  var _React$useState4 = React__default.useState(0),
    offsetX = _React$useState4[0],
    setOffsetX = _React$useState4[1];
  var _React$useState5 = React__default.useState(0),
    lastUpdate = _React$useState5[0],
    setLastUpdate = _React$useState5[1];
  var derivedId = id || 'scrub-bar';
  var debouncedOnClick = typeof onClick === 'function' ? debounce(onClick, ON_CLICK_DEBOUNCE) : function () {};
  var onDown = function onDown(e) {
    scrubbing.current = true;
    setOffsetX(getOffsetX(e));
  };
  var onUp = function onUp() {
    if (scrubbing.current) {
      scrubbing.current = false;
      setLastUpdate(new Date().getTime());
    }
  };
  var onMouseMove = function onMouseMove(e) {
    if (scrubbing.current) {
      setOffsetX(getOffsetXNative(e, outer.current));
    }
  };
  var onTouchMove = function onTouchMove(e) {
    if (scrubbing.current) {
      setOffsetX(getOffsetXNative(e, outer.current));
    }
  };
  React__default.useEffect(function () {
    var _window;
    if (typeof window !== 'undefined' && (_window = window) !== null && _window !== void 0 && _window.document) {
      window.document.addEventListener('mousemove', onMouseMove, false);
      window.document.addEventListener('touchmove', onTouchMove, false);
      window.document.addEventListener('mouseup', onUp, false);
      window.document.addEventListener('touchend', onUp, false);
    }
    return function () {
      var _window2;
      if (typeof window !== 'undefined' && (_window2 = window) !== null && _window2 !== void 0 && _window2.document) {
        window.document.removeEventListener('mousemove', onMouseMove, false);
        window.document.removeEventListener('touchmove', onTouchMove, false);
        window.document.removeEventListener('mouseup', onUp, false);
        window.document.removeEventListener('touchend', onUp, false);
      }
    };
  }, []);
  React__default.useEffect(function () {
    setValue(clampNumber(defaultValue, 0, 100));
  }, [defaultValue]);
  React__default.useEffect(function () {
    if (scrubbing.current) {
      var pos = clampNumber(offsetX / outer.current.clientWidth, 0, 1);
      setValue(pos * 100);
      debouncedOnClick(pos);
    }
  }, [lastUpdate, offsetX]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: CssClasses(className || '', '', '', [scrubbing.current ? 'scrubbing' : '']),
    onMouseOver: function onMouseOver() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    },
    onMouseDown: useRange ? function () {} : onDown,
    onTouchStart: useRange ? function () {} : onDown,
    ref: outer
  }, useTooltip && (/*#__PURE__*/React__default.createElement(ScrubBarTooltipOuter, {
    wrapperClassName: className + "__wraptooltip",
    tooltipClassName: className + "__tooltip",
    show: hover || scrubbing.current,
    valueToTooltipString: valueToTooltipString,
    defaultValue: value
  })), (useProgress || useRange) && (/*#__PURE__*/React__default.createElement("label", {
    htmlFor: useRange ? derivedId + "__scrubrange" : derivedId + "__progress"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "sr-only"
  }, label || '', value + " percent"), useProgress && (/*#__PURE__*/React__default.createElement("progress", {
    max: "100",
    value: value,
    className: className + "__progress",
    id: derivedId + "__progress"
  })), useRange && (/*#__PURE__*/React__default.createElement("input", {
    className: className + "__scrubrange",
    id: derivedId + "__scrubrange",
    type: "range",
    min: "0",
    max: "100",
    value: value,
    onMouseDown: onDown,
    onTouchStart: onDown,
    onChange: function onChange(e) {
      setOffsetX(parseFloat(e.currentTarget.value) / 100.0 * outer.current.clientWidth);
    }
  })))), !useRange && (/*#__PURE__*/React__default.createElement("div", {
    className: [className + "__fill"].join(' '),
    style: {
      width: value + "%"
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "sr-only"
  }, label || '', value + " percent"))));
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
  var _React$useState = React__default.useState(''),
    text = _React$useState[0],
    setText = _React$useState[1];
  var _React$useState2 = React__default.useState(null),
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
  React__default.useEffect(function () {
    if (currentTrack) {
      currentTrack.addEventListener('cuechange', cueChange, false);
    }
    return function () {
      if (currentTrack) {
        currentTrack.removeEventListener('cuechange', cueChange, false);
      }
    };
  }, [memoiseTrack(currentTrack)]);
  React__default.useEffect(function () {
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
  return /*#__PURE__*/React__default.createElement("div", {
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
  return /*#__PURE__*/React__default.createElement("ol", {
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
  return /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("button", {
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
  var languageOptions = [/*#__PURE__*/React__default.createElement(MenuItem, {
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
      languageOptions.push(/*#__PURE__*/React__default.createElement(MenuItem, {
        key: track.language + "-" + i,
        label: track.label,
        value: track.language,
        selected: selected && track.language === selected,
        onSelect: onSelectLang
      }));
    }
  }
  return /*#__PURE__*/React__default.createElement(Menu, {
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
    config = _ref$config === void 0 ? {} : _ref$config,
    ariaControls = _ref.ariaControls;
  var defaultClassName = collapseArrayProperty(config.classNames[btnType]);
  var iconClassNamesFalse = collapseArrayProperty(config.icons[btnType + "__false"]);
  var iconClassNamesTrue = collapseArrayProperty(config.icons[btnType + "__true"]);
  var iconElemFalse = config.iconElements[btnType + "__false"] || null;
  var iconElemTrue = config.iconElements[btnType + "__true"] || null;
  return /*#__PURE__*/React__default.createElement("button", {
    className: CssClasses(defaultClassName, className || ''),
    disabled: !enabled,
    hidden: hidden,
    onClick: onClick,
    "aria-controls": ariaControls
  }, /*#__PURE__*/React__default.createElement(SrOnly, {
    config: config
  }, children), !toggleState && !iconElemFalse && (/*#__PURE__*/React__default.createElement("span", {
    className: CssClasses(iconClassNamesFalse)
  })), !toggleState && iconElemFalse, toggleState && !iconElemTrue && (/*#__PURE__*/React__default.createElement("span", {
    className: CssClasses(iconClassNamesTrue)
  })), toggleState && iconElemTrue);
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
    return /*#__PURE__*/React__default.createElement(MenuItem, {
      key: index,
      label: track.label,
      value: index,
      selected: index === selected,
      onSelect: onSelectTrack
    });
  });
  return /*#__PURE__*/React__default.createElement(Menu, {
    className: [className || '', 'track-menu'].join(' '),
    id: id,
    visible: visible
  }, trackOptions);
};

var FontAwesome5 = {
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
  },
  useHoursInTimestamps: true,
  keepPlayVisibleOnEnded: false
};

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

var PlayerRemoteContext = /*#__PURE__*/React__default.createContext([]);
var defaultMultiPlayerState = {};
var DEFAULT_PLAYER_STATE = {
  lastUpdate: /*#__PURE__*/new Date().toISOString(),
  type: '',
  timestamp: 0
};
function remoteStateReducer(state, action) {
  var _extends2;
  var id = action.id,
    type = action.type,
    _action$timestamp = action.timestamp,
    timestamp = _action$timestamp === void 0 ? 0 : _action$timestamp;
  var currentState = (state === null || state === void 0 ? void 0 : state[id]) || _extends({}, DEFAULT_PLAYER_STATE);
  switch (type) {
    case "play_pause":
      {
        currentState = _extends({}, currentState, {
          type: type,
          lastUpdate: new Date().toISOString()
        });
        break;
      }
    case "play":
      {
        currentState = _extends({}, currentState, {
          type: type,
          lastUpdate: new Date().toISOString()
        });
        break;
      }
    case "pause":
      {
        currentState = _extends({}, currentState, {
          type: type,
          lastUpdate: new Date().toISOString()
        });
        break;
      }
    case "reset":
      {
        currentState = _extends({}, currentState, {
          type: type,
          lastUpdate: new Date().toISOString()
        });
        break;
      }
    case "backward":
      {
        currentState = _extends({}, currentState, {
          type: type,
          lastUpdate: new Date().toISOString()
        });
        break;
      }
    case "forward":
      {
        currentState = _extends({}, currentState, {
          type: type,
          lastUpdate: new Date().toISOString()
        });
        break;
      }
    case "timestamp_update":
      {
        currentState = _extends({}, currentState, {
          type: type,
          lastUpdate: new Date().toISOString(),
          timestamp: timestamp
        });
        break;
      }
    case "":
      {
        break;
      }
    default:
      {
        throw new Error("Unsupported action type: " + type);
      }
  }
  return _extends({}, state, (_extends2 = {}, _extends2[id] = currentState, _extends2));
}
var usePlayerRemote = function usePlayerRemote() {
  var context = React__default.useContext(PlayerRemoteContext);
  if (!context) {
    console.log("PlayerRemoteProvider not found, remote player functionality disabled.");
    return {
      state: null,
      dispatch: function dispatch() {}
    };
  }
  var state = context[0],
    dispatch = context[1];
  return {
    state: state,
    dispatch: dispatch
  };
};
var usePlayerRemoteById = function usePlayerRemoteById(id) {
  var _usePlayerRemote = usePlayerRemote(),
    state = _usePlayerRemote.state,
    _dispatch = _usePlayerRemote.dispatch;
  return {
    state: (state === null || state === void 0 ? void 0 : state[id]) || DEFAULT_PLAYER_STATE,
    dispatch: function dispatch(params) {
      if (params === void 0) {
        params = {};
      }
      return _dispatch(_extends({
        id: id
      }, params));
    }
  };
};
var PlayerRemoteProvider = function PlayerRemoteProvider(props) {
  var _React$useReducer = React__default.useReducer(remoteStateReducer, defaultMultiPlayerState),
    state = _React$useReducer[0],
    dispatch = _React$useReducer[1];
  var value = React__default.useMemo(function () {
    return [state, dispatch];
  }, [state]);
  return /*#__PURE__*/React__default.createElement(PlayerRemoteContext.Provider, Object.assign({
    value: value
  }, props));
};

var strPadLeft = function strPadLeft(n) {
  if (n < 10) {
    return "0" + n;
  }
  return n.toString();
};
var toHHMMSS = function toHHMMSS(str) {
  var secNum = parseInt(str, 10);
  if (Number.isNaN(secNum)) {
    return '';
  }
  var hours = Math.floor(secNum / 3600);
  var minutes = Math.floor((secNum - hours * 3600) / 60);
  var seconds = secNum - hours * 3600 - minutes * 60;
  return strPadLeft(hours) + ":" + strPadLeft(minutes) + ":" + strPadLeft(seconds);
};
var toMMSS = function toMMSS(str) {
  var secNum = parseInt(str, 10);
  if (Number.isNaN(secNum)) {
    return '';
  }
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
    singleTrack = _ref$singleTrack === void 0 ? false : _ref$singleTrack,
    _ref$useRangeOnScrubB = _ref.useRangeOnScrubBar,
    useRangeOnScrubBar = _ref$useRangeOnScrubB === void 0 ? false : _ref$useRangeOnScrubB,
    _ref$useProgressOnScr = _ref.useProgressOnScrubBar,
    useProgressOnScrubBar = _ref$useProgressOnScr === void 0 ? false : _ref$useProgressOnScr,
    onLoad = _ref.onLoad,
    onPlay = _ref.onPlay,
    onPause = _ref.onPause,
    onEnd = _ref.onEnd,
    onTimeUpdate = _ref.onTimeUpdate,
    onBufferingUpdate = _ref.onBufferingUpdate,
    _ref$debug = _ref.debug,
    debug = _ref$debug === void 0 ? false : _ref$debug;
  var audioElem = useRef(null);
  var timeElapsedElem = useRef(null);
  var durationElem = useRef(null);
  var _React$useState = useState(0),
    duration = _React$useState[0],
    setDuration = _React$useState[1];
  var _React$useState2 = useState(0),
    timestamp = _React$useState2[0],
    setTimestamp = _React$useState2[1];
  var _React$useState3 = useState([]),
    fileData = _React$useState3[0],
    setFileData = _React$useState3[1];
  var _React$useState4 = useState(0),
    selectedFile = _React$useState4[0],
    setSelectedFile = _React$useState4[1];
  var _React$useState5 = useState(0),
    progress = _React$useState5[0],
    setProgress = _React$useState5[1];
  var _React$useState6 = useState(false),
    playing = _React$useState6[0],
    setPlaying = _React$useState6[1];
  var _React$useState7 = useState(false),
    buffering = _React$useState7[0],
    setBuffering = _React$useState7[1];
  var _React$useState8 = useState(false),
    ended = _React$useState8[0],
    setEnded = _React$useState8[1];
  var _React$useState9 = useState(false),
    muted = _React$useState9[0],
    setMuted = _React$useState9[1];
  var _React$useState0 = useState(null),
    selectedLanguage = _React$useState0[0],
    setSelectedLanguage = _React$useState0[1];
  var _React$useState1 = useState(false),
    showTrackListMenu = _React$useState1[0],
    setShowTrackListMenu = _React$useState1[1];
  var _React$useState10 = useState(false),
    showSubtitleMenu = _React$useState10[0],
    setShowSubtitleMenu = _React$useState10[1];
  var _React$useState11 = useState(false),
    videoMetadataLoaded = _React$useState11[0],
    setVideoMetadataLoaded = _React$useState11[1];
  var _usePlayerRemoteById = usePlayerRemoteById(id),
    remoteState = _usePlayerRemoteById.state;
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
    if (typeof seconds !== 'number') {
      return '';
    }
    if (config.useHoursInTimestamps && (isDuration && seconds >= 3600 || duration >= 3600)) {
      return toHHMMSS(seconds.toString());
    }
    return toMMSS(seconds.toString());
  };
  useEffect(function () {
    audioElem.current.setAttribute('playsinline', 'playsinline');
  }, []);
  useEffect(function () {
    setFileData(playlist);
    setSelectedFile(0);
  }, [playlist]);
  var canPlayPrev = selectedFile > 0;
  var canPlayNext = selectedFile < fileData.length - 1;
  useEffect(function () {
    audioElem.current.load();
    audioElem.current.currentTime = 0;
    setProgress(0);
  }, [selectedFile]);
  var selectTrack = function selectTrack(trackNumber) {
    setPlaying(false);
    setBuffering(false);
    setEnded(false);
    setVideoMetadataLoaded(false);
    setSelectedFile(trackNumber);
    if (typeof onLoad === 'function') {
      onLoad({
        fileData: fileData,
        selectedFile: trackNumber,
        duration: duration
      });
    }
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
  var internalOnTimeUpdate = function internalOnTimeUpdate() {
    var currentTime = audioElem.current.currentTime;
    if (duration > 0) {
      var value = 100 / duration * currentTime;
      setProgress(value);
      setTimestamp(currentTime);
    }
    if (typeof onTimeUpdate === 'function') {
      onTimeUpdate({
        fileData: fileData,
        selectedFile: selectedFile,
        currentTime: currentTime,
        duration: duration
      });
    }
  };
  var playPauseAction = useCallback(function () {
    if (!playable) {
      console.warn('Not playable');
      return;
    }
    if (buffering || !audioElem.current.paused) {
      pauseAction();
    } else {
      playAction();
    }
  }, [playable]);
  var playAction = useCallback(function () {
    if (!playable) {
      console.warn('Not playable');
      return;
    }
    var newPlaying = false;
    if (!buffering && audioElem.current.paused) {
      audioElem.current.play();
      newPlaying = true;
    }
    var currentTime = audioElem.current.currentTime;
    setPlaying(newPlaying);
    setTimestamp(currentTime);
    if (eventRouter) {
      eventRouter.emit('state.playing', newPlaying);
    }
    if (newPlaying && typeof onPlay === 'function') {
      onPlay({
        fileData: fileData,
        selectedFile: selectedFile,
        currentTime: currentTime,
        duration: duration
      });
    }
  }, [playable]);
  var pauseAction = useCallback(function () {
    if (!playable) {
      console.warn('Not playable');
      return;
    }
    if (buffering || !audioElem.current.paused) {
      audioElem.current.pause();
      setBuffering(false);
    }
    var currentTime = audioElem.current.currentTime;
    setPlaying(false);
    setTimestamp(currentTime);
    if (eventRouter) {
      eventRouter.emit('state.playing', false);
    }
    if (typeof onPause === 'function') {
      onPause({
        fileData: fileData,
        selectedFile: selectedFile,
        currentTime: currentTime,
        duration: duration
      });
    }
  }, [playable]);
  var nextTrackAction = useCallback(function () {
    if (canPlayNext) {
      selectTrack(selectedFile + 1);
    }
  }, [canPlayNext]);
  var nextTrackAndPlayAction = useCallback(function () {
    if (canPlayNext) {
      nextTrackAction();
      setTimeout(function () {
        return playPauseAction();
      }, 500);
    }
  }, [canPlayNext]);
  var onEnded = useCallback(function () {
    if (onEndNextFile) {
      nextTrackAndPlayAction();
      return;
    }
    setEnded(true);
    var currentTime = audioElem.current.currentTime;
    setTimestamp(currentTime);
    if (eventRouter) {
      eventRouter.emit('state.playing', false);
      eventRouter.emit('state.ended', true);
    }
    if (typeof onEnd === 'function') {
      onEnd({
        fileData: fileData,
        selectedFile: selectedFile,
        currentTime: currentTime,
        duration: duration
      });
    }
  }, [onEndNextFile]);
  var moveBackwardAction = useCallback(function () {
    if (!playable) {
      console.warn('Not playable');
      return;
    }
    audioElem.current.currentTime -= config.rewindTime || 5;
  }, [playable]);
  var moveForwardAction = useCallback(function () {
    if (!playable) {
      console.warn('Not playable');
      return;
    }
    audioElem.current.currentTime += config.fastForwardTime || 5;
  }, [playable]);
  var setTimeAction = useCallback(function (time) {
    if (time === void 0) {
      time = 0;
    }
    audioElem.current.currentTime = time;
    setTimestamp(time);
    var value = 100 / duration * time;
    setProgress(value);
    var hasEnded = value >= 100;
    setEnded(hasEnded);
    if (eventRouter) {
      eventRouter.emit('state.ended', hasEnded);
    }
  }, [playable]);
  var rewindAction = useCallback(function () {
    audioElem.current.currentTime = 0;
    setEnded(false);
    setTimestamp(audioElem.current.currentTime);
    setProgress(0);
    if (eventRouter) {
      eventRouter.emit('state.ended', false);
    }
  }, [playable]);
  useEffect(function () {
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
  var handleRemoteAction = useCallback(function (action, timestamp) {
    if (timestamp === void 0) {
      timestamp = 0;
    }
    if (action === 'backward') {
      moveBackwardAction();
    } else if (action === 'play_pause') {
      playPauseAction();
    } else if (action === 'play') {
      playAction();
    } else if (action === 'pause') {
      pauseAction();
    } else if (action === 'reset') {
      rewindAction();
    } else if (action === 'forward') {
      moveForwardAction();
    } else if (action === 'timestamp_update') {
      setTimeAction(timestamp);
    }
  }, [playable]);
  useEffect(function () {
    if (eventRouter) {
      eventRouter.on('remote.action', handleRemoteAction);
    }
    return function () {
      if (eventRouter) {
        eventRouter.off('remote.action', handleRemoteAction);
      }
    };
  }, []);
  useEffect(function () {
    var type = remoteState.type,
      _remoteState$timestam = remoteState.timestamp,
      timestamp = _remoteState$timestam === void 0 ? 0 : _remoteState$timestam;
    switch (type) {
      case 'play_pause':
        {
          playPauseAction();
          break;
        }
      case 'play':
        {
          playAction();
          break;
        }
      case 'pause':
        {
          pauseAction();
          break;
        }
      case 'reset':
        {
          rewindAction();
          break;
        }
      case 'backward':
        {
          moveBackwardAction();
          break;
        }
      case 'forward':
        {
          moveForwardAction();
          break;
        }
      case 'timestamp_update':
        {
          setTimeAction(timestamp);
          break;
        }
    }
  }, [remoteState]);
  var onBufferingUpdateCallback = useCallback(function (buffering) {
    if (typeof onBufferingUpdate === 'function') {
      onBufferingUpdate(buffering);
    }
  }, [onBufferingUpdate]);
  useEffect(function () {
    onBufferingUpdateCallback(buffering);
  }, [buffering]);
  var currentFile = fileData[selectedFile] || null;
  var audioTag = /*#__PURE__*/createElement("audio", {
    className: CssClasses('video-element', className),
    id: id + "__player",
    "data-oh-audio-player": "1",
    crossOrigin: crossOrigin,
    preload: "metadata",
    ref: audioElem,
    onLoadedMetadata: onLoadedMetadata,
    onEnded: onEnded,
    onTimeUpdate: internalOnTimeUpdate,
    onWaiting: function onWaiting() {
      return setBuffering(true);
    },
    onCanPlay: function onCanPlay() {
      return setBuffering(false);
    },
    onCanPlayThrough: function onCanPlayThrough() {
      return setBuffering(false);
    },
    "aria-describedby": captionsContainerId,
    controls: debug
  }, currentFile && /*#__PURE__*/createElement("source", {
    src: currentFile.audioUrl,
    type: "audio/mpeg"
  }), currentFile && hasVtt(currentFile) && (/*#__PURE__*/createElement("track", {
    src: currentFile.transcriptUrl,
    kind: "captions",
    label: "English",
    srcLang: "en"
  })));
  return /*#__PURE__*/createElement("div", {
    id: id,
    className: CssClasses('video-wrapper', className)
  }, audioTag, /*#__PURE__*/createElement("div", {
    className: CssClasses('video-controls', className)
  }, /*#__PURE__*/createElement(ScrubBar, {
    defaultValue: progress,
    className: CssClasses('video-controls', className, 'progress-bar'),
    onClick: function onClick(pos) {
      audioElem.current.currentTime = pos * duration;
      setTimestamp(pos * duration);
    },
    useTooltip: config.useTooltip || false,
    useRange: useRangeOnScrubBar,
    useProgress: useProgressOnScrubBar,
    valueToTooltipString: function valueToTooltipString(pos) {
      return getTimestampString(audioElem.current ? pos * audioElem.current.duration : 0);
    }
  }), /*#__PURE__*/createElement("label", {
    className: "sr-only",
    htmlFor: timeIndicatorId
  }, "Time elapsed"), /*#__PURE__*/createElement("input", {
    className: CssClasses('video-controls', className, 'time-elapsed'),
    id: timeIndicatorId,
    readOnly: true,
    ref: timeElapsedElem,
    value: getTimestampString(timestamp)
  }), config.showDuration && (/*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("label", {
    className: "sr-only",
    htmlFor: durationIndicatorId
  }, "Duration"), /*#__PURE__*/createElement("input", {
    className: CssClasses('video-controls', className, 'duration'),
    id: durationIndicatorId,
    readOnly: true,
    ref: durationElem,
    value: getTimestampString(duration, true)
  }))), /*#__PURE__*/createElement("div", {
    className: "w-100"
  }), /*#__PURE__*/createElement("div", {
    className: CssClasses('video-controls', className, 'button-wrapper')
  }, /*#__PURE__*/createElement(ToggleButton, {
    btnType: "tracklist",
    ariaControls: tracklistId,
    enabled: fileData.length > 0 && !singleTrack,
    onClick: function onClick() {
      setShowSubtitleMenu(false);
      setShowTrackListMenu(!showTrackListMenu);
    },
    toggleState: showTrackListMenu,
    config: config
  }, "Tracklist"), /*#__PURE__*/createElement("div", {
    className: CssClasses('video-controls', className, 'button-wrapper__space')
  }), /*#__PURE__*/createElement(ActionButton, {
    btnType: "previous-audio",
    enabled: fileData.length > 1 && canPlayPrev,
    onClick: function onClick() {
      if (canPlayPrev) {
        selectTrack(selectedFile - 1);
      }
    },
    config: config,
    ariaControls: id + "__player"
  }, "Previous track"), /*#__PURE__*/createElement(ActionButton, {
    btnType: "backward",
    onClick: moveBackwardAction,
    config: config,
    ariaControls: id + "__player"
  }, "Rewind"), /*#__PURE__*/createElement(ToggleButton, {
    btnType: "play",
    hidden: !(config !== null && config !== void 0 && config.keepPlayVisibleOnEnded) && ended,
    onClick: playPauseAction,
    toggleState: playing,
    config: config,
    ariaControls: id + "__player"
  }, playing ? 'Pause' : 'Play'), /*#__PURE__*/createElement(ActionButton, {
    btnType: "reset",
    enabled: ended,
    hidden: !ended,
    onClick: rewindAction,
    config: config,
    ariaControls: id + "__player"
  }, "Restart"), /*#__PURE__*/createElement(ActionButton, {
    btnType: "forward",
    onClick: moveForwardAction,
    config: config,
    ariaControls: id + "__player"
  }, "Fast forward"), /*#__PURE__*/createElement(ActionButton, {
    btnType: "next-audio",
    enabled: fileData.length > 1 && canPlayNext,
    onClick: nextTrackAction,
    config: config,
    ariaControls: id + "__player"
  }, "Next track"), /*#__PURE__*/createElement(ToggleButton, {
    btnType: "closed-captioning",
    ariaControls: subtitleMenuId,
    enabled: videoMetadataLoaded && hasVtt(currentFile),
    onClick: function onClick() {
      setShowTrackListMenu(false);
      setShowSubtitleMenu(!showSubtitleMenu);
    },
    toggleState: showSubtitleMenu,
    config: config
  }, "Closed captioning"), /*#__PURE__*/createElement("div", {
    className: CssClasses('video-controls', className, 'button-wrapper__space')
  }), /*#__PURE__*/createElement(ToggleButton, {
    btnType: "mute",
    onClick: toggleMuteAction,
    toggleState: muted,
    config: config,
    ariaControls: id + "__player"
  }, "Mute"))), /*#__PURE__*/createElement(SubtitleMenu, {
    visible: showSubtitleMenu,
    id: subtitleMenuId,
    tracks: subtitleTracks(),
    selected: selectedLanguage,
    onSelect: selectSubtitleLanguage
  }), /*#__PURE__*/createElement(TracklistMenu, {
    visible: !singleTrack && showTrackListMenu,
    id: tracklistId,
    tracklist: fileData,
    selected: selectedFile,
    onSelect: function onSelect(trackNumber) {
      setShowTrackListMenu(false);
      selectTrack(trackNumber);
    }
  }), /*#__PURE__*/createElement(SubtitleContainer, {
    visible: selectedLanguage !== null,
    lang: selectedLanguage,
    tracks: subtitleTracks(),
    id: captionsContainerId
  }));
};

var defaultConfigs = {
  FontAwesome5: FontAwesome5
};

export default AudioPlayer;
export { DEFAULT_PLAYER_STATE, PlayerRemoteProvider, defaultConfigs, usePlayerRemote, usePlayerRemoteById };
//# sourceMappingURL=react-ts-media-player.esm.js.map
