import React from 'react';
import SrOnly from './SrOnly';
import CssClasses from './Util/CssClasses';
const ToggleButton = ({ enabled = true, hidden = false, btnType, toggleState = false, children, onClick, className, config = {}, }) => {
    const defaultClassName = (config.classNames[btnType] || []).join(' ');
    const iconClassNamesFalse = (config.icons[`${btnType}__false`] || []).join(' ');
    const iconClassNamesTrue = (config.icons[`${btnType}__true`] || []).join(' ');
    const iconElemFalse = config.iconElements[`${btnType}__false`] || null;
    const iconElemTrue = config.iconElements[`${btnType}__true`] || null;
    return (React.createElement("button", { className: CssClasses(defaultClassName, className || ''), disabled: !enabled, hidden: hidden, onClick: onClick },
        React.createElement(SrOnly, { config: config }, children),
        !iconElemFalse && (React.createElement("span", { className: CssClasses(iconClassNamesFalse), hidden: toggleState })),
        iconElemFalse,
        !iconElemTrue && (React.createElement("span", { className: CssClasses(iconClassNamesTrue), hidden: !toggleState })),
        iconElemTrue));
};
export default ToggleButton;
//# sourceMappingURL=ToggleButton.js.map