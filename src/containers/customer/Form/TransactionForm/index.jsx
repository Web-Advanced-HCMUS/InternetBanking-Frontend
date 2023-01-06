import { ArrowBackOutlined, SendOutlined } from '@mui/icons-material';
import { Alert, AlertTitle, Box, Button, Grid, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { tokens } from 'theme';
import * as yup from 'yup';
import { Formik } from 'formik';

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
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box width="54%" mx="auto">
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
              <Typography variant="h6">1855-3253-2535-2332</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography textAlign="right" variant="h6">
                Balance:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">13,550,350,000 VNĐ</Typography>
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
              <Typography variant="h6">SCB - Ngân hàng thương mại cổ phần Sài Gòn Thương Tín</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography textAlign="right" variant="h6">
                Account No:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">1855-3253-2535-2332</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography textAlign="right" variant="h6">
                Receiver Name:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">Nguyễn Văn A</Typography>
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
              <Typography variant="h6">180,000,000 VNĐ</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography textAlign="right" variant="h6">
                Amount (text):
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">Một trăm tám mươi triệu đồng</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography textAlign="right" variant="h6">
                Fees:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">3,300 VNĐ</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography textAlign="right" variant="h6">
                Transaction Code:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">343043024343240</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography textAlign="right" variant="h6">
                Receiver Name:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h6">Nguyễn Văn A</Typography>
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
                    >
                      <Typography textAlign="right" fontWeight={550} color={colors.grey[100]}>
                        Nhập mã OTP
                      </Typography>
                      <TextField
                        variant="standard"
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.otp}
                        name="otp"
                        error={!!touched.otp && !!errors.otp}
                        helperText={touched.otp && errors.otp}
                        sx={{ gridColumn: 'span 4' }}
                      />
                    </Box>
                    <Box mx="auto" width={`${isNonMobile ? '53%' : '82%'}`} display="flex" justifyContent="center">
                      <Box flexGrow={1} my={2} display="flex" justifyContent="space-around" gap={2}>
                        <Button sx={{ py: 1, px: 2, bgcolor: `${colors.red[800]}` }} variant="contained" startIcon={<ArrowBackOutlined />}>
                          Quay lại
                        </Button>
                        <Button sx={{ py: 1, px: 3, bgcolor: `${colors.greenAccent[800]}` }} variant="contained" endIcon={<SendOutlined />}>
                          Xác nhận giao dịch
                        </Button>
                      </Box>
                    </Box>
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
