import React from 'react';
import Menu from './Menu';
import MenuItem from './MenuItem';
const TracklistMenu = ({ tracklist = [], selected = 0, visible = false, onSelect, id, className, }) => {
    const onSelectTrack = (e) => {
        const itemElem = e.target;
        const indexAttr = itemElem.getAttribute('data-value') || null;
        if (indexAttr === null) {
            return;
        }
        const index = parseInt(indexAttr, 10);
        if (typeof onSelect === 'function') {
            onSelect(index);
        }
    };
    const trackOptions = tracklist.map((track, index) => {
        return (React.createElement(MenuItem, { key: index, label: track.label, value: index, selected: index === selected, onSelect: onSelectTrack }));
    });
    return (React.createElement(Menu, { className: [className || '', 'track-menu'].join(' '), id: id, visible: visible }, trackOptions));
};
export default TracklistMenu;
//# sourceMappingURL=TracklistMenu.js.map