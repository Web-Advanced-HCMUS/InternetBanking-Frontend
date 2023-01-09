import { Box } from '@mui/material';
import Header from 'components/Header';
import TransactionForm from 'containers/customer/Form/TransactionForm';

const TransferConfirmation = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TRANSACTION CONFIRMATION" subtitle="Required opt confirmation to finish transfer transactions" />
      </Box>
      <TransactionForm />
    </Box>
  );
};

export default TransferConfirmation;
