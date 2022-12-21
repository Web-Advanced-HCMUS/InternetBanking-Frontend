import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Slider from 'react-slick';
import Banner1 from './Screen.png';
import Banner2 from './Behind-the-scenes-of-Timo.png';
import Banner3 from './no-hiddens-fee.png';
import Banner4 from './Non-cash-payment.png';
import Banner5 from './Term-Deposit-Guide-1.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const bannerItems = [
  {
    title: 'Trải nghiệm khách hàng',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, repellendus?',
    image: Banner1,
    rotate: 30,
    reverse: false,
    width: '67.5',
    height: 555,
  },
  {
    title: 'Trải nghiệm tiện ích ngân hàng số Timo',
    description: '',
    image: Banner2,
    rotate: 0,
    reverse: true,
    width: '72.5',
    height: 585,
  },
  {
    title: 'Lorem ipsum dolor.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum.',
    image: Banner3,
    rotate: 0,
    reverse: false,
    width: '60',
    height: 600,
  },
  {
    title: 'Lorem ipsum.',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    image: Banner4,
    rotate: 25,
    reverse: false,
    width: '72.5',
    height: 600,
  },
  {
    title: 'Lorem ipsum dolor sit.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: Banner5,
    rotate: 0,
    reverse: false,
    width: '',
    height: 555,
  },
];
const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Slider {...settings}>
        {bannerItems.map((item) => (
          <Box mb={8}>
            <Grid
              container
              spacing="2"
              height={'625px'}
              bgcolor="#5A519E"
              overflow={'hidden'}
              direction={!item.reverse ? 'row' : 'row-reverse'}
            >
              {/* Left Banner*/}
              <Grid
                item
                xs={6}
                display="flex"
                alignItems={'center'}
                justifyContent="center"
              >
                <Box
                  display={'flex'}
                  flexDirection="column"
                  alignItems={'flex-start'}
                  width="75%"
                  ml={28}
                  color={'#f2f6fe'}
                >
                  <Typography mb={2} fontSize={52} fontWeight={700}>
                    {item.title}
                  </Typography>
                  {item.description && (
                    <Typography variant="h6" fontWeight={500} fontSize={24}>
                      {item.description}
                    </Typography>
                  )}
                  <Box flexGrow={0} mt={4}>
                    <Button
                      component="a"
                      sx={{
                        fontSize: 24,
                        backgroundColor: 'white',
                        color: '#5A519E',
                        fontWeight: 700,
                        '&:hover': {
                          backgroundColor: '#e9e9e9',
                          boxShadow: '5px 10px',
                          transform: 'scale(1.02)',
                          transitionDuration: '.7s',
                          transitionTimingFunction: 'ease-out',
                        },
                      }}
                      variant="contained"
                      href="/login"
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
                sx={{ transform: `rotate(${item.rotate}deg)` }}
              >
                <Box
                  component={'img'}
                  src={item.image}
                  sx={{
                    height: `${item.height}px`,
                    width: `${item.width}%`,
                    overflow: 'hidden',
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default BannerSlider;
