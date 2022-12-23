import { Avatar, Box, Button, IconButton } from '@mui/material';
import TimoIcon from './TDB_website-logo-1-300x58.png';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useState } from 'react';

const pages = [
  'Tài khoản',
  'Thẻ',
  'Timo star Club',
  // 'Sản phẩm tài chính',
  // 'Tính năng thông minh',
  // 'Công cụ tính toán',
  // 'Tin tức',
  // 'Ưu đãi',
  'Về Timo',
];

const TopBar = () => {
  const [isLogin, setLogin] = useState(null);

  return (
    <Box display={'flex'} justifyContent="space-between" alignItems={'center'} p={2}>
      <Box
        flexGrow="0"
        component="img"
        src={TimoIcon}
        sx={{
          height: '2.25rem',
          width: '15rem',
        }}
        alt="Timo icon"
        mx={8}
      />
      <Box>
        {pages.map((page) => (
          <Button
            key={page}
            color="secondary"
            sx={{
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            {page}
          </Button>
        ))}

        <IconButton>
          <LanguageOutlinedIcon />
        </IconButton>
        {isLogin ? (
          <IconButton sx={{ height: 30, width: 30 }}>
            <Avatar src="" />
          </IconButton>
        ) : (
          <Button
            color="secondary"
            sx={{
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Đăng nhập
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default TopBar;
