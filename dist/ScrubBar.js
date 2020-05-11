import React from 'react';
const getOffsetX = (e) => {
    if (typeof e.nativeEvent.offsetX === 'number') {
        return e.nativeEvent.offsetX;
    }
    if (typeof e.targetTouches === 'object') {
        const touchE = e;
        const rect = touchE.target.getBoundingClientRect();
        return touchE.targetTouches[0].pageX - rect.left;
    }
    return 0;
};
const ScrubBar = ({ defaultValue = 0, className, onClick, }) => {
    const outer = React.useRef(null);
    const [value, setValue] = React.useState(defaultValue);
    const [offsetX, setOffsetX] = React.useState(0);
    const [scrubbing, setScrubbing] = React.useState(false);
    React.useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);
    React.useEffect(() => {
        if (scrubbing) {
            const pos = offsetX / outer.current.clientWidth;
            setValue(pos * 100);
            if (typeof onClick === 'function') {
                onClick(pos);
            }
        }
    }, [scrubbing, offsetX]);
    const onDown = (e) => {
        setScrubbing(true);
        setOffsetX(getOffsetX(e));
    };
    const onUp = () => setScrubbing(false);
    return (React.createElement("div", { className: [className || ''].join(' '), onMouseDown: onDown, onMouseUp: onUp, onMouseMove: (e) => {
            if (scrubbing) {
                setOffsetX(getOffsetX(e));
            }
        }, onTouchStart: onDown, onTouchEnd: onUp, onTouchMove: (e) => {
            if (scrubbing) {
                setOffsetX(getOffsetX(e));
            }
        }, ref: outer },
        React.createElement("div", { className: [`${className}__fill`].join(' '), style: { width: `${value}%` } },
            React.createElement("span", { className: "sr-only" }, `${value} percent`))));
};
export default ScrubBar;
//# sourceMappingURL=ScrubBar.js.map