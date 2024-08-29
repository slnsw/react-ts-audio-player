import React from "react";
declare type RemoteState = {
    lastUpdate: string;
    type: string;
    timestamp: number;
};
export declare const DEFAULT_PLAYER_STATE: RemoteState;
export declare const usePlayerRemote: () => {
    state: any;
    dispatch: any;
};
export declare const usePlayerRemoteById: (id: string) => {
    state: any;
};
export declare const PlayerRemoteProvider: (props: any) => React.JSX.Element;
export {};
