// @file
// Menu container.

import React, { Children } from 'react';

const Menu = ({
  id,
  visible = false,
  className,
  children,
}) => {
  return (
    <ol
      className={['video-wrapper__popup-menu', className || ''].join(
        ' ',
      )}
      id={id}
      hidden={!visible}
      aria-expanded={visible}
    >
      {children}
    </ol>
  );
};

export default Menu;
