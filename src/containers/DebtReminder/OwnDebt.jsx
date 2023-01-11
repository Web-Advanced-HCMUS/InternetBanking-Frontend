import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { tokens } from 'theme';
import Toastify from 'components/Toastify';

import { useCancelDebtMutation } from 'api/debtApi';

const OwnDebt = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [cancelDebt] = useCancelDebtMutation();

  const [openModal, setOpenModal] = useState(false);
  const [reason, setReason] = useState('');
  const [cancelStatus, setCancelStatus] = useState({ message: '', severity: '' });

  const handleReason = (e) => setReason(e.target.value);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const handleDeleteDebt = async () => {
    //console.log(reason + '  ' + props.debt._id + ' ' + props.debt.debtorAccountNumber);

    setCancelStatus({ message: '', severity: '' });
    try {
      await cancelDebt({ debtID: props.debt._id, fromAccountNumber: props.debt.creditorAccountNumber, content: reason })
        .unwrap()
        .then((data) => {
          console.log({ data });
          setCancelStatus({ message: 'Cancel success', severity: 'success' });
        })
        .catch((error) => {
          console.log(error.data.errors.message);
          setCancelStatus({ message: error.data.errors.message, severity: 'error' });
        });

      handleClose();
    } catch (err) {
      if (!err?.status) {
        console.log('Interval Server Error');
      } else {
        console.log('Thêm mới không thành công');
      }
    }
  };
  return (
    <Box>
      <Divider light />
      <Box display={'flex'} flexDirection={'column'} mt={1}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems="center">
          <Box display={'flex'} flexDirection={'column'} gap={1}>
            <Typography fontWeight={'bold'} fontSize="1.2em" color={colors.red[500]}>
              {props.debt.bankName}
            </Typography>
            <Typography fontWeight={'300'} color={colors.grey[200]}>
              BID: {props.debt.creditorAccountNumber}
            </Typography>
          </Box>
          <Typography fontWeight={'bold'} fontSize="1.5rem" color={colors.blue[200]}>
            {props.debt.amountOwed}
          </Typography>
        </Box>

        <Typography variant="h6" color={colors.grey[200]}>
          Date: {props.debt.endDate}
        </Typography>
        <Typography variant="h6" color={colors.grey[200]}>
          Content: {props.debt.content}
        </Typography>

        <Box display={'flex'} justifyContent={'space-between'} mt={1} mb={2}>
          <Box
            borderRadius={'5px'}
            boxShadow="0px 0px 3px #C3C3C3"
            fontWeight={700}
            fontSize="large"
            bgcolor={colors.red[800]}
            px={4}
            py={0.5}
            sx={{
              '&:hover': { color: '#090316', bgcolor: `${colors.grey[100]}`, transition: '0.5s', cursor: 'pointer' },
            }}
            onClick={handleOpen}
          >
            Thanh toán
          </Box>

          <Box
            borderRadius={'5px'}
            bgcolor={colors.grey[200]}
            boxShadow="0px 0px 3px #C3C3C3"
            fontWeight={700}
            fontSize="large"
            color={colors.red[700]}
            px={4}
            py={0.5}
            sx={{ '&:hover': { color: '#6f6092', bgcolor: `${colors.grey[100]}`, transition: '0.5s', cursor: 'pointer' } }}
            onClick={handleOpen}
          >
            Cancel
          </Box>
        </Box>
      </Box>
      <Divider light />

      <Dialog
        open={openModal}
        onClose={handleClose}
        sx={{
          '& label.Mui-focused': { color: `${colors.grey[100]}` },
          '& .MuiInput-underline:after': { borderBottomColor: `${colors.grey[100]}` },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: `${colors.grey[100]}` },
            '&:hover fieldset': { borderColor: `${colors.grey[100]}` },
            '&.Mui-focused fieldset': { borderColor: `${colors.grey[100]}` },
          },
        }}
      >
        <DialogTitle>CANCEL DEBT OF</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Delete debt from account: {props.debt.debtorAccountNumber} <br></br>
            Amount is: {props.debt.amountOwed} <br></br>
          </DialogContentText>
          <TextField autoFocus id="content" value={reason} onChange={handleReason} label="Cancel Content" type="text" fullWidth variant="standard" />
        </DialogContent>
        <DialogActions>
          <Button sx={{ px: 4, backgroundColor: `${colors.grey[400]}`, fontSize: 15, color: 'white' }} onClick={handleClose}>
            Cancel
          </Button>
          <Button sx={{ px: 4, backgroundColor: `${colors.blue[500]}`, fontSize: 15, color: 'white' }} onClick={handleDeleteDebt}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OwnDebt;
