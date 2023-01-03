import { Box } from '@mui/material';
import DashBoard from './dashboard';
import Sidebar from './global/Sidebar';
import TopBar from './global/Topbar';
// import Banks from './admin/pages/Banks';
// import Transactions from './admin/pages/s';
// import Line from './admin/pages/Line';
// import Bar from './admin/pages/Bar';
// import Pie from './admin/pages/Pie';

// Employees
// Banks
// Transactions & filter
// Statistics

const AdminPage = () => {
  return (
    <main className="content">
      <Box display="flex">
        <Sidebar />
        <Box display="flex" flexDirection="column" flexGrow={1} height="100%">
          <TopBar />
          <DashBoard />
        </Box>
      </Box>
    </main>
  );
};

export default AdminPage;
