import React from 'react';
import Menu from './Menu';
import MenuItem from './MenuItem';
const SubtitleMenu = ({ visible = false, id, tracks, selected, onSelect, className, }) => {
    const onSelectLang = (e) => {
        const itemElem = e.target;
        const selectedLang = itemElem.getAttribute('data-value') || null;
        if (typeof onSelect === 'function') {
            onSelect(selectedLang);
        }
    };
    const languageOptions = [
        React.createElement(MenuItem, { key: '_none_', label: 'Off', value: null, selected: !selected, onSelect: onSelectLang }),
    ];
    let track;
    let i;
    if (tracks && tracks.length) {
        for (i = 0; i < tracks.length; i += 1) {
            track = tracks[i];
            languageOptions.push(React.createElement(MenuItem, { key: `${track.language}-${i}`, label: track.label, value: track.language, selected: selected && track.language === selected, onSelect: onSelectLang }));
        }
    }
    return (React.createElement(Menu, { className: [className || '', 'subtitles-menu'].join(' '), id: id, visible: visible }, languageOptions));
};
export default SubtitleMenu;
//# sourceMappingURL=SubtitleMenu.js.map