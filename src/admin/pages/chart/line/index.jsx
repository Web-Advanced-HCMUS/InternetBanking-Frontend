import { Box } from '@mui/material';
import LineChart from 'admin/components/chart/LineChart';
import Header from 'admin/components/Header';

const LineAnalyst = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh" width={'99%'}>
        <LineChart />
      </Box>
    </Box>
  );
};

export default LineAnalyst;
