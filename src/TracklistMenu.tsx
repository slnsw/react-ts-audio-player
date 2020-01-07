// @file
// Oral Histories subtitle menu.

import React from 'react';

const TracklistMenu = ({ tracklist = [], selected = 0, onSelect, id, visible, className }) => {

  const onSelectTrack = (e) => {
    let track = parseInt(e.target.getAttribute('data-track-index'), 10);
    if (typeof onSelect === 'function') {
      onSelect(track);
    }
  }

  const trackOptions = tracklist.map((track, index) => {
    track = tracklist[index];
    trackOptions.push(
      <li key={i}>
        <button
          data-track-index={track.index}
          data-state={track.index === selected ? 'active' : 'inactive'}
          onClick={onSelectTrack}
        >
          {track.label}
        </button>
      </li>
    );
  });

  return (
    <ol
      className={[className || '', "video-wrapper__popup-menu track-menu"].join(' ')}
      id={id}
      hidden={!visible}
      aria-expanded={visible}
    >
      {trackOptions}
    </ol>
  );
};

export default TracklistMenu;
