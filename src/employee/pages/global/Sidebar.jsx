import { useState } from 'react';
import { Sidebar as ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Avatar, Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../../theme';
import {
  PersonAddOutlined,
  CurrencyExchangeOutlined,
  AttachMoneyOutlined,
  PaidOutlined,
  PortraitOutlined,
  EnhancedEncryptionOutlined,
  ReceiptLongOutlined,
  AddOutlined,
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
                <Typography variant="h5">EMPLOYEE</Typography>
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
                {/* <Typography variant="h5" color={colors.grey[100]} fontWeight="bold" sx={{ m: '5px 0 0 0' }}>
                  Ed Roh
                </Typography> */}
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Employee
                </Typography>
              </Box>
            </Box>
          )}

          <Box>
            <Item title="Board Management" to="/employee" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />

            <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
              Account
            </Typography>
            <Item title="Profile" to="/profile" icon={<PortraitOutlined />} selected={selected} setSelected={setSelected} />
            <Item title="Change password" to="/change-password" icon={<EnhancedEncryptionOutlined />} selected={selected} setSelected={setSelected} />

            <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
              {!isCollapsed ? 'Customers' : 'Pages'}
            </Typography>
            <Item title="Add Customers" to="/employee/customers/add" icon={<PersonAddOutlined />} selected={selected} setSelected={setSelected} />
            <Item title="Deposit" to="/employee/customers/deposit" icon={<AddOutlined />} selected={selected} setSelected={setSelected} />
            <Item
              title="Transactions"
              to="/employee/customers/transactions"
              icon={<ReceiptLongOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
              {!isCollapsed ? 'Transactions' : 'Trans'}
            </Typography>
            <Item title="Receive" to="/employee/transactions/receive" icon={<AttachMoneyOutlined />} selected={selected} setSelected={setSelected} />
            <Item
              title="Transfer"
              to="/employee/transactions/transfer"
              icon={<CurrencyExchangeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item title="Debt" to="/employee/transactions/debt" icon={<PaidOutlined />} selected={selected} setSelected={setSelected} />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
