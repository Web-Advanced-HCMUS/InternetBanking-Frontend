import CustomerSideBar from 'layouts/HomeLayout/Sidebar/CustomerSideBar';
import CustomerTopBar from 'layouts/HomeLayout/Topbar/CustomerTopBar';
import { useState } from 'react';
import { Box } from '@mui/system';
import CardList from 'containers/customer/CardList';
import TrackRouteBar from 'containers/customer/TrackRouteBar/TrackRouteBar';
import ScreenTitle from 'containers/customer/ScreenTitle/ScreenTitle';

const CardManagement = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div style={{ height: '100%' }}>
      <CustomerTopBar setCollapse={setCollapse} collapse={collapse} />
      <CustomerSideBar collapse={collapse} />
      <Box
        ml={!collapse ? 31 : 7}
        width={`calc(100% - ${!collapse ? '250px' : '56px'})`}
        mt="71px"
      >
        <TrackRouteBar />
        <ScreenTitle title="Danh sách thẻ ngân hàng" />
        <CardList />
      </Box>
    </div>
  );
};

export default CardManagement;
