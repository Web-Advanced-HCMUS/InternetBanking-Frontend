import { useState } from 'react';
import { Sidebar as ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Avatar, Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from 'theme';
import { PersonAddOutlined, AddBusinessOutlined, PortraitOutlined, EnhancedEncryptionOutlined } from '@mui/icons-material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
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
                <Typography variant="h5">ADMIN</Typography>
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
                  Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box>
            <Item title="Dashboard" to="/admin" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
              Account
            </Typography>
            <Item title="Profile" to="/profile" icon={<PortraitOutlined />} selected={selected} setSelected={setSelected} />
            <Item title="Change password" to="/change-password" icon={<EnhancedEncryptionOutlined />} selected={selected} setSelected={setSelected} />
            <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
              Data
            </Typography>
            <Item title="Manage Employees" to="/admin/employees" icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Banks Information" to="/admin/banks" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Invoices Balances" to="/admin/invoices" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />

            <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
              Pages
            </Typography>
            <Item title="Add Employee" to="/admin/employees/add" icon={<PersonAddOutlined />} selected={selected} setSelected={setSelected} />
            <Item title="Link A Bank" to="/admin/banks/add" icon={<AddBusinessOutlined />} selected={selected} setSelected={setSelected} />
            <Item title="FAQ Page" to="/admin/faq" icon={<HelpOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />

            <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
              Charts
            </Typography>
            <Item title="Bar Chart" to="/admin/analyst/bar" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Pie Chart" to="/admin/analyst/pie" icon={<PieChartOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Line Chart" to="/admin/analyst/line" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
