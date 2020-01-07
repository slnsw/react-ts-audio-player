import React from 'react';

export default ({ label, value, selected = false, onSelect }) => {
  return (
    <li>
      <button
        data-value={value}
        data-state={selected ? 'active' : 'inactive'}
        onClick={onSelect}
      >
        {label}
      </button>
    </li>
  );
};
