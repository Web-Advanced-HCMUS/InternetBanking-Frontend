import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@mui/styles';
import { useMediaQuery } from '@mui/material';
import TopBar from './Topbar';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 56,
    height: '100%',
  },
  content: {
    height: '100%',
  },
}));

const HomeLayout = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div>
      <TopBar />
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default HomeLayout;
