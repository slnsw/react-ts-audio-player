// @file
// Functional component for a toggle button.

import React from 'react';

import SrOnly from './SrOnly';
import CollapseArrayProperty from './Util/CollapseArrayProperty';
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
  const defaultClassName = CollapseArrayProperty(config.classNames[btnType]);
  const iconClassNamesFalse = CollapseArrayProperty(config.icons[`${btnType}__false`]);
  const iconClassNamesTrue = CollapseArrayProperty(config.icons[`${btnType}__true`]);
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
      {!toggleState && !iconElemFalse && (
        <span className={CssClasses(iconClassNamesFalse)} />
      )}
      {!toggleState && iconElemFalse}
      {toggleState && !iconElemTrue && (
        <span className={CssClasses(iconClassNamesTrue)} />
      )}
      {toggleState && iconElemTrue}
    </button>
  );
};

export default ToggleButton;
