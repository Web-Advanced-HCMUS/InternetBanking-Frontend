import { useState } from 'react';
import { Sidebar as ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Avatar, Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import {
  PortraitOutlined,
  EnhancedEncryptionOutlined,
  AccountBalanceWalletOutlined,
  CreditCardOutlined,
  CurrencyExchangeOutlined,
  AttachMoneyOutlined,
  ReceiptLongOutlined,
  ContactsOutlined,
  CompareArrowsSharp,
} from '@mui/icons-material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      routerLink={<Link to={to} />}
      rootStyles={{
        color: `${selected === title ? colors.grey[900] : colors.grey[100]}`,
        backgroundColor: `${selected === title ? colors.grey[100] : colors.primary[400]}`,
        'a:hover': {
          color: `${theme.palette.mode === 'dark' ? colors.grey[900] : colors.grey[100]} !important`,
          backgroundColor: `${theme.palette.mode === 'dark' ? colors.grey[100] : colors.grey[900]} !important`,
        },
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box
      position="fixed"
      height="100vh"
      top="0"
      left="0"
      bottom="0"
      sx={{
        overscrollBehaviorY: 'none',
        overflowY: `${!isCollapsed ? 'scroll' : 'hidden'}`,
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      <ProSidebar defaultCollapsed={isCollapsed}>
        <Menu
          rootStyles={{
            background: `${colors.primary[400]} !important`,
            paddingBottom: `${isCollapsed ? '20000px' : 0}`,
          }}
        >
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: `${!isCollapsed ? '0 0 20px 0' : '0'}` }}
            rootStyles={{
              'a:hover': {
                color: colors.grey[100],
                backgroundColor: `${colors.primary[500]}`,
              },
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h5">CUSTOMER</Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Avatar
                  alt="profile-user"
                  src={`data:image/png;base64,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`}
                  style={{
                    width: '100px',
                    height: '100px',
                    cursor: 'pointer',
                    borderRadius: '50%',
                  }}
                />
              </Box>
              <Box textAlign="center">
                {/* <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: '5px 0 0 0' }}>
                  Ed Roh
                </Typography> */}
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Customer
                </Typography>
              </Box>
            </Box>
          )}
          <Box>
            <Item title="Home Page" to="/home" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
              Account
            </Typography>
            <Item title="Profile" to="/profile" icon={<PortraitOutlined />} selected={selected} setSelected={setSelected} />
            <Item title="Change password" to="/change-password" icon={<EnhancedEncryptionOutlined />} selected={selected} setSelected={setSelected} />
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
              Cards
            </Typography>
            {/* <Item title="Banks Information" to="/banks-info" icon={<AccountBalanceWalletOutlined />} selected={selected} setSelected={setSelected} /> */}
            <Item title="Credits Management" to="/credits" icon={<CreditCardOutlined />} selected={selected} setSelected={setSelected} />

            <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
              Pages
            </Typography>
            <Item
              title="Internal Transfer"
              to="/transfer/internal"
              icon={<CurrencyExchangeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item title="External Money" to="/transfer/external" icon={<CompareArrowsSharp />} selected={selected} setSelected={setSelected} />
            <Item title="Receiver Management" to="/receiver" icon={<ContactsOutlined />} selected={selected} setSelected={setSelected} />
            <Item title="Debt Management" to="/debt" icon={<AttachMoneyOutlined />} selected={selected} setSelected={setSelected} />
            <Item title="Transactions" to="/transactions" icon={<ReceiptLongOutlined />} selected={selected} setSelected={setSelected} />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
