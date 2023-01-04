import { Box } from '@mui/material';
import DashBoard from 'admin/pages/dashboard';
import Sidebar from '../pages/global/Sidebar';
import TopBar from '../pages/global/Topbar';

const AdminLayout = () => {
  return (
    <main className="content">
      <Box display="flex">
        <Box>
          <Sidebar />
        </Box>
        <Box display="flex" flexDirection="column" flexGrow={1} height="100%">
          <TopBar />
          {/* content here */}
          <DashBoard />
        </Box>
      </Box>
    </main>
  );
};

export default AdminLayout;
