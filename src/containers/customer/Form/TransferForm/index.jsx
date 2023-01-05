import { SendOutlined } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from '@mui/material';
import BankSelection from 'containers/customer/BankSelection';

const TransferForm = ({ isExt, sender, setShowModal, showModal }) => {
  return (
    <Box
      height={'100%'}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography mt={2} textAlign={'center'} variant="h5">
        Chuyển đến
      </Typography>
      <Box
        component="form"
        my={1}
        width="45%"
        mx="auto"
        sx={{ '& .MuiTextField-root': { m: 1 } }}
      >
        {isExt && (
          <Box display={'flex'} flexDirection="column" mx={1}>
            <BankSelection />
          </Box>
        )}
        <Box display={'flex'} flexDirection="column">
          <TextField id="account_no" label="Số tài khoản" variant="standard" />
          {sender.name && <Typography mx={1}>{sender.name}</Typography>}
        </Box>
        <Box display={'flex'} flexDirection="column">
          <TextField id="amount" label="Số tiền (đ)" variant="standard" />
        </Box>
        <Box display={'flex'} flexDirection="column">
          <TextField
            id="content"
            label="Nội dung (không dấu và không bắt buộc)"
            multiline
            rows={4}
            defaultValue="Chuyển tiền"
            variant="standard"
          />
        </Box>
        <Box display="flex" flexDirection={'column'} mx={1}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Lưu thụ hưởng"
            />
          </FormGroup>
        </Box>
        <Box display={'flex'} mx={1}>
          <Button
            variant="contained"
            size="large"
            endIcon={<SendOutlined />}
            onClick={() => setShowModal(!showModal)}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TransferForm;
