import { Box, Button, TextField } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const TopUp = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { userid, username } = state;
  const [amount, setAmount] = useState('');

  const handleBack = () => {
    navigate('/employee');
  };

  const handleAmount = (e) => setAmount(e.target.value);

  const onSubmit = () => {
    console.log(amount, userid);
  };

  return (
    <Box width={'60%'} margin="auto" marginTop={5}>
      <Box display="flex" justifyContent="flex-start">
        <ArrowBack
          sx={{
            cursor: 'pointer',
          }}
          onClick={handleBack}
        />
      </Box>

      <Box
        display={'flex'}
        flexDirection="column"
        alignItems={'center'}
        gap="0.5rem"
        color="#56408a"
        fontSize={'1.2rem'}
        fontWeight="500"
        marginBottom={3}
      >
        {/* <PaidIcon sx={{ fontSize: 35 }}></PaidIcon> */}
        <Box>NẠP TIỀN VÀO TÀI KHOẢN</Box>
      </Box>

      <TextField
        margin="normal"
        value={userid}
        required
        fullWidth
        name="userid"
        label="ID người dùng"
        InputProps={{
          readOnly: true,
        }}
      />

      <TextField
        margin="normal"
        value={username}
        required
        fullWidth
        name="name"
        label="Tên người dùng"
        InputProps={{
          readOnly: true,
        }}
      />

      <TextField
        margin="normal"
        type="number"
        value={amount}
        required
        fullWidth
        name="amountInput"
        label="Nhập số tiền"
        id="amountInput"
        autoComplete="amountInput"
        onChange={handleAmount}
        sx={{
          '& input[type=number]': {
            '-moz-appearance': 'textfield',
          },
          '& input[type=number]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
          '& input[type=number]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
        }}
      />

      <Button
        type="submit"
        fullWidth
        color="secondary"
        variant="contained"
        sx={{
          bgcolor: '#56408a',
          color: 'white',
          marginTop: '1rem',
          paddingY: '0.7rem',
          fontWeight: '600',
        }}
        onClick={onSubmit}
      >
        Top Up
      </Button>
    </Box>
  );
};

export default TopUp;
