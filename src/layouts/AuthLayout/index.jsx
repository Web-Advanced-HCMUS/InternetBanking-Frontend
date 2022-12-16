import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
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
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    position: 'relative',
    zIndex: 1000,
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translate(50%,-50%)',
    border: '2px solid #660099',
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
  const handleClose = () => {
    // nhấn nút X
    setTimeout(() => {
      navigate('/');
    }, 50);
  };

  return (
    <div className={classes.backgroundImage}>
      <div className={classes.bgBlueColor}>
        {props.children}
        <IconButton
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon
            style={{ color: '#660099' }}
            fontSize="small"
          />
        </IconButton>
      </div>
    </div>
  );
}
