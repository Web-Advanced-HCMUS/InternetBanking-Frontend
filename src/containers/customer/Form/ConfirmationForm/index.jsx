import { ArrowBack, SendOutlined } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ConfirmationForm = ({ email, showModal, setShowModal }) => {
  return (
    <Box component="form" my={1} width="60%" mx="auto" sx={{ '& .MuiTextField-root': { m: 1 } }}>
      <Typography my={3} fontWeight={550} variant="h5">
        OTP Confirmation
      </Typography>
      <Box border={2} display={'flex'} flexDirection="column" p={3} bgcolor="#ffffff">
        <Typography>
          A
          <Typography mx={0.25} variant="subtitle1" component="span" fontWeight={600}>
            OTP
          </Typography>
          (One Time Passcode) has been to your mail:
          <Typography ml={1} variant="subtitle2" component="span" fontWeight={600}>
            huynhkha2601@gmail.com
          </Typography>
        </Typography>
        <Typography>Please enter the OTP below to confirm the payment. Thank you!</Typography>
        <Box display={'flex'} alignItems="center">
          <TextField variant="outlined" type="number" sx={{ '& .MuiOutlinedInput-root': { borderRadius: `0` } }} placeholder="######" size="small" />
          <Button sx={{ p: 1 }} variant="contained" endIcon={<SendOutlined />}>
            Confirm
          </Button>
        </Box>
        <Box display={'flex'} alignItems="center">
          <Typography>Have you receive a confirmation email?</Typography>
          <Typography ml={1} size="small" sx={{ color: '#1976d2', textTransform: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
            Resend OTP
          </Typography>
        </Box>
      </Box>
      <Box mt={0.5}>
        <Link style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setShowModal(!showModal)}>
          <ArrowBack fontSize="14" />
          <Typography ml={1}>Back</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default ConfirmationForm;
