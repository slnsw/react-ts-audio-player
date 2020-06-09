import React from 'react';
const Menu = ({ id, visible = false, className, children, }) => {
    return (React.createElement("ol", { className: ['video-wrapper__popup-menu', className || ''].join(' '), id: id, hidden: !visible, "aria-expanded": visible }, children));
};
export default Menu;
//# sourceMappingURL=Menu.js.map