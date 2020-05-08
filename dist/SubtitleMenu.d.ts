import React from 'react';
interface IProps {
    visible: boolean;
    id: string;
    tracks: TextTrackList;
    selected?: string;
    onSelect: (selectedLang: string) => void;
    className?: string;
}
declare const SubtitleMenu: React.FunctionComponent<IProps>;
export default SubtitleMenu;
