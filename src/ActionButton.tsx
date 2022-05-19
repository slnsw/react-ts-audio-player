// @file
// Functional component for an action button.

import React from 'react';

import SrOnly from './SrOnly';
import CollapseArrayProperty from './Util/CollapseArrayProperty';
import CssClasses from './Util/CssClasses';

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
  const defaultClassName = CollapseArrayProperty(config?.classNames?.[btnType]);
  const iconClassNames = CollapseArrayProperty(config?.icons?.[btnType]);
  const iconElem = config?.iconElements?.[btnType] || null;
  return (
    <button
      className={CssClasses(defaultClassName, className || '')}
      disabled={!enabled}
      hidden={hidden}
      onClick={onClick}
    >
      <SrOnly config={config}>{children}</SrOnly>
      {!iconElem && <span className={CssClasses(iconClassNames, '')}></span>}
      {iconElem}
    </button>
  );
};

export default ActionButton;
