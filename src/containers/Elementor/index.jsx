import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import WhatIsTimo from './What-is-Timo.png';
import WhatIsTimo1 from './vision-mission-1.png';
import WhatIsTimo2 from './Your-account-is-always-protected.png';

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
    img: WhatIsTimo1,
    url: '/',
  },
  {
    reverse: false,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    content: [
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum repudiandae consequatur laudantium non atque? Voluptatem,nulla repudiandae odio voluptatum eumaccusantium porro culpa doloremque. Ea namdistinctio amet a provident.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus earum harum, vel quas provident exercitationem?',
    ],
    img: WhatIsTimo2,
    url: '/',
  },
];
const Elementor = () => {
  return (
    <>
      {mockAboutsData.map((about) => (
        <Box display={'flex'} justifyContent="center" alignItems={'center'} my={2}>
          <Grid
            mt={0}
            container
            spacing={2}
            width="65.5%"
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
              <Typography component={'h1'} variant="h4" fontWeight={600} my={1}>
                {about.title}
              </Typography>
              {about.content.map((p) => (
                <Typography my={1} fontSize={18}>
                  {p}
                </Typography>
              ))}
              <Box display="flex">
                <Button
                  sx={{
                    my: 1,
                    p: 1,
                    fontSize: 18,
                    fontWeight: 550,
                    bgcolor: 'primary.dark',
                    '&:hover': { bgcolor: 'primary.light' },
                  }}
                  variant="contained"
                  color="primary"
                  href={about.url}
                >
                  Tìm hiểu ngay
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display={'flex'}
              justifyContent="center"
              alignItems={'center'}
            >
              <Box component={'img'} src={about.img} height="450px" />
            </Grid>
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default Elementor;
