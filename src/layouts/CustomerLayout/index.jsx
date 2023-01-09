import React, { useState } from 'react';
import { Box } from '@mui/material';
import TopBar from '../global/Topbar';
import Sidebar from '../global/Sidebar';

const CustomerLayout = (props) => {
  const { children } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <main className="content">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <Box ml={`${!isCollapsed ? '248px' : '71px'}`} display="flex" flexDirection="column" flexGrow={1} height="100%">
        <TopBar />
        {children}
      </Box>
    </main>
  );
};

export default CustomerLayout;
