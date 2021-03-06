import React from 'react';
interface IProps {
    defaultValue: number;
    className?: string;
    id?: string;
    label?: string;
    onClick?: (pos: number) => void;
    useTooltip?: boolean;
    useRange?: boolean;
    useProgress?: boolean;
    valueToTooltipString?: (pos: number) => string;
}
declare const ScrubBar: React.FunctionComponent<IProps>;
export default ScrubBar;
