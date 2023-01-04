import { Box } from '@mui/material';
import PieChart from 'admin/components/chart/PieChart';
import Header from 'admin/components/Header';
import Sidebar from 'admin/pages/global/Sidebar';
import TopBar from 'admin/pages/global/Topbar';

const PieAnalyst = () => {
  return (
    <main className="content">
      <Box display="flex">
        <Box>
          <Sidebar />
        </Box>
        <Box display="flex" flexDirection="column" flexGrow={1} height="100%">
          <TopBar />
          <Box m="20px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart" />
            <Box height="75vh" width={'99%'}>
              <PieChart />
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default PieAnalyst;
