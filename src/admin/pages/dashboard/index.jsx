import { Box } from '@mui/material';
import Header from 'admin/components/Header';

const DashBoard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};

export default DashBoard;
