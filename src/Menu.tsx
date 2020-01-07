// @file
// Menu container.

import React from 'react';

import MenuItem from './MenuItem.tsx';

interface IProps {
  id?: string;
  visible?: boolean;
  className?: string;
  children?: MenuItem[];
}

const Menu: React.FunctionalComponent<IProps> = ({
  id,
  visible = false,
  className,
  children = [],
}) => {
  if (!children.length) {
    return [];
  }

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
