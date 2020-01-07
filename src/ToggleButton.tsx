// @file
// Functional component for a toggle button.

import React from 'react';

type Props = {
  enabled?: boolean;
  hidden?: boolean;
  btnType: string;
  iconFalse?: string;
  iconTrue?: string;
  toggleState?: boolean;
  children?: React.ReactNode;
  onClick?: Function;
  className?: string;
};

const ToggleButton: React.FunctionalComponent<Props> = ({
  enabled = true,
  hidden = false,
  btnType,
  iconFalse,
  iconTrue,
  toggleState = false,
  children,
  onClick,
  className,
  ...restProps
}) => (
  <button
    className={[className || '', `btn`, `btn-${props.btnType}`].join(' ')}
    disabled={!enabled}
    hidden={hidden}
    onClick={onClick}
    {...restProps}
  >
    <span className="sr-only">{children}</span>
    <span
      className={[`fa fa-${iconFalse || btnType}`].join(' ')}
      hidden={toggleState}
    />
    <span
      className={[`fa fa-${iconTrue || btnType}`].join(' ')}
      hidden={!toggleState}
    />
  </button>
);

export default ToggleButton;
