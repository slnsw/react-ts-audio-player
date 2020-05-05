// @file
// Functional component for an action button.

import React from 'react';

import SrOnly from './SrOnly';

import { IAudioPlayerConfig } from './Types';

interface IProps {
  btnType: string;
  enabled?: boolean;
  hidden?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  className?: string;
  config?: IAudioPlayerConfig;
}

const ActionButton: React.FunctionComponent<IProps> = ({
  enabled = true,
  hidden = false,
  btnType,
  onClick,
  children,
  className,
  config = {},
}) => {
  const classNames = [className || ''].concat(config.classNames[btnType] || []);
  const iconClassNames = [].concat(config.icons[btnType] || []);
  const iconElem = config.icons[btnType] || null;
  return (
    <button
      className={classNames.join(' ')}
      disabled={!enabled}
      hidden={hidden}
      onClick={onClick}
    >
      <SrOnly config={config}>{children}</SrOnly>
      {!iconElem && <span className={iconClassNames.join(' ')}></span>}
      {iconElem}
    </button>
  );
};

export default ActionButton;
