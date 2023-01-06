import { Box } from '@mui/system';
import ReceiverList from 'containers/customer/ReceiverList';
import { TransferForm } from 'containers/customer/Form';
import Header from 'components/Header';

const TransferPage = ({ isExt }) => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TRANSFER MONEY" subtitle="Transfer money to your partners" />
      </Box>
      <ReceiverList />

      <TransferForm isExt={isExt} sender={{ name: '' }} />
    </Box>
  );
};

export default TransferPage;
