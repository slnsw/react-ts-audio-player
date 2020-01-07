// @file
// Menu container.

import React from 'react';

interface IProps {
  id?: string;
  visible?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Menu: React.FunctionComponent<IProps> = ({
  id,
  visible = false,
  className,
  children,
}: IProps) => {
  return (
    <ol
      className={['video-wrapper__popup-menu', className || ''].join(' ')}
      id={id}
      hidden={!visible}
      aria-expanded={visible}
    >
      {children}
    </ol>
  );
};

export default Menu;
