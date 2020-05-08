import React from 'react';
import SrOnly from './SrOnly';
import CssClasses from './Util/CssClasses';
const ActionButton = ({ enabled = true, hidden = false, btnType, onClick, children, className, config = {}, }) => {
    const defaultClassName = (config.classNames[btnType] || []).join(' ');
    const iconClassNames = (config.icons[btnType] || []).join(' ');
    const iconElem = config.iconElements[btnType] || null;
    return (React.createElement("button", { className: CssClasses(defaultClassName, className || ''), disabled: !enabled, hidden: hidden, onClick: onClick },
        React.createElement(SrOnly, { config: config }, children),
        !iconElem && React.createElement("span", { className: CssClasses(iconClassNames, '') }),
        iconElem));
};
export default ActionButton;
//# sourceMappingURL=ActionButton.js.map