import React from 'react';
import debounce from 'debounce';
import CssClasses from './Util/CssClasses';
import { clampNumber } from './Util/Numbers';
const getOffsetXNative = (e, container) => {
    let offsetX = 0;
    const rect = container.getBoundingClientRect();
    if (e.type === 'mousemove') {
        offsetX = e.pageX - rect.left;
    }
    if (e.type === 'touchmove') {
        offsetX = e.targetTouches[0].pageX - rect.left;
    }
    return offsetX;
};
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
const ON_CLICK_DEBOUNCE = 250;
const ScrubBarTooltip = ({ title, className, style = {}, }) => {
    return (React.createElement("div", { style: style, className: className || '' }, title));
};
const ScrubBarTooltipOuter = ({ wrapperClassName, tooltipClassName, valueToTooltipString = () => '', defaultValue = 0, show = false, }) => {
    const outer = React.useRef(null);
    const [value, setValue] = React.useState(defaultValue);
    const outerWidth = outer.current ? outer.current.clientWidth : 0;
    const content = valueToTooltipString(value) || '';
    return (React.createElement("div", { ref: outer, onMouseMove: (e) => {
            setValue(getOffsetX(e) / outerWidth);
        }, className: wrapperClassName }, show && content.length > 0 && (React.createElement(ScrubBarTooltip, { title: valueToTooltipString(value), className: tooltipClassName, style: {
            left: `${outerWidth * value}px`,
        } }))));
};
const ScrubBar = ({ defaultValue = 0, useTooltip = false, useRange = false, useProgress = false, valueToTooltipString = () => '', id, className, label, onClick, }) => {
    const outer = React.useRef(null);
    const scrubbing = React.useRef(false);
    const [hover, setHover] = React.useState(false);
    const [value, setValue] = React.useState(clampNumber(defaultValue, 0, 1));
    const [offsetX, setOffsetX] = React.useState(0);
    const [lastUpdate, setLastUpdate] = React.useState(0);
    const derivedId = id || 'scrub-bar';
    const debouncedOnClick = typeof onClick === 'function'
        ? debounce(onClick, ON_CLICK_DEBOUNCE)
        : () => { };
    const onDown = (e) => {
        scrubbing.current = true;
        setOffsetX(getOffsetX(e));
    };
    const onUp = () => {
        if (scrubbing.current) {
            scrubbing.current = false;
            setLastUpdate(new Date().getTime());
        }
    };
    const onMouseMove = (e) => {
        if (scrubbing.current) {
            setOffsetX(getOffsetXNative(e, outer.current));
        }
    };
    const onTouchMove = (e) => {
        if (scrubbing.current) {
            setOffsetX(getOffsetXNative(e, outer.current));
        }
    };
    React.useEffect(() => {
        document.addEventListener('mousemove', onMouseMove, false);
        document.addEventListener('touchmove', onTouchMove, false);
        document.addEventListener('mouseup', onUp, false);
        document.addEventListener('touchend', onUp, false);
        return () => {
            document.removeEventListener('mousemove', onMouseMove, false);
            document.removeEventListener('touchmove', onTouchMove, false);
            document.removeEventListener('mouseup', onUp, false);
            document.removeEventListener('touchend', onUp, false);
        };
    }, []);
    React.useEffect(() => {
        setValue(clampNumber(defaultValue, 0, 100));
    }, [defaultValue]);
    React.useEffect(() => {
        if (scrubbing.current) {
            const pos = clampNumber(offsetX / outer.current.clientWidth, 0, 1);
            setValue(pos * 100);
            debouncedOnClick(pos);
        }
    }, [lastUpdate, offsetX]);
    return (React.createElement("div", { className: CssClasses(className || '', '', '', [
            scrubbing.current ? 'scrubbing' : '',
        ]), onMouseOver: () => setHover(true), onMouseLeave: () => setHover(false), onMouseDown: useRange ? () => { } : onDown, onTouchStart: useRange ? () => { } : onDown, ref: outer },
        useTooltip && (React.createElement(ScrubBarTooltipOuter, { wrapperClassName: `${className}__wraptooltip`, tooltipClassName: `${className}__tooltip`, show: hover || scrubbing.current, valueToTooltipString: valueToTooltipString, defaultValue: value })),
        (useProgress || useRange) && (React.createElement("label", { htmlFor: useRange ? `${derivedId}__scrubrange` : `${derivedId}__progress` },
            React.createElement("span", { className: "sr-only" },
                label || '',
                `${value} percent`),
            useProgress && (React.createElement("progress", { max: "100", value: value, className: `${className}__progress`, id: `${derivedId}__progress` })),
            useRange && (React.createElement("input", { className: `${className}__scrubrange`, id: `${derivedId}__scrubrange`, type: "range", min: "0", max: "100", value: value, onMouseDown: onDown, onTouchStart: onDown, onChange: (e) => {
                    setOffsetX((parseFloat(e.currentTarget.value) / 100.0) *
                        outer.current.clientWidth);
                } })))),
        !useRange && (React.createElement("div", { className: [`${className}__fill`].join(' '), style: { width: `${value}%` } },
            React.createElement("span", { className: "sr-only" },
                label || '',
                `${value} percent`)))));
};
export default ScrubBar;
//# sourceMappingURL=ScrubBar.js.map