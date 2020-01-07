// @file
// Functional component for an action button.

import React from 'react';

interface IProps {
  defaultValue: number;
  className?: string;
  onClick?: (pos: number) => void;
}

const getOffsetX = (e: React.TouchEvent | React.MouseEvent) => {
  /* eslint-disable no-prototype-builtins */
  if (e.hasOwnProperty('offsetX')) {
    return (e as React.MouseEvent).nativeEvent.offsetX;
  }
  if (e.hasOwnProperty('targetTouches')) {
    const touchE = e as React.TouchEvent;
    const rect = (touchE.target as HTMLDivElement).getBoundingClientRect();
    return touchE.targetTouches[0].pageX - rect.left;
  }
  /* eslint-enable no-prototype-builtins */
  return 0;
};

const ScrubBar: React.FunctionComponent<IProps> = ({
  defaultValue = 0,
  className,
  onClick,
}: IProps) => {
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
      if (typeof onClick === 'function') {
        onClick(pos);
      }
      setValue(pos);
    }
  }, [scrubbing, offsetX]);

  const onDown = (e: React.TouchEvent | React.MouseEvent) => {
    setScrubbing(true);
    setOffsetX(getOffsetX(e));
  };

  const onUp = () => setScrubbing(false);

  return (
    <div
      className={[className || ''].join(' ')}
      onMouseDown={onDown}
      onMouseUp={onUp}
      onMouseMove={(e: React.MouseEvent) => {
        if (scrubbing) {
          setOffsetX(getOffsetX(e));
        }
      }}
      onTouchStart={onDown}
      onTouchEnd={onUp}
      onTouchMove={(e: React.TouchEvent) => {
        if (scrubbing) {
          setOffsetX(getOffsetX(e));
        }
      }}
      ref={outer}
    >
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
