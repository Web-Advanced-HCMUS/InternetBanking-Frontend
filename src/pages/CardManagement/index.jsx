import { Box } from '@mui/material';
import Header from 'components/Header';
import CardList from 'containers/customer/CardList';

const CardManagement = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="CREDITS" subtitle="Manage all your banking cards" />
      </Box>
      <CardList />
    </Box>
  );
};

export default CardManagement;
