// @file
// Functional component for a toggle button.

import React from 'react';

import SrOnly from './SrOnly';

import { IAudioPlayerConfig } from './Types';

interface IProps {
  enabled?: boolean;
  hidden?: boolean;
  btnType: string;
  toggleState?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  config?: IAudioPlayerConfig;
}

const ToggleButton: React.FunctionComponent<IProps> = ({
  enabled = true,
  hidden = false,
  btnType,
  toggleState = false,
  children,
  onClick,
  className,
  config = {},
}: IProps) => {
  const classNames = [className || '']
    .concat(config.classNames[btnType] || []);
  const iconFalseClassNames = []
    .concat(config.icons[btnType] || [])
    .concat(config.icons[`${btnType}__false`] || []);
  const iconTrueClassNames = []
    .concat(config.icons[btnType] || [])
    .concat(config.icons[`${btnType}__true`] || []);
  return (
    <button
      className={classNames.join(' ')}
      disabled={!enabled}
      hidden={hidden}
      onClick={onClick}
    >
      <SrOnly config={config}>{children}</SrOnly>
      <span
        className={iconFalseClassNames.join(' ')}
        hidden={toggleState}
      />
      <span
        className={iconTrueClassNames.join(' ')}
        hidden={!toggleState}
      />
    </button>
  );
};

export default ToggleButton;
