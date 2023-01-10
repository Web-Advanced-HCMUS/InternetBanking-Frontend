import React, { useState, useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Footer from 'layouts/HomeLayout/Footer';
import { Box, Container } from '@mui/system';
import { CssBaseline, Link, Typography, Grid, Paper, useTheme } from '@mui/material';
import { tokens, useMode } from 'theme';

const authBg = '/img/00.jpeg';

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    height: '100vh',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgWhiteColor: {
    width: 450,
    height: 'fit-content',

    borderRadius: 8,
    boxShadow: '0px 3px 4px rgb(0 0 0 / 4%), 0px 3px 1px rgb(0 0 0 / 2%), 0px 1px 8px rgb(0 0 0 / 10%)',
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
    boxShadow: '0px 1px 1px rgb(0 0 0 / 4%), 0px 2px 1px rgb(0 0 0 / 2%), 0px 1px 3px rgb(0 0 0 / 10%)',
    position: 'relative',
    zIndex: 500,
  },
}));

export default function AuthLayout(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
      <Box sx={{ backgroundColor: `${colors.primary[400]} !important` }}>
        <div className={classes.backgroundImage}>
          <div className={classes.bgWhiteColor}>
            {theme.palette.mode === 'dark' ? (
              <Box sx={{ background: `${colors.primary[500]} !important` }}>{props.children}</Box>
            ) : (
              <Box>{props.children}</Box>
            )}
          </div>
        </div>
      </Box>
      <Footer />
    </div>
  );
}
