import {
  Avatar,
  Box,
  Button,
  Container,
  Icon,
  IconButton,
  Typography,
} from '@mui/material';
import TimoIcon from '../LoginForm/Logo-timo-V.png';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useState } from 'react';

const pages = [
  'Tài khoản',
  'Thẻ',
  'Timo star Club',
  'Sản phẩm tài chính',
  'Tính năng thông minh',
  'Công cụ tính toán',
  'Tin tức',
  'Ưu đãi',
  'Về Timo',
];

const TopBar = () => {
  const [isLogin, setLogin] = useState(null);

  return (
    <Box
      display={'flex'}
      justifyContent="space-between"
      alignItems={'center'}
      p={2}
    >
      <Box
        flexGrow="0"
        component="img"
        src={TimoIcon}
        sx={{
          height: '2.25rem',
          width: '9.5rem',
        }}
        alt="Timo icon"
      />
      <Box>
        {pages.map((page) => (
          <Button key={page}>{page}</Button>
        ))}

        <IconButton>
          <LanguageOutlinedIcon />
        </IconButton>
        {isLogin ? (
          <IconButton sx={{ height: 30, width: 30 }}>
            <Avatar src="" />
          </IconButton>
        ) : (
          <Button>Đăng nhập</Button>
        )}
      </Box>
    </Box>
  );
};

export default TopBar;
