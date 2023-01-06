import {
  Box,
  TextField,
  CssBaseline,
  Typography,
  Container,
  Link,
  FormControlLabel,
  Checkbox,
  Grid,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Link as RLink } from 'react-router-dom';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useLoginMutation } from 'api/authApi';
import Toastify from 'components/Toastify';
import { useDispatch, useSelector } from 'react-redux';
import useStylesLogin from './styles';
import logoTimo from '../LoginForm/Logo-timo-V.png';
import { styled } from '@mui/material/styles';
import { display } from '@mui/system';

function LoginForm(props) {
  const classes = useStylesLogin();
  const [login, { isLoading }] = useLoginMutation();
  const { isLogged } = useSelector((state) => state.auth);
  const { loggedInUser } = useSelector((state) => state.auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const [typePassword, settypePassword] = useState('password');

  const navigate = useNavigate();
  const location = useLocation();

  const captchaRef = useRef(null);

  const canSubmit = username && password && checked;

  useEffect(() => {
    if (isLogged) {
      navigate('/');
    }
  }, [isLogged]);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleReCaptcha = () => {
    setChecked(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const reCaptchaToken = captchaRef.current?.getValue();

    try {
      const body = { username, password };
      await login(body)
        .unwrap()
        .then((data) => console.log({ data }))
        .catch((error) => console.log(error));
    } catch (err) {
      setUsername('');
      setPassword('');
      setError('');
      setChecked(false);
      captchaRef.current.reset();
      if (!err?.status) {
        setError('Interval Server Error');
      } else {
        setError('Failed Authentication');
      }
    }
  };

  const handleShowHidePassword = () => {
    if (typePassword === 'password') {
      settypePassword('text');
    } else {
      settypePassword('password');
    }
  };
  return (
    <>
      {!isLogged && error.length !== 0 && (
        <Toastify message={error} hidden={isLogged} severity="error"></Toastify>
      )}

      <div>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginBottom: 0,
            height: 'fit-content',
          }}
        >
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Link href="/" underline="hover">
                <img src={logoTimo} alt="logoTimo" className={classes.logoTimo} />
              </Link>

              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Tên đăng nhập"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  color="primary"
                  variant="outlined"
                  value={username}
                  onChange={handleUsername}
                />
                <div className="form-group position-relative">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Mật khẩu"
                    type={typePassword}
                    color="primary"
                    variant="outlined"
                    id="password"
                    autoComplete="password"
                    value={password}
                    onChange={handlePassword}
                  />
                  <div className={classes.eye} onClick={handleShowHidePassword}>
                    {typePassword === 'password' ? (
                      <i className="fa fa-eye-slash"></i>
                    ) : (
                      <i className="fa fa-eye"></i>
                    )}
                  </div>
                </div>

                <div className={classes.captcha}>
                  <ReCAPTCHA
                    sitekey="6LfJ04QjAAAAAE6C34ISGnVr6y16H5qkjKxDrIqz"
                    onChange={handleReCaptcha}
                    ref={captchaRef}
                  />
                </div>

                <LoadingButton
                  type="submit"
                  fullWidth
                  color="secondary"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  loading={isLoading}
                  disabled={!canSubmit}
                >
                  Đăng nhập
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
                  to={'/forgot-pass'}
                >
                  Quên mật khẩu?
                </Link>
              </Box>
            </Box>
          </Container>
          <div className={classes.footer}>
            <div style={{ display: 'inline-block' }} className={classes.fchild1}></div>
            <div style={{ display: 'inline-block' }} className={classes.fchild2}></div>
            <div style={{ display: 'inline-block' }} className={classes.fchild3}></div>
            <div style={{ display: 'inline-block' }} className={classes.fchild4}></div>
          </div>
        </Box>
      </div>
    </>
  );
}

export default LoginForm;
