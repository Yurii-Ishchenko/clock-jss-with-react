import { useState, useEffect, useRef } from 'react';
import arrowSound from '../audio/arrow.mp3';
import { getTime } from '../utils/utils';
import clockImg from '../images/clock.jpg';
import useStyles from './clock-styles';

export default function Time() {
  const [time, setTime] = useState(Date.now() + 7200000);
  const [arrow] = useState(new Audio(arrowSound));
  const [isOnSound, setIsOnSound] = useState(false);
  const intervalId = useRef(0);
  const toggleSound = () => {
    setIsOnSound(!isOnSound);
  };
  const { mins, secs, hours } = getTime(time);
  const renderSecs = secs * 6;
  const renderMins = mins * 6;
  const renderHours = hours * 30;

  const useStylesProps = { renderSecs, renderMins, renderHours };
  const classes = useStyles(useStylesProps);
  const arrowSecStyles = `${classes.arrow} ${classes.arrowSec}`;
  const arrowMinStyles = `${classes.arrow} ${classes.arrowMin}`;
  const arrowHourStyles = `${classes.arrow} ${classes.arrowHour}`;

  useEffect(() => {
    const startTime = () => {
      intervalId.current = window.setInterval(() => {
        setTime(Date.now() + 7200000);
        isOnSound && arrow.play();
      }, 1000);
    };
    startTime();
    return () => clearInterval(intervalId.current);
  }, [time, arrow, isOnSound]);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.clock}>
          <div className={`${classes.arrow} ${classes.dot}`}></div>
          <div className={arrowSecStyles}></div>
          <div className={arrowMinStyles}></div>
          <div className={arrowHourStyles}></div>
          <img src={clockImg} alt="clock" width="300" />
        </div>
        <button
          type="button"
          onClick={toggleSound}
          className={classes.soundToggle}
        >
          {isOnSound ? 'sound of' : 'sound on'}
        </button>
      </div>
    </>
  );
}
