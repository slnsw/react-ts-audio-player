import React from 'react';
interface IProps {
    label: string;
    value: string | number | null;
    selected: boolean;
    onSelect: (e: React.KeyboardEvent | React.MouseEvent) => void;
}
declare const MenuItem: React.FunctionComponent<IProps>;
export default MenuItem;
