// @file
// Functional component for an action button.

import React from 'react';
import debounce from 'debounce';

// import CssClasses from './Util/CssClasses';
import { clampNumber } from './Util/Numbers';

/**
 * Note: defaultValue is between 0 and 100.
 */
interface IProps {
  defaultValue: number;
  className?: string;
  onClick?: (pos: number) => void;
  useTooltip?: boolean;
  valueToTooltipString?: (pos: number) => string;
}

const getOffsetXNative = (e: MouseEvent | TouchEvent, container: HTMLDivElement) => {
  let offsetX = 0;
  const rect = container.getBoundingClientRect();
  if (e.type === 'mousemove') {
    offsetX = (e as MouseEvent).pageX - rect.left;
  }
  if (e.type === 'touchmove') {
    offsetX = (e as TouchEvent).targetTouches[0].pageX - rect.left;
  }
  return offsetX;
};

const getOffsetX = (e: React.TouchEvent | React.MouseEvent) => {
  if (typeof (e as React.MouseEvent).nativeEvent.offsetX === 'number') {
    return (e as React.MouseEvent).nativeEvent.offsetX;
  }
  if (typeof (e as React.TouchEvent).targetTouches === 'object') {
    const touchE = e as React.TouchEvent;
    const rect = (touchE.target as HTMLDivElement).getBoundingClientRect();
    return touchE.targetTouches[0].pageX - rect.left;
  }
  return 0;
};

const ON_CLICK_DEBOUNCE = 250;

interface ITooltipProps {
  title?: string;
  className?: string;
  style?: any;
}

const ScrubBarTooltip: React.FunctionComponent<ITooltipProps> = ({
  title,
  className,
  style = {},
}) => {
  return (
    <div style={style} className={className || ''}>
      { title }
    </div>
  );
};

interface ITooltipOuterProps {
  tooltipClassName?: string;
  valueToTooltipString?: (pos: number) => string;
  defaultValue?: number;
  show?: boolean;
}

const ScrubBarTooltipOuter: React.FunctionComponent<ITooltipOuterProps> = ({
  tooltipClassName,
  valueToTooltipString = () => '',
  defaultValue = 0,
  show = false,
}) => {
  const outer = React.useRef(null);
  const [value, setValue] = React.useState(defaultValue);

  const outerWidth = outer.current
    ? outer.current.clientWidth
    : 0;
  
  const content = valueToTooltipString(value) || '';

  return (
    <div
      ref={outer}
      style={{
        position: 'absolute',
        top: '-100%',
        left: 0,
        width: '100%',
        height: '300%'
      }}
      onMouseMove={(e: React.MouseEvent) => {
        setValue(getOffsetX(e) / outerWidth);
      }}
    >
      {show && content.length > 0 && (
        <ScrubBarTooltip
          title={valueToTooltipString(value)}
          className={tooltipClassName}
          style={{
            left: `${outerWidth * value}px`
          }}
        />
      )}
    </div>
  );
};

const ScrubBar: React.FunctionComponent<IProps> = ({
  defaultValue = 0,
  useTooltip = false,
  valueToTooltipString = () => '',
  className,
  onClick,
}: IProps) => {
  const outer = React.useRef(null);
  const scrubbing = React.useRef(false);

  const [hover, setHover] = React.useState(false);
  const [value, setValue] = React.useState(clampNumber(defaultValue, 0, 1));
  const [offsetX, setOffsetX] = React.useState(0);
  const [lastUpdate, setLastUpdate] = React.useState(0);

  const debouncedOnClick = typeof onClick === 'function'
    ? debounce(onClick, ON_CLICK_DEBOUNCE)
    : () => {};

  const onDown = (e: React.TouchEvent | React.MouseEvent) => {
    scrubbing.current = true;
    setOffsetX(getOffsetX(e));
  };

  const onUp = () => {
    if (scrubbing.current) {
      scrubbing.current = false;
      setLastUpdate((new Date()).getTime());
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    if (scrubbing.current) {
      setOffsetX(getOffsetXNative(e, outer.current));
    }
  };

  const onTouchMove = (e: TouchEvent) => {
    if (scrubbing.current) {
      setOffsetX(getOffsetXNative(e, outer.current));
    }
  };

  // Set up cursor move and cursor up events on the entire document
  // so that the scrub can persist even when the user drags outside
  // the scrub bar. 
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

  // Prop update -- set value, don't propagate.
  React.useEffect(() => {
    setValue(clampNumber(defaultValue, 0, 100));
  }, [defaultValue]);

  // State update -- set value, propagate back to parent.
  React.useEffect(() => {
    if (scrubbing.current) {
      const pos = clampNumber(offsetX / outer.current.clientWidth, 0, 1);
      setValue(pos * 100);
      debouncedOnClick(pos);
    }
  }, [lastUpdate, offsetX]);

  return (
    <div
      className={[className || ''].join(' ')}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={onDown}
      onTouchStart={onDown}
      ref={outer}
    >
      {useTooltip && (
        <ScrubBarTooltipOuter
          tooltipClassName={`${className}__tooltip`}
          show={(hover || scrubbing.current)}
          valueToTooltipString={valueToTooltipString}
          defaultValue={value}
        />
      )}
      <div
        className={[`${className}__fill`].join(' ')}
        style={{ width: `${value}%` }}
      >
        <span className="sr-only">{`${value} percent`}</span>
      </div>
    </div>
  );
};

export default ScrubBar;
