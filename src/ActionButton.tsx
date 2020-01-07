// @file
// Functional component for an action button.

import React from 'react';

interface IProps {
  enabled?: boolean;
  hidden?: boolean;
  icon: string;
  btnType: string;
  onClick?: (e: Event) => void;
  children?: React.ChildNode;
  className?: string;
}

const ActionButton: React.FunctionalComponent<IProps> = ({
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
      <span className={[`fa`, `fa-${icon}`].join(' ')}></span>
    </button>
  );
};

export default ActionButton;
