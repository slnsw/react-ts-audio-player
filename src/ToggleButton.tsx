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
  const iconClassNamesFalse = (config.icons[`${btnType}__false`] || []).join(' ');
  const iconClassNamesTrue = (config.icons[`${btnType}__true`] || []).join(' ');
  const iconElemFalse = config.iconElements[`${btnType}__false`] || null;
  const iconElemTrue = config.iconElements[`${btnType}__true`] || null;
  return (
    <button
      className={CssClasses(defaultClassName, className || '')}
      disabled={!enabled}
      hidden={hidden}
      onClick={onClick}
    >
      <SrOnly config={config}>{children}</SrOnly>
      {!iconElemFalse && (<span
        className={CssClasses(iconClassNamesFalse)}
        hidden={toggleState}
      />)}
      {iconElemFalse}
      {!iconElemTrue && (<span
        className={CssClasses(iconClassNamesTrue)}
        hidden={!toggleState}
      />)}
      {iconElemTrue}
    </button>
  );
};

export default ToggleButton;
