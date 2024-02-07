import React from 'react';
interface IProps {
    tracklist?: any[];
    selected?: number;
    onSelect?: (track: number) => void;
    id?: string;
    visible?: boolean;
    className?: string;
}
declare const TracklistMenu: React.FunctionComponent<IProps>;
export default TracklistMenu;
