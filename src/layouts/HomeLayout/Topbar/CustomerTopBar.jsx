import { Avatar, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import TimoIcon from './timo.png';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';

const CustomerTopBar = ({ collapse, setCollapse }) => {
  return (
    <Box
      display={'flex'}
      position={'fixed'}
      width="100%"
      top={0}
      justifyContent="space-between"
      alignItems={'center'}
      bgcolor={'#5A519E'}
      p={1.25}
      zIndex={1000}
    >
      <Box>
        <IconButton onClick={() => setCollapse(!collapse)}>
          <MenuIcon sx={{ color: '#f3f3f3', cursor: 'pointer' }} fontSize="large" />
        </IconButton>
      </Box>

      <Link to="/home">
        <Box
          component="img"
          src={TimoIcon}
          sx={{
            height: '2.25rem',
            width: '7.5rem',
            cursor: 'pointer',
          }}
          alt="Timo icon"
        />
      </Link>

      <Box display={'flex'} justifyContent="center" alignItems={'center'} gap={2} mr={2}>
        <IconButton>
          <DarkModeIcon sx={{ color: '#f3f3f3', cursor: 'pointer' }} fontSize="large" />
        </IconButton>
        <IconButton>
          <NotificationsIcon
            sx={{ color: '#f3f3f3', cursor: 'pointer' }}
            fontSize="large"
          />
        </IconButton>
        <IconButton sx={{ height: 30, width: 30 }}>
          <Avatar src="" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CustomerTopBar;
