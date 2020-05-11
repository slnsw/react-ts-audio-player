import Emitter from 'eventemitter3';
import React from 'react';
import { IAudioPlayerConfig } from './Types';
interface IPlaylistItem {
    index: number;
    label: string;
    audioUrl: string;
    transcriptUrl: string | null;
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
}
declare const AudioPlayer: React.FunctionComponent<IProps>;
export default AudioPlayer;
export declare const defaultConfigs: {
    FontAwesome5: {
        classNames: {
            'sr-only': string[];
            tracklist: string[];
            'previous-audio': string[];
            backward: string[];
            play: string[];
            reset: string[];
            forward: string[];
            'next-audio': string[];
            'closed-captioning': string[];
            mute: string[];
        };
        icons: {
            tracklist__false: string[];
            tracklist__true: string[];
            'previous-audio': string[];
            backward: string[];
            play__false: string[];
            play__true: string[];
            reset: string[];
            forward: string[];
            'next-audio': string[];
            'closed-captioning__false': string[];
            'closed-captioning__true': string[];
            mute__false: string[];
            mute__true: string[];
        };
        iconElements: {
            tracklist__false: any;
            tracklist__true: any;
            'previous-audio': any;
            backward: any;
            play__false: any;
            play__true: any;
            reset: any;
            forward: any;
            'next-audio': any;
            'closed-captioning__false': any;
            'closed-captioning__true': any;
            mute__false: any;
            mute__true: any;
        };
    };
};
