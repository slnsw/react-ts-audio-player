// @file
// Screenreader only wrapper.

import React from 'react';

import CollapseArrayProperty from './Util/CollapseArrayProperty';

import { IAudioPlayerConfig } from './Types';

interface IProps {
  children?: React.ReactNode;
  config?: IAudioPlayerConfig;
}

const SrOnly: React.FunctionComponent<IProps> = ({ config = {}, children }) => {
  const classNames = [].concat(
    CollapseArrayProperty(config?.classNames?.['sr-only']),
  );
  return <span className={classNames.join(' ')}>{children}</span>;
};

export default SrOnly;
