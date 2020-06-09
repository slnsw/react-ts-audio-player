import React from 'react';
interface IProps {
    defaultValue: number;
    className?: string;
    onClick?: (pos: number) => void;
    useTooltip?: boolean;
    valueToTooltipString?: (pos: number) => string;
}
declare const ScrubBar: React.FunctionComponent<IProps>;
export default ScrubBar;
