// @file
// Functional component for a toggle button.

import React from 'react';

import SrOnly from './SrOnly';
import CssClasses from './Util/CssClasses';

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
  const defaultClassName = (config.classNames[btnType] || []).join(' ');
  return (
    <button
      className={CssClasses(defaultClassName, className || '')}
      disabled={!enabled}
      hidden={hidden}
      onClick={onClick}
    >
      <SrOnly config={config}>{children}</SrOnly>
      <span
        className={CssClasses(defaultClassName, '', 'icon', ['false'])}
        hidden={toggleState}
      />
      <span
        className={CssClasses(defaultClassName, '', 'icon', ['false'])}
        hidden={!toggleState}
      />
    </button>
  );
};

export default ToggleButton;
