import { Avatar, Box, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import Slider from 'react-slick';

// Custom Arrow
function NextArrow(props) {
  return (
    <ChevronRightOutlined
      sx={{ cursor: 'pointer', color: 'inherit', ':hover': { color: 'inherit' } }}
      {...props}
    />
  );
}
function PrevArrow(props) {
  return (
    <ChevronLeftOutlined
      sx={{ cursor: 'pointer', color: 'inherit', ':hover': { color: 'inherit' } }}
      {...props}
    />
  );
}

const recentItems = [
  { name: 'Kha', account_no: '1' },
  { name: 'Nam', account_no: '3' },
  { name: 'Huỳnh', account_no: '2' },
  { name: 'Viên', account_no: '4' },
];

const ReceiverList = ({ collapse }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      {/* Receiver List Slider*/}
      <Box p={1} bgcolor="#e9e8f3" overflow={'hidden'}>
        <Box display={'flex'} justifyContent="space-between">
          <Typography mx={1}>Recents</Typography>
          <Typography mx={1} color={red[600]} fontWeight={600}>
            Tất cả (4)
          </Typography>
        </Box>
        <Box px={4}>
          <Slider {...settings} slidesToShow={collapse ? 12 : 8}>
            {recentItems.map((item, idx) => (
              <>
                <Box
                  display={'flex'}
                  flexDirection="column"
                  alignItems={'center'}
                  mt={0.5}
                  sx={{
                    ':hover': {
                      cursor: 'pointer',
                      WebkitTransition: 'all 200ms ease-in',
                      WebkitTransform: 'scale(1.1)',
                      msTransition: 'all 200ms ease-in',
                      msTransform: 'scale(1.1)',
                      MozTransition: 'all 200ms ease-in',
                      MozTransformOrigin: 'scale(1.1)',
                      transition: 'all 200ms ease-in',
                      transform: 'scale(1.1) 200ms',
                    },
                  }}
                  key={item.account_no}
                  // onClick={(item) => handleReceiverClick(item)}
                >
                  <Avatar sx={{ width: 52, height: 52 }}>{item.name.slice(0, 1)}</Avatar>
                  <Typography component={'span'} variant={'h6'} fontWeight={550}>
                    {item.name}
                  </Typography>
                </Box>
              </>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default ReceiverList;
