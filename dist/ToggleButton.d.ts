import React from 'react';
import { IAudioPlayerConfig } from './Types';
interface IProps {
    enabled?: boolean;
    hidden?: boolean;
    btnType: string;
    toggleState?: boolean;
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    className?: string;
    config?: IAudioPlayerConfig;
}
declare const ToggleButton: React.FunctionComponent<IProps>;
export default ToggleButton;
