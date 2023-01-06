import { AddOutlined } from '@mui/icons-material';
import { Box, Button, Divider, Grid, IconButton, Typography, useTheme } from '@mui/material';
import DebtBox from 'components/DebtBox';
import Header from 'components/Header';
import DebtPage from 'containers/DebtReminder';
import { tokens } from 'theme';
import DebtList from 'containers/DebtReminder/DebtList';
import OwnDebt from 'containers/DebtReminder/OwnDebt';

const debtList = [
  {
    bankID: '89119021012',
    bankName: 'Toan Minh Phan',
    amount: '200,000',
    descript: 'Trả tiền trước 15/1',
  },
  {
    bankID: '939103010030',
    bankName: 'Kha Huynh',
    amount: '500,000',
    descript: 'Đi trả tiền đi',
  },
];
const CustomerHome = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DEBT MANAGEMENT" subtitle="Manage debt transactions and create a debt" />

        <Button
          sx={{
            backgroundColor: colors.red[700],
            color: colors.greenAccent[300],
            fontSize: '14px',
            fontWeight: 'bold',
            padding: '10px 20px',
            ':hover': {
              backgroundColor: colors.primary[400],
              color: colors.grey[100],
            },
          }}
        >
          <AddOutlined sx={{ mr: '10px' }} />
          Add Debt
        </Button>
      </Box>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4}>
          <Box backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
            <DebtBox colors={colors} title="MY BALANCE" amount="30.000" />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
            <DebtBox colors={colors} title="TOTAL RECEIVE" amount="10.000.000" />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
            <DebtBox colors={colors} title="TOTAL PAYMENT" amount="30.000.000.000" />
          </Box>
        </Grid>
      </Grid>
      {/* <DebtPage /> */}

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box
            display={'flex'}
            flexDirection="column"
            bgcolor={colors.primary[400]}
            color={colors.grey[100]}
            boxShadow="0px 0px 5px #C3C3C3"
            my="1.5rem"
            mx="3.5rem"
          >
            <Box fontWeight={'600'} fontSize="1.2rem" color={colors.greenAccent[500]} my={1} mx={2}>
              Your Debt
            </Box>
            <Divider />
            <Box display={'flex'} flexDirection="column" p="1rem" gap={'10px'} maxHeight="325px" sx={{ overflowY: 'scroll' }}>
              {debtList.length === 0 ? <Box>Bạn chưa có nhắc nợ ai</Box> : debtList.map((debt, index) => <OwnDebt key={index} debt={debt} />)}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            display={'flex'}
            flexDirection="column"
            bgcolor={colors.primary[400]}
            color={colors.grey[100]}
            boxShadow="0px 0px 5px #C3C3C3"
            my="1.5rem"
            mx="3.5rem"
          >
            <Box fontWeight={'600'} fontSize="1.2rem" color={colors.greenAccent[500]} my={1} mx={2}>
              Debt Paid
            </Box>
            <Divider />
            <Box display={'flex'} flexDirection="column" p="1rem" gap={'10px'} maxHeight="325px" sx={{ overflowY: 'scroll' }}>
              {debtList.length === 0 ? <Box>Bạn chưa có nhắc nợ ai</Box> : debtList.map((debt, index) => <DebtList key={index} debt={debt} />)}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerHome;
