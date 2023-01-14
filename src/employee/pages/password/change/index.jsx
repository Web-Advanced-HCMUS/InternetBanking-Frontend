import { Button, Box, TextField, CssBaseline, Typography, Container } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useChangePasswordMutation } from 'api/accountApi';
import Toastify from 'components/Toastify';

function ChangePasswordPage(props) {
  const [changePassword, { isLoading, isSuccess }] = useChangePasswordMutation();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [msg, setMsg] = useState('');

  const navigate = useNavigate();

  const handleCurrentPasswordInput = (event) => {
    setCurrentPassword(event.target.value);
  };
  const handleNewPasswordInput = (event) => {
    setNewPassword(event.target.value);
  };

  const canSubmit = currentPassword && newPassword;

  const resetStates = () => {
    setCurrentPassword('');
    setNewPassword('');
    setMsg('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await changePassword({ oldPass: currentPassword, newPass: newPassword })
        .unwrap()
        .then((data) => {
          console.log(data);
          resetStates();
          setMsg('Đổi mật khẩu thành công.');
        })
        .catch((error) => console.log(error));
    } catch (err) {
      console.log(err);
      resetStates();
      // if (!err?.status) {
      //   setMsg('Lỗi máy chủ.');
      // } else if (err?.status) {
      //   setMsg(err.error.message);
      // } else {
      //   setMsg('Không thể thay đổi mật khẩu hiện tại.');
      // }
    }
  };

  const handleBackButton = (event) => {
    navigate(-1);
  };
  return (
    <>
      {msg.length !== 0 && <Toastify message={msg} hidden={false} severity={isSuccess ? 'success' : 'error'}></Toastify>}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100vh',
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
            <Typography component="h1" variant="h4">
              Thay đổi mật khẩu
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
              <TextField
                margin="normal"
                variant="filled"
                required
                fullWidth
                name="current-password"
                label="Mật khẩu hiện tại"
                type="password"
                id="current-password"
                autoComplete="current-password"
                autoFocus
                value={currentPassword}
                onChange={handleCurrentPasswordInput}
              />
              <TextField
                margin="normal"
                variant="filled"
                required
                fullWidth
                name="new-password"
                label="Mật khẩu mới"
                type="password"
                id="new-password"
                autoComplete="new-password"
                value={newPassword}
                onChange={handleNewPasswordInput}
              />

              <LoadingButton type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} loading={isLoading} disabled={!canSubmit}>
                Thay đổi
              </LoadingButton>
            </Box>
            <Button fullWidth variant="contained" color="secondary" sx={{ mt: 3, mb: 2 }} onClick={handleBackButton}>
              Trở về
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ChangePasswordPage;
