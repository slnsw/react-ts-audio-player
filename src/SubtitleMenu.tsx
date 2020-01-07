// @file
// Oral Histories subtitle menu.

import React from 'react';

import Menu from './Menu.tsx';
import MenuItem from './MenuItem.tsx';

interface IProps {
  visible: boolean;
  id: string;
  subtitleTracks: TextTrack[];
  selected?: string;
  onSelect: (track: number) => void;
  className?: string;
}

const SubtitleMenu: React.FunctionalComponent<IProps> = ({
  visible = false,
  id,
  subtitleTracks = [],
  selected,
  onSelect,
  className,
}) => {
  const onSelectLang = (e) => {
    const selectedTrack = parseInt(e.target.getAttribute('data-value'), 10);
    if (typeof onSelect === 'function') {
      onSelect(selectedTrack);
    }
  };

  const languageOptions = [
    <MenuItem
      key={'_none_'}
      label={'Off'}
      value={null}
      selected={!selected}
      onSelect={onSelectLang}
    />,
  ];
  let track;
  let i;
  for (i = 0; i < subtitleTracks.length; i += 1) {
    track = subtitleTracks[i];
    languageOptions.push(
      <MenuItem
        key={`${track.language}-${i}`}
        label={track.label}
        value={track.language}
        selected={selected && track.language === selected}
        onSelect={onSelectLang}
      />,
    );
  }

  return (
    <Menu
      className={[className || '', 'subtitles-menu'].join(' ')}
      id={id}
      visible={visible}
    >
      {languageOptions}
    </Menu>
  );
};

export default SubtitleMenu;
