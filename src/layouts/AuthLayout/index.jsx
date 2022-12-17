import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
const authBg = '/img/1.jpg';

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${authBg})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgBlueColor: {
    backgroundImage:
      'linear-gradient(to bottom,#FFFFFF, #FFFFFF)',
    width: 500,
    height: 'fit-content',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
    borderRadius: 10,
    boxShadow: '5px 10px 18px #888888',
    position: 'relative',
    zIndex: 1000,
  },
  backButton: {
    position: 'absolute',

    border: '2px solid #660099',
    boxShadow: '5px 10px 18px #888888',
    [theme.breakpoints.down('sm')]: {
      border: 'none',
      top: 19,
      right: 24,
    },
    '&:focus': {
      outline: 'none',
    },
    '&:hover': { opacity: 0.5 },
    transition: 'all .2s',
  },
}));

export default function AuthLayout(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleBacktoHome = () => {
    // nhấn nút X
    setTimeout(() => {
      navigate('/');
    }, 50);
  };

  return (
    <div className={classes.backgroundImage}>
      <div className={classes.bgBlueColor}>
        {props.children}
      </div>
    </div>
  );
}
