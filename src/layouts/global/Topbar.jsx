import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { Fragment, useContext, useState, useEffect } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import { InputBase } from '@mui/material';
import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsOutlined,
  PersonOutlined,
  Search,
  InfoOutlined,
  LockOutlined,
  Logout,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useLogoutMutation } from 'api/authApi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const { isLogged } = useSelector((state) => state.auth);

  const colorMode = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    if (!isLogged) {
      navigate('/login');
    }
  }, [isLogged]);

  const handleSignOut = async () => {
    await logout()
      .unwrap()
      .then()
      .catch((error) => console.log(error));
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(!open);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElNotify, setAnchorElNotify] = useState(null);
  const [openNotify, setOpenNotify] = useState(false);
  const handleClickNotify = (e) => {
    setAnchorElNotify(e.currentTarget);
    setOpenNotify(!openNotify);
  };
  const handleCloseNotify = () => {
    setAnchorElNotify(null);
  };
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" bgcolor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>

      <Box display="flex" gap={1}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? <LightModeOutlined size="small" /> : <DarkModeOutlined size="small" />}
        </IconButton>
        <IconButton
          onClick={handleClickNotify}
          sx={{ cursor: 'pointer' }}
          aria-controls={openNotify ? 'account-notify' : undefined}
          aria-haspopup="true"
          aria-expanded={openNotify ? 'true' : undefined}
        >
          <Badge badgeContent={4} color="error">
            <NotificationsOutlined size="small" />
          </Badge>
        </IconButton>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ cursor: 'pointer' }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <PersonOutlined size="small" sx={{ mx: 0.5 }} />
        </IconButton>
      </Box>
      {anchorEl && (
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
              '& .MuiList-root > a': {
                color: 'inherit !important',
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <Link to="/profile" sx={{ color: 'inherit !important' }}>
            <MenuItem sx={{ cursor: 'pointer' }}>
              <ListItemIcon>
                <InfoOutlined fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>
          </Link>

          <Link to="/change-password">
            <MenuItem sx={{ cursor: 'pointer' }}>
              <ListItemIcon>
                <LockOutlined fontSize="small" />
              </ListItemIcon>
              Change password
            </MenuItem>
          </Link>
          <Divider />

          <MenuItem sx={{ cursor: 'pointer' }} onClick={handleSignOut}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      )}

      {anchorElNotify && (
        <Menu
          anchorEl={anchorElNotify}
          id="account-notify"
          open={openNotify}
          onClose={handleCloseNotify}
          onClick={handleCloseNotify}
          PaperProps={{
            elevation: 0,
            sx: {
              maxHeight: '400px',
              overflowY: 'scroll',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
              '& .MuiList-root > a': {
                color: 'inherit !important',
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} disablePadding>
            <ListItem disablePadding alignItems="flex-start">
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt="Nguyen Van A" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Nguyen Van A - 324234324234"
                  secondary={
                    <Fragment>
                      <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                        Payment successfully
                      </Typography>
                      {' — He has been paid for your debt reminder set by you about 3.000.000'}
                    </Fragment>
                  }
                />
              </ListItemButton>
            </ListItem>
            <Divider variant="" component="li" />
            <ListItem disablePadding alignItems="flex-start">
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar alt="Nguyen Van B" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Nguyen Van B"
                  secondary={
                    <Fragment>
                      <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                        He set a debt reminder
                      </Typography>
                      {' — You have to pay a debt transactions about 5.000.000'}
                    </Fragment>
                  }
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Menu>
      )}
    </Box>
  );
};

export default TopBar;
