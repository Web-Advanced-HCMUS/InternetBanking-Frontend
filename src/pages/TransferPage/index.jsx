import CustomerSideBar from 'layouts/HomeLayout/Sidebar/CustomerSideBar';
import CustomerTopBar from 'layouts/HomeLayout/Topbar/CustomerTopBar';
import { useState } from 'react';
import { Box } from '@mui/system';
import TrackRouteBar from 'containers/customer/TrackRouteBar/TrackRouteBar';
import ScreenTitle from 'containers/customer/ScreenTitle/ScreenTitle';
import ReceiverList from 'containers/customer/ReceiverList';
import { ConfirmationForm, TransferForm } from 'containers/customer/Form';

const TransferPage = ({ isExt }) => {
  const [collapse, setCollapse] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ height: '100%' }}>
      <CustomerTopBar setCollapse={setCollapse} collapse={collapse} />
      <CustomerSideBar collapse={collapse} />
      <Box
        ml={!collapse ? 31 : 7}
        width={`calc(100% - ${!collapse ? '248px' : '56px'})`}
        sx={{ backgroundColor: '#f7fafe' }}
      >
        <TrackRouteBar />
        <ScreenTitle title="" />

        <Box>
          <ReceiverList />
          {!showModal ? (
            <TransferForm
              sender={{ name: '' }}
              setShowModal={setShowModal}
              showModal={showModal}
              isExt={isExt}
            />
          ) : (
            <ConfirmationForm setShowModal={setShowModal} showModal={showModal} />
          )}
        </Box>
      </Box>
    </div>
  );
};

export default TransferPage;
