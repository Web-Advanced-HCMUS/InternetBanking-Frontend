import { Box } from '@mui/system';
import Header from 'components/Header';
import UserAccount from 'containers/UserAccount';

const CustomerHome = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="CUSTOMER HOMEPAGE" subtitle="Landing page of customer after logging in" />
      </Box>

      <UserAccount />
    </Box>
  );
};

export default CustomerHome;
