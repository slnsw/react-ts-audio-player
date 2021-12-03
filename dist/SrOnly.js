import React from 'react';
const SrOnly = ({ config = {}, children }) => {
    const classNames = [].concat(config.classNames['sr-only'] || []);
    return React.createElement("span", { className: classNames.join(' ') }, children);
};
export default SrOnly;
//# sourceMappingURL=SrOnly.js.map