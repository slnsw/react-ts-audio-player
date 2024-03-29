import Emitter from 'eventemitter3';
import React from 'react';
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
        useHoursInTimestamps: boolean;
    };
};
