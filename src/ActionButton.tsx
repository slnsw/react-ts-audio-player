// @file
// Functional component for an action button.

import React from 'react';

import { excludeProps } from './Utilities';

const ActionButton = ({
  enabled = true,
  hidden = false,
  icon,
  btnType,
  onClick,
  children,
  className,
  ...restProps
}) => {
  return (
    <button
      className={[className || '', `btn`, `btn-${props.btnType}`].join(' ')}
      disabled={!enabled}
      hidden={hidden}
      onClick={onClick}
      {...restProps}
    >
      <span className="sr-only">{children}</span>
      <span className={[`fa`, `fa-${icon}`].join(' ')}></span>
    </button>
  );
};

export default ActionButton;
