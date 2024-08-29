import React from 'react';
import { IAudioPlayerConfig } from './Types';
interface IProps {
    btnType: string;
    enabled?: boolean;
    hidden?: boolean;
    onClick?: (e: React.MouseEvent) => void;
    children?: React.ReactNode;
    className?: string;
    config?: IAudioPlayerConfig;
    ariaControls?: string;
}
declare const ActionButton: React.FunctionComponent<IProps>;
export default ActionButton;
