import { ArrowBackOutlined, SendOutlined } from '@mui/icons-material';
import { Alert, AlertTitle, Box, Button, Grid, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { tokens } from 'theme';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { ReadingConfig, parseNumberData, readNumber } from 'read-vietnamese-number';

const initialValues = {
  otp: '',
};
const otpRegExp = /^(\d{6})$/;
const checkoutSchema = yup.object().shape({
  otp: yup.string().matches(otpRegExp, 'OTP number is 6 digits').required('required'),
});
const TransactionForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const fromAccount = localStorage.getItem('from_account');
  const fromAccountName = localStorage.getItem('from_account_name');
  const toAccount = localStorage.getItem('account_number');
  const toAccountName = localStorage.getItem('account_name');
  const amount = localStorage.getItem('amount');
  const config = new ReadingConfig();
  config.unit = ['đồng'];
  const numberData = parseNumberData(config, amount);
  const amountText = readNumber(config, numberData);
  const fee = localStorage.getItem('fee');
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box width="84%" mx="auto">
      <Box display="flex" flexDirection="column">
        <Typography fontWeight={550} variant="h6" color={colors.greenAccent[500]}>
          Your information
        </Typography>
        <Box bgcolor={colors.primary[400]} color={colors.grey[100]} py={1} px={2} borderRadius={1}>
          <Grid container spacing={2} rowSpacing={0.25}>
            <Grid item xs={3}>
              <Typography textAlign="right" variant="h6">
                Account No:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">{fromAccount}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography textAlign="right" variant="h6">
                Account Name:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">{fromAccountName}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" my={1}>
        <Typography fontWeight={550} variant="h6" color={colors.greenAccent[500]}>
          Receiver Information
        </Typography>
        <Box bgcolor={colors.primary[400]} color={colors.grey[100]} py={1} px={2} borderRadius={1}>
          <Grid container spacing={2} rowSpacing={0.25}>
            <Grid item xs={3}>
              <Typography textAlign="right" variant="h6">
                Bank Name:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">Timo bank - Ngân hàng thương mại số </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography textAlign="right" variant="h6">
                Account No:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">{toAccount}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography textAlign="right" variant="h6">
                Receiver Name:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">{toAccountName}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" my={1}>
        <Typography variant="h6" fontWeight={550} color={colors.greenAccent[500]}>
          Transaction details
        </Typography>
        <Box bgcolor={colors.primary[400]} color={colors.grey[100]} py={1} px={2} borderRadius={1}>
          <Grid container spacing={2} rowSpacing={0.25}>
            <Grid item xs={3}>
              <Typography textAlign="right" variant="h6">
                Amount (number):
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">{amount} VNĐ</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography textAlign="right" variant="h6">
                Amount (text):
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">{amountText}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography textAlign="right" variant="h6">
                Fees:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">{fee} VNĐ</Typography>
            </Grid>

            <Grid item xs={3}>
              <Typography textAlign="right" variant="h6">
                Receiver Name:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">{fromAccountName}</Typography>
            </Grid>
            <Grid item xs={12} mx={6}>
              <Alert severity="info" sx={{ mt: 1 }}>
                <AlertTitle sx={{ fontWeight: 800 }} color={colors.blue[500]}>
                  Thông báo
                </AlertTitle>
                Quý khách hãy kiểm trả tài khoản Email để nhận vào nhập mã OTP vào ô bên dưới để xác nhận giao dịch.
              </Alert>
            </Grid>
            <Grid item xs={12}>
              <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <Box
                      mt="10px"
                      mx="auto"
                      width={`${isNonMobile ? '50%' : '90%'}`}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      gap={2}
                      sx={{ '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' } }}
                    ></Box>
                  </form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default TransactionForm;
