// @file
// Functional component for an action button.

import React from 'react';

interface IProps {
  btnType: string;
  enabled?: boolean;
  hidden?: boolean;
  icon?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  className?: string;
}

const ActionButton: React.FunctionComponent<IProps> = ({
  enabled = true,
  hidden = false,
  icon,
  btnType,
  onClick,
  children,
  className,
}) => {
  return (
    <button
      className={[className || '', `btn`, `btn-${btnType}`].join(' ')}
      disabled={!enabled}
      hidden={hidden}
      onClick={onClick}
    >
      <span className="sr-only">{children}</span>
      <span className={[`fa`, `fa-${icon || btnType}`].join(' ')}></span>
    </button>
  );
};

export default ActionButton;
