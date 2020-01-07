import React from 'react';

interface IProps {
  label: string;
  value: string | number | null;
  selected: boolean;
  onSelect: (e: React.KeyboardEvent | React.MouseEvent) => void;
}

const MenuItem: React.FunctionComponent<IProps> = ({
  label,
  value,
  selected = false,
  onSelect,
}: IProps) => {
  return (
    <li>
      <button
        data-value={value}
        data-state={selected ? 'active' : 'inactive'}
        onClick={onSelect}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            onSelect(e);
          }
        }}
      >
        {label}
      </button>
    </li>
  );
};

export default MenuItem;
