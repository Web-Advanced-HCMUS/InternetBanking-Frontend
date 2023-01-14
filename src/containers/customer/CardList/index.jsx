import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAccountList } from 'redux/slices/accountSlice';
import { tokens } from 'theme';
import CardItem from '../CardItem';

const CardList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const listAccount = useSelector((state) => state.account.list.payload);
  const paymentAccount = useSelector((state) => state.account.payment.payload);
  console.log(paymentAccount);
  return (
    <Box>
      <Box bgcolor={colors.primary[400]} py={2} display="flex" flexDirection="column" alignItems="center" gap={1.5}>
        {!listAccount && <Typography variant="body1">Hiện giờ bạn không có tài khoản thanh toán hay tiết kiệm nào.</Typography>}
        <Typography variant="h3" color={colors.greenAccent[500]} fontWeight="bold">
          Tài khoản thanh toán
        </Typography>
        <Box width="50%" px={3}>
          {paymentAccount && (
            <CardItem
              accountOwnerName={paymentAccount.accountOwnerName}
              accountNumber={paymentAccount.accountNumber}
              accountBalance={paymentAccount.currentBalance}
            ></CardItem>
          )}
        </Box>
      </Box>

      <Box width="50%" height="100%" mx="auto" p={3} display="flex" flexDirection="column" alignItems="center" gap={3}>
        <Typography variant="h3" color={colors.greenAccent[500]} fontWeight="bold">
          Tất cả tài khoản của bạn
        </Typography>

        {listAccount?.map((account) => (
          <CardItem
            accountOwnerName={account.accountOwnerName}
            accountNumber={account.accountNumber}
            accountBalance={account.currentBalance}
          ></CardItem>
        ))}
      </Box>
    </Box>
  );
};

export default CardList;
