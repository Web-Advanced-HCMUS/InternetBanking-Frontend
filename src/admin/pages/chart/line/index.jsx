import { Box } from '@mui/material';
import LineChart from 'admin/components/chart/LineChart';
import Header from 'admin/components/Header';
import Sidebar from 'admin/pages/global/Sidebar';
import TopBar from 'admin/pages/global/Topbar';

const LineAnalyst = () => {
  return (
    <main className="content">
      <Box display="flex">
        <Box>
          <Sidebar />
        </Box>
        <Box display="flex" flexDirection="column" flexGrow={1} height="100%">
          <TopBar />
          <Box m="20px">
            <Header title="Line Chart" subtitle="Simple Line Chart" />
            <Box height="75vh" width={'99%'}>
              <LineChart />
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default LineAnalyst;
