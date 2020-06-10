import cx from 'classnames';
import React from 'react';
import styles from '../../styles.module.scss';

export default function DrawingControls({
  onBigger,
  onSmaller,
  onMouseEnterControls,
  onMouseLeaveControls,
}) {
  return (
    <>
      <svg
        onClick={onSmaller}
        onMouseEnter={onMouseEnterControls}
        onMouseLeave={onMouseLeaveControls}
        className={cx(styles.DrawingControl, styles.DrawingControlSmaller)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 112 112"
      >
        <rect width="112" height="112" fill="#7EEEA4" rx="56" />
        <rect
          width="66"
          height="7.461"
          x="23"
          y="52.27"
          fill="#FF8A00"
          rx="3.73"
        />
      </svg>
      <svg
        onClick={onBigger}
        onMouseEnter={onMouseEnterControls}
        onMouseLeave={onMouseLeaveControls}
        className={cx(styles.DrawingControl, styles.DrawingControlBigger)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 112 112"
      >
        <rect width="112" height="112" fill="#E7FFA1" rx="56" />
        <rect
          width="66"
          height="7.461"
          x="23"
          y="52.27"
          fill="#FFC3EE"
          rx="3.73"
        />
        <rect
          width="66"
          height="7.461"
          x="59.73"
          y="23"
          fill="#FFC3EE"
          rx="3.73"
          transform="rotate(90 59.73 23)"
        />
      </svg>
    </>
  );
}
