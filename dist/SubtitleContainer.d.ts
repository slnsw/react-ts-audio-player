import React from 'react';
interface IProps {
    visible?: boolean;
    lang?: string;
    tracks: TextTrack[];
    id: string;
    className?: string;
}
declare const SubtitleContainer: React.FunctionComponent<IProps>;
export default SubtitleContainer;
