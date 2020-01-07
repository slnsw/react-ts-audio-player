// @file
// Functional component for a toggle button.

import React from 'react';

interface IProps {
  enabled?: boolean;
  hidden?: boolean;
  btnType: string;
  iconFalse?: string;
  iconTrue?: string;
  toggleState?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

const ToggleButton: React.FunctionComponent<IProps> = ({
  enabled = true,
  hidden = false,
  btnType,
  iconFalse,
  iconTrue,
  toggleState = false,
  children,
  onClick,
  className,
}: IProps) => (
  <button
    className={[className || '', `btn`, `btn-${btnType}`].join(' ')}
    disabled={!enabled}
    hidden={hidden}
    onClick={onClick}
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
