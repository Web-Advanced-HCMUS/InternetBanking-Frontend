import CustomerSideBar from 'layouts/HomeLayout/Sidebar/CustomerSideBar';
import CustomerTopBar from 'layouts/HomeLayout/Topbar/CustomerTopBar';
import { useState } from 'react';
import { Box } from '@mui/system';
import TransactionForm from 'containers/customer/Form/TransactionForm';

const TransactionPage = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div style={{ height: '100%' }}>
      <CustomerTopBar setCollapse={setCollapse} collapse={collapse} />
      <CustomerSideBar collapse={collapse} />
      <Box ml={!collapse ? 31 : 7} width={`calc(100% - ${!collapse ? '248px' : '56px'})`}>
        <TransactionForm />
      </Box>
    </div>
  );
};

export default TransactionPage;
