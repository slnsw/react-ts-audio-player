import React from 'react';
interface IProps {
    defaultValue: number;
    className?: string;
    onClick?: (pos: number) => void;
}
declare const ScrubBar: React.FunctionComponent<IProps>;
export default ScrubBar;
