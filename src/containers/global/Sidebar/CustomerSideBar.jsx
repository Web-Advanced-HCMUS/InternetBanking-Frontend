import { Box } from '@mui/material';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { CreditCard, EditOutlined, Security, Subject } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const pages = [
  {
    title: 'Thông tin tài khoản',
    icon: <Subject />,
    url: '/bank-',
    active: true,
  },
  {
    title: 'Quản lý thẻ',
    icon: <CreditCard />,
    url: '/debit-management',
  },
  {
    title: 'Thay đổi thông tin',
    icon: <EditOutlined />,
    url: '/profile',
  },
  {
    title: 'Bảo mật',
    icon: <Security />,
    url: '/security',
  },
];

const CustomerSideBar = () => {
  return (
    <Box display={'flex'} height="100%" position={'fixed'}>
      <Sidebar backgroundColor="#ffffff" collapsedWidth="57.5px">
        <Menu
          menuItemStyles={{
            button: { textDecoration: 'none !important', ':hover': { color: 'inherit' } },
          }}
        >
          {pages.map((page) => (
            <MenuItem
              key={page}
              style={{ paddingLeft: '10px', paddingRight: '10px', fontWeight: 550 }}
              icon={page.icon}
              active={page.active}
              routerLink={<Link to={page.url} />}
            >
              {page.title}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default CustomerSideBar;
