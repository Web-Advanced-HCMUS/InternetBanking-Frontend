import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Footer from 'layouts/HomeLayout/Footer';
import { Box, Container } from '@mui/system';
import { CssBaseline, Link, Typography, Grid, Paper } from '@mui/material';

const authBg = '/img/00.jpeg';

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    height: '100vh',
    backgroundColor: '#F4F5F6',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgWhiteColor: {
    backgroundColor: '#FFFFFF',
    width: 450,
    height: 'fit-content',

    borderRadius: 8,
    boxShadow:
      '0px 3px 4px rgb(0 0 0 / 4%), 0px 3px 1px rgb(0 0 0 / 2%), 0px 1px 8px rgb(0 0 0 / 10%)',
    position: 'relative',
    zIndex: 1000,
  },

  bgLeft: {
    backgroundColor: '#FFFFFF',
    width: 260,
    marginTop: '36px',
    textAlign: 'center',
    paddingTop: '44px',
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingBottom: '44px',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: '8px',
    borderBottomLeftRadius: '8px',
    height: 'fit-content',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
    boxShadow:
      '0px 1px 1px rgb(0 0 0 / 4%), 0px 2px 1px rgb(0 0 0 / 2%), 0px 1px 3px rgb(0 0 0 / 10%)',
    position: 'relative',
    zIndex: 500,
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
    <div>
      <div className={classes.backgroundImage}>
        <div className={classes.bgWhiteColor}>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
}
