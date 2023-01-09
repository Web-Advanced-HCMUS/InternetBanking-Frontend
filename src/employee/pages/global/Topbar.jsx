import { Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, useTheme } from '@mui/material';
import { useContext, useState } from 'react';
import { ColorModeContext, tokens } from '../../../theme';
import { InputBase } from '@mui/material';
import { LightModeOutlined, DarkModeOutlined, PersonOutlined, Search, Logout, LockOutlined, InfoOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(!open);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" bgcolor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>

      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>{theme.palette.mode === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}</IconButton>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ cursor: 'pointer' }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <PersonOutlined />

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
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
            <Link to="/logout">
              <MenuItem sx={{ cursor: 'pointer' }}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Link>
          </Menu>
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
