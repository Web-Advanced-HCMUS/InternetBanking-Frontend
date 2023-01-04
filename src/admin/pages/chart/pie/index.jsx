import { Box } from '@mui/material';
import PieChart from 'admin/components/chart/PieChart';
import Header from 'admin/components/Header';

const PieAnalyst = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh" width={'99%'}>
        <PieChart />
      </Box>
    </Box>
  );
};

export default PieAnalyst;
