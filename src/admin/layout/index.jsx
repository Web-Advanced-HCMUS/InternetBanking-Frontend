import { Box } from '@mui/material';
import DashBoard from 'admin/pages/dashboard';
import { useState } from 'react';
import Sidebar from '../pages/global/Sidebar';
import TopBar from '../pages/global/Topbar';

const AdminLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <main className="content">
      <Box display="flex">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <Box
          ml={`${!isCollapsed ? '248px' : '71px'}`}
          display="flex"
          flexDirection="column"
          flexGrow={1}
          height="100%"
        >
          <TopBar />
          {children}
        </Box>
      </Box>
    </main>
  );
};

export default AdminLayout;
