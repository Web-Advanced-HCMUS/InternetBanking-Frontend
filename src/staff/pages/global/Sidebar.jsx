import { useState } from 'react';
import { Sidebar as ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Avatar, Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from 'admin/theme';
import {
  PersonAddOutlined,
  AddBusinessOutlined,
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
          color: `${
            theme.palette.mode === 'dark' ? colors.grey[900] : colors.grey[100]
          } !important`,
          backgroundColor: `${
            theme.palette.mode === 'dark' ? colors.grey[100] : colors.grey[900]
          } !important`,
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
                <Typography variant="h3">EMPLOYEE</Typography>
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
                  src={`https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.6435-9/128593097_1610640605804597_4251439377185921285_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ieNh9lCrWKQAX_RK60N&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfD_Nr1rLczU7fLIj00zTqb7nlMB1SNUZHSwpUbMslT70g&oe=63DB6355`}
                  style={{
                    width: '100px',
                    height: '100px',
                    cursor: 'pointer',
                    borderRadius: '50%',
                  }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: '5px 0 0 0' }}
                >
                  Ed Roh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Employee
                </Typography>
              </Box>
            </Box>
          )}

          <Box>
            <Item
              title="Board Management"
              to="/employee"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Account
            </Typography>
            <Item
              title="Profile"
              to="/profile"
              icon={<PortraitOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Change password"
              to="/change-password"
              icon={<EnhancedEncryptionOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              {!isCollapsed ? 'Customers' : 'Pages'}
            </Typography>
            <Item
              title="Add Customers"
              to="/employee/customers/add"
              icon={<PersonAddOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Deposit"
              to="/employee/customers/deposit"
              icon={<AddOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Transactions"
              to="/employee/customers/transactions"
              icon={<ReceiptLongOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              {!isCollapsed ? 'Transactions' : 'Trans'}
            </Typography>
            <Item
              title="Receive"
              to="/employee/transactions/receive"
              icon={<AttachMoneyOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Transfer"
              to="/employee/transactions/transfer"
              icon={<CurrencyExchangeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Debt"
              to="/employee/transactions/debt"
              icon={<PaidOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
