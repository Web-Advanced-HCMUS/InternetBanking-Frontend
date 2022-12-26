import CustomerSideBar from 'layouts/HomeLayout/Sidebar/CustomerSideBar';
import CustomerTopBar from 'layouts/HomeLayout/Topbar/CustomerTopBar';
import { useState } from 'react';
import { Box } from '@mui/system';
import TrackRouteBar from 'containers/customer/TrackRouteBar/TrackRouteBar';
import ScreenTitle from 'containers/customer/ScreenTitle/ScreenTitle';
import ReceiverList from 'containers/customer/ReceiverList';
import { ConfirmationForm, TransferForm } from 'containers/customer/Form';

const CustomerHome = () => {
  const [collapse, setCollapse] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ height: '100%' }}>
      <CustomerTopBar setCollapse={setCollapse} collapse={collapse} />
      <CustomerSideBar collapse={collapse} />
      <Box
        ml={!collapse ? 31 : 7}
        height="calc(100vh - 71px)"
        width={`calc(100% - ${!collapse ? '248px' : '56px'})`}
        sx={{ backgroundColor: '#f7fafe' }}
      >
        <TrackRouteBar />
        <ScreenTitle title="Make a transaction" />

        <Box>
          <ReceiverList />
          {!showModal ? (
            <TransferForm
              sender={{ name: '' }}
              setShowModal={setShowModal}
              showModal={showModal}
            />
          ) : (
            <ConfirmationForm setShowModal={setShowModal} showModal={showModal} />
          )}
        </Box>
      </Box>
    </div>
  );
};

export default CustomerHome;
