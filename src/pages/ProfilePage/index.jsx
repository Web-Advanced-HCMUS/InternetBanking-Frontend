import CustomerSideBar from 'layouts/HomeLayout/Sidebar/CustomerSideBar';
import CustomerTopBar from 'layouts/HomeLayout/Topbar/CustomerTopBar';
import { useState } from 'react';
import { Box } from '@mui/system';
import TrackRouteBar from 'containers/customer/TrackRouteBar/TrackRouteBar';
import ScreenTitle from 'containers/customer/ScreenTitle/ScreenTitle';
import { Avatar, Button, Divider, Typography } from '@mui/material';

const ProfilePage = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div style={{ height: '100%' }}>
      <CustomerTopBar setCollapse={setCollapse} collapse={collapse} />
      <CustomerSideBar collapse={collapse} />
      <Box
        ml={!collapse ? 31 : 7}
        width={`calc(100% - ${!collapse ? '250px' : '56px'})`}
        mt="71px"
        overflow="hidden"
      >
        <TrackRouteBar />
        <ScreenTitle title="Thông tin chi tiết" />

        <Divider />
        <Box display="flex" justifyContent="center" alignItems="center" p={3} gap={3}>
          <Avatar sx={{ width: 96, height: 96 }} />
          <Box>
            <Typography variant="h4">Nguyễn Văn A</Typography>
            <Typography variant="h6">STK: 3454-3454-3454-3454</Typography>
            <Typography>Số dư khả dụng: 0</Typography>
          </Box>
        </Box>
        <Divider />

        <Box
          my={3}
          p={3}
          px={5}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mx="auto"
          width="60%"
          border={3}
          borderRadius={5}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            my={1}
          >
            <Typography variant="h5">Chi tiết tài khoản</Typography>
            <Button>Chỉnh sửa</Button>
          </Box>
          <Box display="flex" width="100%" my={1}>
            <Typography>Tên đăng nhập:</Typography>
            <Typography ml={1}>username</Typography>
          </Box>
          <Box display="flex" width="100%" my={1}>
            <Typography>Mật khẩu:</Typography>
            <Typography ml={1}>********</Typography>
          </Box>
          <Box display="flex" width="100%" my={1}>
            <Typography>Email liên kết:</Typography>
            <Typography ml={1}>a@g.co</Typography>
          </Box>
          <Box display="flex" width="100%" my={1}>
            <Typography>Số điện thoại:</Typography>
            <Typography ml={1}>0345443444</Typography>
          </Box>
        </Box>

        <Box
          my={3}
          py={3}
          px={5}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mx="auto"
          width="60%"
          border={3}
          borderRadius={5}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            my={1}
          >
            <Typography variant="h5">Thông tin cá nhân</Typography>
            <Button>Chỉnh sửa</Button>
          </Box>
          <Divider light />
          <Box display="flex" width="100%" my={1}>
            <Typography>Địa chỉ:</Typography>
            <Typography ml={1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illum.
            </Typography>
          </Box>
          <Box display="flex" width="100%" my={1}>
            <Typography>Tình trạng hôn nhân:</Typography>
            <Typography ml={1}>Độc thân</Typography>
          </Box>
          <Box display="flex" width="100%" my={1}>
            <Typography>Nghề nghiệp:</Typography>
            <Typography ml={1}>Sinh viên</Typography>
          </Box>
          <Box display="flex" width="100%" my={1}>
            <Typography>Ngày sinh:</Typography>
            <Typography ml={1}>01/01/2001</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ProfilePage;
