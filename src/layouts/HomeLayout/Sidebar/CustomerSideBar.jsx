import { Box } from '@mui/material';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {
  CreditCard,
  EditOutlined,
  HistoryOutlined,
  HomeOutlined,
  Security,
  Subject,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const pages = [
  {
    title: 'Trang chủ',
    icon: <HomeOutlined />,
    url: '/home',
    active: false,
  },
  {
    title: 'Thông tin tài khoản',
    icon: <Subject />,
    url: '/bank-details',
    active: false,
  },
  {
    title: 'Quản lý thẻ',
    icon: <CreditCard />,
    url: '/card-management',
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
  {
    title: 'Lịch sử giao dịch',
    icon: <HistoryOutlined />,
    sub_links: [
      { title: 'Nhận tiền', url: '/history/receive' },
      { title: 'Chuyển khoản', url: '/history/transfer' },
      { title: 'Nhắc nợ', url: '/history/debt' },
    ],
  },
];

const CustomerSideBar = ({ collapse }) => {
  return (
    <Box
      display="flex"
      position={'fixed'}
      top={0}
      left={0}
      height="100%"
      zIndex={999}
      pt="71px"
    >
      <Sidebar
        backgroundColor="#ffffff"
        collapsedWidth="57.5px"
        defaultCollapsed={collapse}
      >
        <Menu
          menuItemStyles={{
            button: { textDecoration: 'none !important', ':hover': { color: 'inherit' } },
          }}
        >
          {pages.map((page, idx) =>
            page.sub_links ? (
              <SubMenu
                label={page.title}
                style={{ paddingLeft: '10px', paddingRight: '10px', fontWeight: 550 }}
                icon={page.icon}
              >
                {page.sub_links.map((link, idx) => (
                  <MenuItem
                    key={idx}
                    // active={page.active}
                    routerLink={<Link to={link.url} />}
                  >
                    {link.title}
                  </MenuItem>
                ))}
              </SubMenu>
            ) : (
              <MenuItem
                key={idx}
                style={{ paddingLeft: '10px', paddingRight: '10px', fontWeight: 550 }}
                icon={page.icon}
                active={page.active}
                routerLink={<Link to={page.url} />}
              >
                {page.title}
              </MenuItem>
            ),
          )}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default CustomerSideBar;
