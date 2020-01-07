// @file
// Oral Histories subtitle menu.

import React from 'react';

import Menu from './Menu';
import MenuItem from './MenuItem';

type Props = {
  visible: boolean;
  id: string;
  subtitleTracks: any[];
  selected?: string;
  onSelect: Function;
};

const SubtitleMenu: React.FunctionalComponent<Props> = ({
  visible,
  id,
  subtitleTracks,
  selected,
  onSelect,
}) => {
  const onSelectLang = (e) => {
    const track = parseInt(e.target.getAttribute('data-value'), 10);
    if (typeof onSelect === 'function') {
      onSelect(track);
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
  for (i = 0; i < subtitleTracks.length; i++) {
    track = subtitleTracks[i];
    languageOptions.push(
      <MenuItem
        key={`${track.language}-${i}`}
        label={track.label}
        value={track.language}
        selected={track.language === selected}
        onSelect={onSelectLang}
      />
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
