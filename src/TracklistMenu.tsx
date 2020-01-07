// @file
// Oral Histories subtitle menu.

import React from 'react';

import Menu from './Menu.tsx';
import MenuItem from './MenuItem.tsx';

interface IProps {
  tracklist?: AudioTrack[];
  selected?: number;
  onSelect?: (track: AudioTrack) => void;
  id?: string;
  visible?: boolean;
  className?: string;
}

const TracklistMenu: React.FunctionalComponent<IProps> = ({
  tracklist = [],
  selected = 0,
  visible = false,
  onSelect,
  id,
  className,
}) => {
  const onSelectTrack = (e: Event) => {
    const itemElem = e.target as HTMLElement;
    const indexAttr = itemElem.getAttribute('data-value') || null;
    if (indexAttr === null) {
      return;
    }
    const index = parseInt(indexAttr, 10);
    if (typeof onSelect === 'function') {
      onSelect(tracklist[index]);
    }
  };

  const trackOptions = tracklist.map((track: AudioTrack, index: number) => {
    return (
      <MenuItem
        key={index}
        label={track.label}
        value={index}
        selected={index === selected}
        onSelect={onSelectTrack}
      />
    );
  });

  return (
    <Menu
      className={[className || '', 'track-menu'].join(' ')}
      id={id}
      visible={visible}
    >
      {trackOptions}
    </Menu>
  );
};

export default TracklistMenu;
