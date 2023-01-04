import { useState } from 'react';
import { Sidebar as ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Avatar, Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from 'admin/theme';
import {
  HomeOutlined,
  PeopleOutline,
  AccountBalanceOutlined,
  ReceiptLongOutlined,
  AnalyticsOutlined,
  PersonAddOutlined,
  AddBusinessOutlined,
} from '@mui/icons-material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

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

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box
      position="sticky"
      height="100vh"
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
            // paddingBottom: `${isCollapsed ? '145px' : 0}`,
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
                <Typography variant="h3">ADMIN</Typography>
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
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box>
            <Item
              title="Dashboard"
              to="/admin"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '10px 0 5px 15px' }}
            >
              Data
            </Typography>
            <Item
              title="Manage Employees"
              to="/admin/employees"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Banks Information"
              to="/admin/banks"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/admin/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Pages
            </Typography>
            <Item
              title="Add Employee"
              to="/admin/employees/add"
              icon={<PersonAddOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Link A Bank"
              to="/admin/banks/add"
              icon={<AddBusinessOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/admin/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/admin/analyst/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/admin/analyst/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/admin/analyst/line"
              icon={<TimelineOutlinedIcon />}
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
