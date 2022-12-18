import { Box, Divider, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const footerItems = [
  {
    color: '#c6d020',
    title: 'VỀ CHÚNG TÔI',
    links: [
      {
        name: 'Timo Hangout',
        url: '/',
      },
      {
        name: 'Tham gia Timo',
        url: '/login',
      },
      {
        name: 'Điều khoản & Điều kiện',
        url: '/',
      },
      {
        name: 'Chính sách Bảo vệ Dữ liệu & Quyền riêng tư',
        url: '/',
      },
      {
        name: 'Tuyển dụng',
        url: '/',
      },
    ],
  },
  {
    color: '#226d4f',
    title: 'TÀI KHOẢN VÀ THẺ',
    links: [
      {
        name: 'Tài khoản thanh toán',
        url: '/',
      },
      {
        name: 'Tiết kiệm có kỳ hạn',
        url: '/',
      },
      {
        name: 'Tiết kiệm mục tiêu',
        url: '/',
      },
      {
        name: 'Thẻ ghi nợ Timo',
        url: '/',
      },
      {
        name: 'Tài khoản thanh toán',
        url: '/',
      },
      {
        name: 'Thẻ tín dụng Timo Visa',
        url: '/',
      },
    ],
  },
  {
    color: '#2541be',
    title: 'SẢN PHẨM TÀI CHÍNH',
    links: [
      {
        name: 'Bảo hiểm nhân thọ Sunlife',
        url: '/',
      },
      {
        name: 'Bảo hiểm tai nạn Sunlife',
        url: '/',
      },
      {
        name: 'Bảo hiểm du lịch Liberty',
        url: '/',
      },
      {
        name: 'Đầu tư tích luỹ VinaCapital',
        url: '/',
      },
      {
        name: 'Trả góp qua Thẻ tín dụng',
        url: '/',
      },
    ],
  },
  {
    color: '#D44A73',
    title: 'HỖ TRỢ KHÁCH HÀNG / NHÀ PHÁT TRIỂN',
    links: [
      {
        name: 'Hotline: 1800 6788',
        url: '/',
      },
      {
        name: 'Email: care@timo.vn',
        url: '/',
      },
      {
        name: '– Thứ 2 – Thứ 7: 08:00 – 22:00',
        url: '/',
      },
      {
        name: '– Chủ nhật: 08:00 – 20:00',
        url: '/',
      },
    ],
  },
];
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#202020', color: '#f2f2f8' }}>
      <Grid container spacing={2} mt={0}>
        {footerItems.map((item) => (
          <Grid item xs="3">
            <Box display="flex" flexDirection={'column'} p={4}>
              <Divider
                sx={{
                  borderBottom: 8,
                  borderColor: item.color,
                }}
              />
              <Typography my={1} fontWeight={550} fontSize={18}>
                {item.title}
              </Typography>
              {item.links.map((link) => (
                <Box
                  component={'a'}
                  href={link.url}
                  mt={1}
                  fontSize={16}
                  sx={{
                    color: '#f2f2f8',
                    textDecoration: '',
                    '&:hover': {
                      color: '#c1b9cb',
                    },
                  }}
                >
                  {link.name}
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Footer;
