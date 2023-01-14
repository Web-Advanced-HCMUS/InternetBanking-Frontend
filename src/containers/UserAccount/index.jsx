import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import BackpackIcon from '@mui/icons-material/Backpack';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Box, Button, Avatar, useTheme, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from 'theme';
import { CurrencyExchangeOutlined } from '@mui/icons-material';

function UserAccount() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const AccountInfor = {
    username: 'Ronaldo',
    avatarImage: 'https://icdn.dantri.com.vn/thumb_w/680/2022/12/05/16702399461500-1670244611370.jpg',
    backgroundImage: 'https://img.freepik.com/free-vector/purple-watercolor-abstract-background_52683-73545.jpg?w=2000',
  };

  const ButtonList = [
    { title: 'Internal Transfer', icon: CompareArrowsIcon, url: '/transfer/internal' },
    { title: 'External Transfer', icon: CurrencyExchangeOutlined, url: '/transfer/external' },
    { title: 'Debt Reminder', icon: BackpackIcon, url: '/debt' },
    { title: 'Debt Payment', icon: AssignmentIcon, url: '/home' },
  ];

  return (
    <Box color={'black'} display="flex" gap={1.25} flexDirection="column" alignItems="center" width="100%">
      <Box
        mb={1}
        gap={1}
        py={2}
        display={'flex'}
        alignItems="center"
        justifyContent={'center'}
        width="100%"
        sx={{ bgcolor: `${colors.primary[400]}` }}
      >
        <Box fontSize="1.25rem" fontWeight="400" color={colors.grey[100]}>
          Welcome to banking application,
        </Box>
        <Box fontSize="1.25rem" fontWeight="bold" color={colors.grey[100]}>
          {AccountInfor.username}
        </Box>
        <Avatar src={AccountInfor.avatarImage} alt="account-avatar" sx={{ width: 64, height: 64 }} />
      </Box>

      <Box display="flex" width="70%" justifyContent={'center'}>
        <Grid container spacing={6} rowSpacing={3}>
          {ButtonList.map((button) => (
            <Grid item xs={12} md={6}>
              <Button
                fullWidth
                sx={{
                  bgcolor: '#2c3e50',
                  boxShadow: '1px 2px #fff',
                  fontSize: '1.3rem',
                  color: `${colors.greenAccent[500]}`,
                  borderRadius: '5px',
                  gap: '0.75em',
                  py: 1.5,
                  '&:hover': {
                    bgcolor: `${colors.grey[100]}`,
                    color: `${colors.primary[400]}`,
                    boxShadow: '0 0.5em 0.5em -0.4em #fff',
                    transform: 'translateY(-0.15em)',
                    transition: '0.25s',
                    cursor: 'pointer',
                  },
                }}
                component={Link}
                to={button.url}
              >
                <button.icon />
                <Typography variant="h3" px={1} py={1}>
                  {button.title}
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* <Box display={'flex'} width="70%" gap={6} justifyContent={'center'}>
        {ButtonList2.map((button) => (
          <Button
            fullWidth
            sx={{
              bgcolor: '#2c3e50',
              boxShadow: '1px 2px #fff',
              fontSize: '1.3rem',
              color: `${colors.greenAccent[500]}`,
              borderRadius: '5px',
              gap: '0.75em',
              py: 1.5,
              '&:hover': {
                bgcolor: `${colors.grey[100]}`,
                color: `${colors.primary[400]}`,
                boxShadow: '0 0.5em 0.5em -0.4em #fff',
                transform: 'translateY(-0.15em)',
                transition: '0.25s',
                cursor: 'pointer',
              },
            }}
          >
            <button.icon />
            <Typography variant="h3" px={1} py={1}>
              {button.title}
            </Typography>
          </Button>
        ))}
      </Box> */}
    </Box>
  );
}

export default UserAccount;
