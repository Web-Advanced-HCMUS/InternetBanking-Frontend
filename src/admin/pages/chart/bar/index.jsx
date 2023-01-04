import { Box } from '@mui/material';
import BarChart from 'admin/components/chart/BarChart';
import Header from 'admin/components/Header';
import Sidebar from 'admin/pages/global/Sidebar';
import TopBar from 'admin/pages/global/Topbar';

const BarAnalyst = () => {
  return (
    <main className="content">
      <Box display="flex">
        <Box height="100vh">
          <Sidebar />
        </Box>
        <Box display="flex" flexDirection="column" flexGrow={1} height="100%">
          <TopBar />
          <Box m="20px">
            <Header title="Bar Chart" subtitle="Simple Bar Chart" />
            <Box height="75vh" width={'99%'}>
              <BarChart />
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default BarAnalyst;
