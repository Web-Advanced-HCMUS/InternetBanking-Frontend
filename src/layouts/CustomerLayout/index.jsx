import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@mui/styles';
import { Box, useMediaQuery } from '@mui/material';
import CustomerTopBar from './Topbar/CustomerTopBar';
import CustomerSideBar from './Sidebar/CustomerSideBar';

const useStyles = makeStyles((theme) => ({
  root: { backgroundColor: '#f7fafe', height: '100%' },
  content: {
    height: '100%',
  },
}));

const CustomerLayout = (props) => {
  const { children } = props;
  const classes = useStyles();
  const [collapse, setCollapse] = useState(false);

  return (
    <div>
      <CustomerTopBar collapse={collapse} setCollapse={setCollapse} />
      <CustomerSideBar collapse={collapse} />
      <Box
        ml={!collapse ? 31 : 7}
        height="calc(100vh - 71px)"
        width={`calc(100% - ${!collapse ? '248px' : '56px'})`}
        sx={{ backgroundColor: '#f7fafe' }}
        className={classes.content}
      >
        {children}
      </Box>
    </div>
  );
};

export default CustomerLayout;
