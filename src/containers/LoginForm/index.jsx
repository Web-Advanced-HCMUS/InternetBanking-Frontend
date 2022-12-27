import {
  Box,
  TextField,
  CssBaseline,
  Typography,
  Container,
  Link,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Link as RouterLink } from 'react-router-dom';
import {
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useLoginMutation } from 'api/authApi';
import Toastify from 'components/Toastify';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import logoTimo from '../LoginForm/Logo-timo-V.png';

const useStyles = makeStyles((theme) => ({
  //   captcha: {
  //     marginTop: 10,
  //     marginLeft: '12%',
  //   },

  eye: {
    position: 'absolute',
    top: 32,
    right: 9,
    cursor: 'pointer',
    color: '#000',
  },
  logoTimo: {
    width: '50%',
    marginBottom: '13px',
    cursor: 'pointer',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

function LoginForm(props) {
  const classes = useStyles();
  const [login, { isLoading }] = useLoginMutation();
  const { isLogged } = useSelector((state) => state.auth);
  const { loggedInUser } = useSelector(
    (state) => state.auth,
  );
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const [typePassword, settypePassword] =
    useState('password');

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
      {!isLogged && error.length !== 0 ? (
        <Toastify
          message={error}
          hidden={isLogged}
          severity="error"
        ></Toastify>
      ) : (
        <Toastify
          message="Đăng nhập thành công"
          hidden={isLogged}
          severity="success"
        ></Toastify>
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginBottom: '30px',
          height: 'fit-content',
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Link href="/" underline="hover">
              <img
                src={logoTimo}
                alt="logoTimo"
                className={classes.logoTimo}
              />
            </Link>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Tên đăng nhập"
                name="username"
                autoComplete="username"
                autoFocus
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
                  id="password"
                  autoComplete="password"
                  value={password}
                  onChange={handlePassword}
                />
                <div
                  className={classes.eye}
                  onClick={handleShowHidePassword}
                >
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
                component={RouterLink}
                to={'/forgot-password'}
              >
                Quên mật khẩu?
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default LoginForm;