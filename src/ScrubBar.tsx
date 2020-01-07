// @file
// Functional component for an action button.

import React from 'react';

interface IProps {
  defaultValue: number;
  className?: string;
  onClick?: (pos: number) => void;
}

const ScrubBar: React.FunctionalComponent<IProps> = ({
  defaultValue = 0,
  className,
  onClick,
}) => {
  const outer = React.useRef(null);
  const inner = React.useRef(null);

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

  const onDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setScrubbing(true);
    setOffsetX(e.offsetX);
  };

  const onMove = (e) => {
    if (!scrubbing) {
      return;
    }
    setOffsetX(e.offsetX);
  };

  const onUp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setScrubbing(false);
  };

  return (
    <div
      className={[className || ''].join(' ')}
      onMouseDown={onDown}
      onMouseUp={onUp}
      onMouseMove={onMove}
      onTouchStart={onDown}
      onTouchEnd={onUp}
      onTouchMove={onMove}
      ref={outer}
    >
      <div
        className={[`${className}__fill`].join(' ')}
        style={{ width: `${value}%` }}
        ref={inner}
      >
        <span className="sr-only">{`${value} percent`}</span>
      </div>
    </div>
  );
};

export default ScrubBar;
