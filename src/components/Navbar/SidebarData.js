import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SettingsIcon from '@mui/icons-material/Settings';
export const SidebarData = [
  {
    title: 'Trang chủ',
    path: '/',
    icon: <HomeIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Lịch sử giao dịch',
    path: '/chargehistory',
    icon: <HistoryIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Thông tin thêm',
    path: '/moreinfor',
    icon: <MoreHorizIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Cài đặt tài khoản',
    path: '/settingaccount',
    icon: <SettingsIcon />,
    cName: 'nav-text'
  },
];