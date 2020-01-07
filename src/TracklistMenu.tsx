// @file
// Oral Histories subtitle menu.

import React from 'react';

import Menu from './Menu';
import MenuItem from './MenuItem';

const TracklistMenu = ({
  tracklist = [],
  selected = 0,
  onSelect,
  id,
  visible,
  className,
}) => {
  const onSelectTrack = (e) => {
    const track = parseInt(e.target.getAttribute('data-value'), 10);
    if (typeof onSelect === 'function') {
      onSelect(track);
    }
  };

  const trackOptions = tracklist.map((track, index) => {
    track = tracklist[index];
    trackOptions.push(
      <MenuItem
        key={i}
        label={track.label}
        value={track.index}
        selected={track.index === selected}
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
