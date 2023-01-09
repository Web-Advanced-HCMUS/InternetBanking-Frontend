import { Box } from '@mui/material';
import BarChart from 'admin/components/chart/BarChart';
import Header from 'components/Header';

const BarAnalyst = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh" width={'99%'}>
        <BarChart />
      </Box>
    </Box>
  );
};

export default BarAnalyst;
