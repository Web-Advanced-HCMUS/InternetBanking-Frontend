import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Toastify from 'components/Toastify';
import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import swal from 'sweetalert2';
import Countdown from 'react-countdown';
import { useInternalTransferMutation } from 'api/transactionApi';
import config from 'config/config';
import TransactionForm from 'containers/customer/Form/TransactionForm';

function OTPConfirm({ open, onClose }) {
  const { userId } = useSelector((state) => state.auth.loggedInUser);
  const [msg, setMsg] = useState('');
  const toAccountNumber = localStorage.getItem('account_number');
  const [isSuccess, setIsSuccess] = useState('false');
  const [isError, setIsError] = useState('false');
  const [internalTransfer, { isLoading }] = useInternalTransferMutation();
  const otpSchema = yup.object().shape({
    otp: yup.string().required('* Không được bỏ trống OTP!.'),
  });
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return (
        <Typography component="h2" align="left" textAlign="center" color="primary" marginBottom="20px">
          Mã OTP của bạn đã hết hạn !
        </Typography>
      );
    } else {
      // Render a countdown
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };

  const handleSubmit = async (values) => {
    const { otp } = values;
    const content = localStorage.getItem('content');
    const fromAccountNumber = localStorage.getItem('from-account');

    const amount = localStorage.getItem('amount');
    const method = localStorage.getItem('method');
    const fee = 2000;
    console.log(config.FEE_PAYMENT_METHOD[method][1]);
    try {
      const body = {
        userId,
        otp,
        feePaymentMethod: `${config.FEE_PAYMENT_METHOD[method][1]}`,
        fromAccountNumber,
        toAccountNumber,
        amount,
        fee,
        content,
      };
      await internalTransfer(body)
        .unwrap()
        .then((data) => {
          console.log(data);
          if (data.success) {
            setIsSuccess(true);
            setIsError(false);
            swal.fire({
              text: `Bạn đã chuyển tiền thành công vào tài khoản ${toAccountNumber}`,
              icon: 'success',
              confirmButtonText: 'OK',
            });
          }
          if (!data.success) {
            setIsSuccess(false);
            setIsError(true);
            setMsg('OTP của bạn không đúng!');
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess]);

  return (
    <>
      {isError && <Toastify message={msg} hidden={false} severity="error"></Toastify>}

      <Formik
        initialValues={{
          otp: '',
        }}
        validationSchema={otpSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleBlur, handleSubmit, handleChange }) => (
          <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>
              <Typography component="h1" variant="h5" align="center" marginBottom="5px" marginTop="20px">
                Nhập mã OTP
              </Typography>
              <Typography component="h2" align="left" textAlign="center" marginBottom="10px">
                Mã OTP sẽ hết hạn sau : &nbsp;&nbsp;
                <Countdown date={Date.now() + 600000} renderer={renderer} />
              </Typography>
            </DialogTitle>
            <DialogContent>
              <TransactionForm />
              <DialogContentText>
                <Typography component="h2" align="left" textAlign="center" marginBottom="20px">
                  Vui lòng nhập OTP vừa được gửi vào mail của bạn!
                </Typography>
              </DialogContentText>
              <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                <TextField
                  error={errors.otp && touched.otp}
                  required
                  fullWidth
                  type="text"
                  label="OTP"
                  name="otp"
                  variant="filled"
                  color="primary"
                  sx={{
                    input: {
                      color: 'black',
                    },
                  }}
                  value={values.otp}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.otp && touched.otp && errors.otp}
                  margin="normal"
                />
              </Box>
              <LoadingButton
                type="submit"
                loading={isLoading}
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3, mb: 1 }}
              >
                OK
              </LoadingButton>
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose}>Hủy</Button>
            </DialogActions>
          </Dialog>
        )}
      </Formik>
    </>
  );
}

export default OTPConfirm;
