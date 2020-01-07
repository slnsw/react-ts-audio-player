// @file
// Oral Histories subtitle menu.

import React from 'react';

import Menu from './Menu';
import MenuItem from './MenuItem';

interface IProps {
  visible: boolean;
  id: string;
  subtitleTracks: TextTrack[];
  selected?: string;
  onSelect: (selectedLang: string) => void;
  className?: string;
}

const SubtitleMenu: React.FunctionComponent<IProps> = ({
  visible = false,
  id,
  subtitleTracks = [],
  selected,
  onSelect,
  className,
}: IProps) => {
  const onSelectLang = (e: React.MouseEvent | React.KeyboardEvent) => {
    const itemElem = e.target as HTMLElement;
    const indexAttr = itemElem.getAttribute('data-value') || null;
    if (indexAttr === null) {
      return;
    }
    const selectedLang = indexAttr;
    if (typeof onSelect === 'function') {
      onSelect(selectedLang);
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
