import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, TextField, Typography, useTheme } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Toastify from 'components/Toastify';
import { useForgotPasswordMutation } from 'api/forgotPasswordApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setOTPForgot } from 'redux/slices/forgotSlice';
import { Link as RLink } from 'react-router-dom';
import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import useStylesLogin from 'containers/LoginForm/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { tokens, useMode } from 'theme';
import swal from 'sweetalert2';
import Countdown from 'react-countdown';

function OTPModal({ open, onClose }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStylesLogin();
  const username = useSelector((state) => state.forgot.username);
  const [forgotPassword, { isLoading, isError, isSuccess }] = useForgotPasswordMutation();
  const [msg, setMsg] = useState('');
  const [typePassword, settypePassword] = useState('password');
  const otpSchema = yup.object().shape({
    otp: yup.string().required('* Không được bỏ trống OTP!.'),
    newPass: yup.string().required('* Không được bỏ trống password!.'),
  });
  const handleSubmitOTP = async (values) => {
    try {
      const { otp, newPass } = values;
      //   const confirm = { username, otp, newPass };
      console.log({ username, otp, newPass });
      await forgotPassword({ username, otp, newPass }).unwrap();
      swal.fire({
        text: 'Đổi mật khẩu thành công, mời bạn đăng nhập lại',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      dispatch(setOTPForgot(otp));
    } catch (error) {
      if (!error.success) {
        setMsg(error.data.errors.message);
      } else {
        setMsg('Internal Server Error.');
      }
    }
  };
  const resendOTP = (event) => {
    event.preventDefault();
  };
  const handleShowHidePassword = () => {
    if (typePassword === 'password') {
      settypePassword('text');
    } else {
      settypePassword('password');
    }
  };

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
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        onClose();
        navigate('/login');
      }, 2000);
    }
  }, [isSuccess, navigate]);

  return (
    <>
      {isError && <Toastify message={msg} hidden={false} severity={'error'}></Toastify>}
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ backgroundColor: `${colors.primary[100]} !important` }}>
          <Typography component="h1" variant="h5" color="primary" align="center" marginBottom="5px" marginTop="20px">
            Nhập mã OTP và mật khẩu
          </Typography>
        </DialogTitle>

        <DialogContent sx={{ backgroundColor: `${colors.primary[100]} !important` }}>
          <DialogContentText>
            <Typography component="h2" align="left" textAlign="center" color="primary" marginBottom="20px">
              Vui lòng nhập OTP và mật khẩu mới tại đây !
            </Typography>
            <Typography component="h2" align="left" textAlign="center" color="primary" marginBottom="20px">
              Mã OTP sẽ hết hạn sau : &nbsp;&nbsp;
              <Countdown date={Date.now() + 600000} renderer={renderer} />
            </Typography>
          </DialogContentText>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Formik
              initialValues={{
                otp: '',
                newPass: '',
              }}
              validationSchema={otpSchema}
              onSubmit={handleSubmitOTP}
            >
              {({ values, errors, touched, handleBlur, handleSubmit, handleChange }) => (
                <Form className="col-sm-10 mx-auto" onSubmit={handleSubmit}>
                  <div>
                    <div style={{ marginTop: '20px' }}>
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
                    </div>
                    <div className="position-relative" style={{ marginTop: '20px' }}>
                      <TextField
                        error={errors.newPass && touched.newPass}
                        required
                        fullWidth
                        variant="filled"
                        label="New Password"
                        name="newPass"
                        color="primary"
                        type={typePassword}
                        value={values.newPass}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.newPass && touched.newPass && errors.newPass}
                        margin="normal"
                        sx={{
                          input: {
                            color: 'black',
                          },
                        }}
                      />
                      <IconButton onClick={handleShowHidePassword} style={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer' }}>
                        {typePassword === 'password' ? <VisibilityIcon sx={{ color: '#000000' }} /> : <VisibilityOffIcon sx={{ color: '#000000' }} />}
                      </IconButton>
                    </div>
                  </div>
                  <DialogActions>
                    <LoadingButton
                      type="submit"
                      loading={isLoading}
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ mt: 3, mb: 2 }}
                      onClick={handleSubmit}
                    >
                      Xác nhận
                    </LoadingButton>
                  </DialogActions>

                  <Box component="form" onSubmit={resendOTP} noValidate sx={{ mt: 1, width: '100%' }}>
                    <Typography variant="body" color="GrayText">
                      Không nhận được mã xác thực?
                    </Typography>
                    <Button type="submit" color="secondary" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                      Gửi lại mã
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: `${colors.primary[100]} !important` }}>
          <Button onClick={onClose}>Hủy</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default OTPModal;
