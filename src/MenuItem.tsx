import React from 'react';

interface IProps {
  label: string;
  value: string | number | null;
  selected: boolean;
  onSelect: (e: Event) => void;
}

const MenuItem: React.FunctionalComponent<IProps> = ({
  label,
  value,
  selected = false,
  onSelect,
}) => {
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

export default MenuItem;
