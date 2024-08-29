import React from "react";

/* eslint-disable react/jsx-props-no-spreading */

const PlayerRemoteContext = React.createContext([]);

type RemoteState = {
  lastUpdate: string;
  type: string;
  timestamp: number;
};

type MultiPlayerRemoteState = {
  [id: string]: RemoteState;
};

type RemoteStateAction = {
  id: string;
  type: string;
  timestamp?: number;
};

const defaultMultiPlayerState: MultiPlayerRemoteState = {};

export const DEFAULT_PLAYER_STATE: RemoteState = {
  lastUpdate: (new Date()).toISOString(),
  type: '',
  timestamp: 0,
};

function mediaReducer(state: MultiPlayerRemoteState, action: RemoteStateAction): MultiPlayerRemoteState {
  const {
    id,
    type,
    timestamp = 0,
  } = action;

  let currentState = state?.[id] || { ...DEFAULT_PLAYER_STATE };

  switch (type) {
    case "play_pause": {
      currentState = { ...currentState, type, lastUpdate: (new Date()).toISOString() };
      break;
    }
    case "play": {
      currentState = { ...currentState, type, lastUpdate: (new Date()).toISOString() };
      break;
    }
    case "pause": {
      currentState = { ...currentState, type, lastUpdate: (new Date()).toISOString() };
      break;
    }
    case "reset": {
      currentState = { ...currentState, type, lastUpdate: (new Date()).toISOString() };
      break;
    }
    case "backward": {
      currentState = { ...currentState, type, lastUpdate: (new Date()).toISOString() };
      break;
    }
    case "forward": {
      currentState = { ...currentState, type, lastUpdate: (new Date()).toISOString() };
      break;
    }
    case "timestamp_update": {
      currentState = { ...currentState, type, lastUpdate: (new Date()).toISOString(), timestamp };
      break;
    }
    case "": {
      break;
    }
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }

  return { ...state, [id]: currentState };
}

export const usePlayerRemote = () => {
  const context = React.useContext(PlayerRemoteContext);

  if (!context) {
    // throw new Error(`usePlayerRemote must be used within PlayerRemoteProvider`);
    console.log(`PlayerRemoteProvider not found, remote player functionality disabled.`);
    return { state: null, dispatch: () => { } };
  }

  const [state, dispatch] = context;
  return { state, dispatch };
};

export const usePlayerRemoteById = (id: string) => {
  const { state, dispatch } = usePlayerRemote();
  return {
    state: state?.[id] || DEFAULT_PLAYER_STATE,
    dispatch: (params = {}) => dispatch({ id, ...params }),
  };
};

export const PlayerRemoteProvider = (props: any) => {
  const [state, dispatch] = React.useReducer(mediaReducer, defaultMultiPlayerState);
  const value = React.useMemo(() => [state, dispatch], [state]);
  return <PlayerRemoteContext.Provider value={value} {...props} />;
};
