import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    position: 'relative',
    width: 1200,

    marginLeft: 'auto',
    marginRight: 'auto',
  },

  soundToggle: {
    position: 'absolute',
    left: 565,
    top: '102%',
    border: '2px solid black',
    borderRadius: 3,
    width: 70,
    height: 22,
    padding: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  clock: {
    marginRight: 'auto',
    marginLeft: 'auto',
    position: 'relative',

    width: 300,
    height: 300,

    '&:before': {
      position: 'absolute',
      display: 'block',
      content: '""',
      left: '48%',
      top: '48%',
      width: '4%',
      height: '4%',
      border: '1px solid black',
      borderRadius: '50%',
      backgroundColor: 'black',
    },
  },

  arrow: {
    position: 'absolute',
    display: 'block',
    left: '50%',
    bottom: '50%',
    content: '',
    backgroundColor: 'black',
    transformOrigin: 'bottom center',
  },

  arrowSec: {
    width: '0.5%',
    height: '50%',
    animation: 'rotateWithOrigin 60000ms linear 1000ms infinite',
    transform: useStylesProps => `rotate(${useStylesProps.renderSecs}deg)`,
  },
  arrowMin: {
    width: '0.5%',
    height: '48%',
    border: '1px solid black',
    borderRadius: '50%',
    animation: 'rotateWithOrigin 3600000ms linear 1000ms infinite',
    transform: useStylesProps => `rotate(${useStylesProps.renderMins}deg)`,
  },

  arrowHour: {
    width: '1.5%',
    height: '30%',
    border: '1px solid black',
    borderRadius: '50%',
    animation: 'rotateWithOrigin 216000000ms linear 1000ms infinite',
    transform: useStylesProps => `rotate(${useStylesProps.renderHours}deg)`,
  },
});

export default useStyles;
