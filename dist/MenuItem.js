import React from 'react';
const MenuItem = ({ label, value, selected = false, onSelect, }) => {
    return (React.createElement("li", null,
        React.createElement("button", { "data-value": value, "data-state": selected ? 'active' : 'inactive', onClick: onSelect, onKeyUp: (e) => {
                if (e.key === 'Enter') {
                    onSelect(e);
                }
            } }, label)));
};
export default MenuItem;
//# sourceMappingURL=MenuItem.js.map