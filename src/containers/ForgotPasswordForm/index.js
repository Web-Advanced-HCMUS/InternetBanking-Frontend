import { Box, TextField, CssBaseline, Typography, Container, Link, ThemeProvider } from '@mui/material';
import Footer from 'layouts/HomeLayout/Footer';
import LoadingButton from '@mui/lab/LoadingButton';
import { Link as RLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSendEmailRecoveryMutation } from '../../api/forgotPasswordApi';
import Toastify from 'components/Toastify';
import { setUsernameForgot } from 'redux/slices/forgotSlice';
import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import useStylesLogin from 'containers/LoginForm/styles';
import OTPModal from 'components/OTPModal';
import { useMode, ColorModeContext } from 'theme';

function ForgotPasswordForm(props) {
  const [theme, colorMode] = useMode('light');
  const classes = useStylesLogin();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState('');
  const [otpDialogOpen, setOtpDialogOpen] = useState(false);
  const [sendEmailRecovery, { isLoading, isSuccess, isError }] = useSendEmailRecoveryMutation();

  const usernameSchema = yup.object().shape({
    username: yup.string().required('* Không được bỏ trống username!.'),
  });

  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    const { username } = values;
    try {
      await sendEmailRecovery(username).unwrap();
      dispatch(setUsernameForgot(username));
      // setOtpDialogOpen(true);
    } catch (err) {
      setErrMsg('');
      if (!err.success) {
        setErrMsg(err.data.errors.message);
      } else {
        setErrMsg('Lỗi hệ thống.');
      }
    }
  };
  const handleOtpDialogClose = (event, reason) => {
    if (reason && reason === 'backdropClick') return;
    setOtpDialogOpen(false);
  };

  useEffect(() => {
    if (isSuccess) {
      setOtpDialogOpen(true);
    }
  }, [isSuccess, navigate]);

  return (
    <>
      {(isError || errMsg.length !== 0) && <Toastify message={errMsg ? errMsg : 'Đã có lỗi!.'} hidden={false} severity="error"></Toastify>}
      <OTPModal open={otpDialogOpen} onClose={handleOtpDialogClose} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: 'fit-content',
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginBottom: 0,
              height: 'fit-content',
              paddingTop: '44px',
              paddingLeft: '32px',
              paddingRight: '32px',
            }}
          >
            <Typography component="h1" variant="h5" color="pri" align="center" marginBottom="20px">
              QUÊN MẬT KHẨU
            </Typography>
            <Typography component="h2" align="left" textAlign="center" color="#757575" marginBottom="20px">
              Hãy nhập username của bạn để chúng tôi gửi mail đặt lại mật khẩu.
            </Typography>
            <Formik
              initialValues={{
                username: '',
              }}
              validationSchema={usernameSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, handleChange }) => (
                <Form className="col-sm-10 mx-auto">
                  <div className="form-group position-relative">
                    <ErrorMessage name="username" render={(msg) => <small className="text-danger">{msg}</small>} />
                    <Field type="text" placeholder="Username" className="form-control" name="username" la onChange={handleChange} />
                  </div>
                  <LoadingButton type="submit" color="secondary" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }} loading={isLoading}>
                    Tiếp theo
                  </LoadingButton>
                  <Link
                    variant="body2"
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      color: '#30CD9A',
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline', color: '#30CD9A' },
                    }}
                    component={RLink}
                    to={'/login'}
                  >
                    Quay trở lại trang đăng nhập
                  </Link>
                </Form>
              )}
            </Formik>
          </Box>
        </Container>
        <div className={classes.footer}>
          <div style={{ display: 'inline-block' }} className={classes.fchild1}></div>
          <div style={{ display: 'inline-block' }} className={classes.fchild2}></div>
          <div style={{ display: 'inline-block' }} className={classes.fchild3}></div>
          <div style={{ display: 'inline-block' }} className={classes.fchild4}></div>
        </div>
      </Box>
    </>
  );
}

export default ForgotPasswordForm;
