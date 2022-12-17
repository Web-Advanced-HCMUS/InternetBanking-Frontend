import { Box, Button, Divider, Grid, Link, Typography } from '@mui/material';
import TopBar from 'containers/global/Topbar';
import React from 'react';
import Banner from './Screen.png';
import WhatIsTimo from './What-is-Timo.png';
import Notifications from './instant-noti.png';
import AppSecurity from './app-securs.png';
import ProtectFunds from './protected-funds.png';

const mockAboutsData = [
  {
    reverse: false,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    content: [
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum repudiandae consequatur laudantium non atque? Voluptatem,nulla repudiandae odio voluptatum eumaccusantium porro culpa doloremque. Ea namdistinctio amet a provident.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus earum harum, vel quas provident exercitationem?',
    ],
    img: WhatIsTimo,
    url: '/',
  },
  {
    reverse: true,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    content: [
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum repudiandae consequatur laudantium non atque? Voluptatem,nulla repudiandae odio voluptatum eumaccusantium porro culpa doloremque. Ea namdistinctio amet a provident.',
    ],
    img: WhatIsTimo,
    url: '/',
  },
  {
    reverse: false,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    content: [
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum repudiandae consequatur laudantium non atque? Voluptatem,nulla repudiandae odio voluptatum eumaccusantium porro culpa doloremque. Ea namdistinctio amet a provident.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus earum harum, vel quas provident exercitationem?',
    ],
    img: WhatIsTimo,
    url: '/',
  },
];
const mockStrengths = [
  {
    img: Notifications,
    name: 'Thông báo tức thời',
    content:
      'Với ứng dụng Timo, bạn sẽ luôn nhận được thông báo cho mọi giao dịch từ tài khoản. Đồng thời, bạn có thể khóa/mở khóa thẻ ngay trong ứng dụng một cách nhanh chóng để bảo đảm tiền của bạn vẫn luôn được an toàn.',
  },
  {
    img: AppSecurity,
    name: 'Bảo mật trong ứng dụng',
    content:
      'Đăng nhập vào tài khoản luôn cần được xác minh bằng tên đăng nhập, mật khẩu hoặc Mã sinh trắc học. Mã OTP được gửi đến tức thời trong ứng dụng để xác thực các giao dịch được thực hiện từ tài khoản của bạn.',
  },
  {
    img: ProtectFunds,
    name: 'Bảo vệ tiền gửi',
    content:
      'Timo cho bạn toàn quyền truy cập vào tài khoản để thực hiện các giao dịch ngân hàng bất cứ lúc nào, trong khi tiền của bạn vẫn luôn được bảo đảm tại Ngân hàng Bản Việt và được bảo vệ bởi Ngân hàng Nhà nước. ',
  },
];
const footerItems = [
  {
    color: '#BFE594',
    title: 'VỀ CHÚNG TÔI',
    links: [
      {
        name: 'Lorem, ipsum dolor.',
        url: '/',
      },
      {
        name: 'Lorem, ipsum dolor.',
        url: '/',
      },
      {
        name: 'Lorem, ipsum',
        url: '/',
      },
      {
        name: 'Lorem, ipsum dolor.',
        url: '/',
      },
      {
        name: 'Lorem, ipsum',
        url: '/',
      },
    ],
  },
  {
    color: '#C6D8F8',
    title: 'TÀI KHOẢN VÀ THẺ',
    links: [
      {
        name: 'Lorem, ipsum dolor.',
        url: '/',
      },
      {
        name: 'Lorem, ipsum dolor.',
        url: '/',
      },
    ],
  },
  {
    color: '#6CD2A9',
    title: 'SẢN PHẨM TÀI CHÍNH',
    links: [
      {
        name: 'Lorem, ipsum dolor.',
        url: '/',
      },
      {
        name: 'Lorem, ipsum dolor.',
        url: '/',
      },
      {
        name: 'Lorem, ipsum',
        url: '/',
      },
      {
        name: 'Lorem, ipsum dolor.',
        url: '/',
      },
    ],
  },
  {
    color: '#D44A73',
    title: 'HỖ TRỢ KHÁCH HÀNG / NHÀ PHÁT TRIỂN',
    links: [
      {
        name: 'Lorem, ipsum dolor.',
        url: '/',
      },
      {
        name: 'Lorem, ipsum',
        url: '/',
      },
      {
        name: 'Lorem, ipsum dolor.',
        url: '/',
      },
    ],
  },
];

const Homepage = () => {
  return (
    <div>
      <TopBar />

      {/* Banner */}
      <Grid container spacing="2" height={'575px'} bgcolor="#5A519E" overflow={'hidden'}>
        {/* Left Banner*/}
        <Grid
          item
          xs={6}
          display="flex"
          alignItems={'center'}
          justifyContent="center"
          color={'#C6D8F8'}
        >
          <Box display={'flex'} flexDirection="column" alignItems={'flex-start'}>
            <Typography mb={2} fontSize={44} fontWeight={600}>
              Trải nghiệm khách hàng
            </Typography>
            <Box flexGrow={0}>
              <Button
                sx={{
                  bgcolor: '#C6D8F8',
                  fontSize: 24,
                  color: '#5A519E',
                }}
              >
                Tham gia ngay
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Right Banner*/}
        <Grid
          item
          xs={6}
          display="flex"
          justifyContent={'center'}
          alignItems={'center'}
          sx={{ transform: 'rotate(30deg)' }}
        >
          <Box
            component={'img'}
            src={Banner}
            sx={{
              height: '475px',
              width: '60 %',
              overflow: 'hidden',
            }}
          />
        </Grid>
      </Grid>

      {/* About website */}
      {mockAboutsData.map((about) => (
        <Box display={'flex'} justifyContent="center" alignItems={'center'} my={5}>
          <Grid
            container
            spacing={2}
            width="70%"
            gridAutoRows={1}
            direction={!about.reverse ? 'row' : 'row-reverse'}
          >
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              flexDirection={'column'}
              justifyContent="center"
            >
              <Typography component={'h1'} variant="h4" fontWeight={500} my={1}>
                {about.title}
              </Typography>
              {about.content.map((p) => (
                <Typography my={1}>{p}</Typography>
              ))}
              <Button sx={{ my: 1 }} variant="contained" href={about.url}>
                Tìm hiểu ngay
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box component={'img'} src={about.img} />
            </Grid>
          </Grid>
        </Box>
      ))}

      {/* Strength */}
      <Box display={'flex'} alignItems="center" flexDirection={'column'}>
        {/* Title */}
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing.</Typography>

        {/* Card List */}
        <Grid container spacing={4} width="80%">
          {/* Card Items */}
          {mockStrengths.map((strength) => (
            <Grid item xs={4}>
              <Box
                mx={'auto'}
                display={'flex'}
                justifyContent="center"
                component={'img'}
                src={strength.img}
              />
              <Typography textAlign="center">{strength.name}</Typography>
              <Typography>{strength.content}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer */}
      <Grid container spacing={2}>
        {footerItems.map((item) => (
          <Grid item xs="3">
            <Box display="flex" flexDirection={'column'} p={4}>
              <Divider
                sx={{
                  borderBottom: 8,
                  bgcolor: item.color,
                }}
              />
              <Typography>{item.title}</Typography>
              {item.links.map((link) => (
                <Link href={link.url}>{link.name}</Link>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Homepage;
