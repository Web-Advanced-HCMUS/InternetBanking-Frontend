import { Card, CardHeader, CardContent, Typography, Box, useTheme, Grid } from '@mui/material';
import { tokens } from 'theme';

const currencyFormatter = (currency) =>
  new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(currency);
function CardItem({ accountOwnerName, accountNumber, accountBalance }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box bgcolor={colors.primary[500]} border={2} boxShadow="1px 2px 2px 1px" color={colors.grey[200]} pt={2} pb={1} px={4} borderRadius={5}>
        <Typography variant="h5" textAlign="center" fontWeight="bold">
          Owner name: {accountOwnerName}
        </Typography>

        <Typography variant="h5" textAlign="center" fontWeight="bold">
          Account No: {accountNumber}
        </Typography>

        <Typography variant="h5" textAlign="center" fontWeight="bold">
          Current Balance: {currencyFormatter(accountBalance)}
        </Typography>
      </Box>
    </>
  );
}

export default CardItem;
