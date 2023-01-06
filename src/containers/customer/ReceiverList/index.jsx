import { Avatar, Box, Grid, IconButton, Typography, useTheme } from '@mui/material';
import { AddOutlined, ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import Slider from 'react-slick';
import { tokens } from 'theme';
import { Link } from 'react-router-dom';

// Custom Arrow
function NextArrow({ currentSlide, slideCount, children, ...props }) {
  return (
    <span>
      <ChevronRightOutlined sx={{ cursor: 'pointer', color: `inherit`, ':hover': { color: `inherit` } }} {...props} />
    </span>
  );
}
function PrevArrow({ currentSlide, slideCount, children, ...props }) {
  return (
    <span>
      <ChevronLeftOutlined sx={{ cursor: 'pointer', color: `inherit`, ':hover': { color: `inherit` } }} {...props} />
    </span>
  );
}

const recentItems = [
  { name: 'Nguyễn Văn A', account_no: '1' },
  { name: 'Nguyễn Văn B', account_no: '3' },
  { name: 'Huỳnh Nguyễn Ngọc Lan', account_no: '2' },
  { name: 'Trần Nguyễn Lâm Viên', account_no: '4' },
  { name: 'Huỳnh Nguyễn Ngọc Lan', account_no: '2' },
  { name: 'Trần Nguyễn Lâm Viên', account_no: '4' },
  { name: 'Huỳnh Nguyễn Ngọc Lan', account_no: '2' },
  { name: 'Trần Nguyễn Lâm Viên', account_no: '4' },
  { name: 'Huỳnh Nguyễn Ngọc Lan', account_no: '2' },
  { name: 'Trần Nguyễn Lâm Viên', account_no: '4' },
  { name: 'Huỳnh Nguyễn Ngọc Lan', account_no: '2' },
  { name: 'Trần Nguyễn Lâm Viên', account_no: '4' },
  { name: 'Huỳnh Nguyễn Ngọc Lan', account_no: '2' },
  { name: 'Trần Nguyễn Lâm Viên', account_no: '4' },
  { name: 'Huỳnh Nguyễn Ngọc Lan', account_no: '2' },
  { name: 'Trần Nguyễn Lâm Viên', account_no: '4' },
];
const handleReceiverClick = (item) => {};
const ReceiverList = ({ collapse }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box p={1} bgcolor={colors.primary[400]}>
      <Box display={'flex'} justifyContent="space-between">
        <Typography mx={1} color={colors.greenAccent[500]}>
          Recent Receivers
        </Typography>
        <Link>
          <Typography
            mx={1}
            color={colors.red[500]}
            sx={{ textDecoration: 'underline', textUnderlineOffset: 1.5, ':hover': { color: 'inherit', textDecoration: '' } }}
            fontWeight={600}
          >
            Tất cả (4)
          </Typography>
        </Link>
      </Box>
      <Grid container>
        <Grid item md={1}>
          <Box height="100%" width="100%" display="flex" flexDirection={'column'} alignItems="center" justifyContent="center">
            <Link to="receiver/add">
              <IconButton>
                <AddOutlined fontSize="large" />
              </IconButton>
            </Link>
            <Typography variant="h5" color={colors.blue[200]} fontWeight={600}>
              Add
            </Typography>
          </Box>
        </Grid>
        <Grid item md={11}>
          <Box px={4}>
            <Box>
              <Slider {...settings} slidesToShow={collapse ? 12 : 8}>
                {recentItems.map((item, idx) => (
                  <Box
                    flexGrow={1}
                    display={'flex !important'}
                    flexDirection="column"
                    alignItems={'center'}
                    justifyContent="center"
                    mt={0.5}
                    gap={1}
                    columnGap={2}
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
                    key={idx}
                    onClick={(item) => handleReceiverClick(item)}
                  >
                    <Avatar sx={{ width: 48, height: 48 }}>{item.name.slice(0, 1)}</Avatar>
                    <Typography component={'span'} color={colors.blue[200]} fontWeight={550} textAlign="center">
                      {item.name}
                    </Typography>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReceiverList;
