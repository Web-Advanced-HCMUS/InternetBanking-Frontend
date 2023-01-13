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
import { useSelector } from 'react-redux';
import { tokens } from 'theme';
import Toastify from 'components/Toastify';

import { useCancelDebtMutation, useGetOtpMutation, usePayDebtMutation } from 'api/debtApi';

const OwnDebt = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { userId } = useSelector((state) => state.auth.loggedInUser);
  const { accountNumber } = useSelector((state) => state.debt);

  const [cancelDebt] = useCancelDebtMutation();
  const [getOtp] = useGetOtpMutation();
  const [payDebt] = usePayDebtMutation();

  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const [reason, setReason] = useState('');
  const [otp, setOtp] = useState('');
  const [payContent, setPayContent] = useState('');

  const [cancelStatus, setCancelStatus] = useState({ message: '', severity: '' });

  const handleReason = (e) => setReason(e.target.value);
  const handleOtp = (e) => setOtp(e.target.value);
  const handlePayContent = (e) => setPayContent(e.target.value);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleOpen2 = () => setOpenModal2(true);
  const handleClose2 = () => setOpenModal2(false);

  const handleDeleteDebt = async () => {
    //console.log(reason + '  ' + props.debt._id + ' ' + props.debt.debtorAccountNumber);
    try {
      setCancelStatus({ message: '', severity: '' });
      await cancelDebt({ debtID: props.debt._id, fromAccountNumber: props.debt.debtorAccountNumber, content: reason })
        .unwrap()
        .then((data) => {
          console.log({ data });          
          setCancelStatus({ message: 'Send cancle success', severity: 'success' });
          //props.handleCancelDebt({data});
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
        console.log('Remove debt failed');
      }
    }
  };

  const handleGetOtp = async () => {
    console.log(userId + ' ' + props.debt.amountOwed);
    setCancelStatus({ message: '', severity: '' });
    try {
      await getOtp({ userId: userId, amount: props.debt.amountOwed })
        .unwrap()
        .then((data) => {
          console.log({ data });
          setCancelStatus({ message: 'Otp send to your email success', severity: 'success' });
        })
        .catch((error) => {
          console.log(error.data.errors.message);
          setCancelStatus({ message: error.data.errors.message, severity: 'error' });
        });

      handleClose();
    } catch (err) {
      if (!err?.status) {
        setCancelStatus({ message: 'Interval Server Error', severity: 'error' });
      } else {
        setCancelStatus({ message: 'Get OTP Failed ', severity: 'error' });
      }
    }
  };

  const handlePayDebt = async () => {
    console.log(accountNumber + ' ' + payContent + ' ' + userId + ' ' + otp + ' ' + props.debt._id);
    setCancelStatus({ message: '', severity: '' });
    try {
      await payDebt({ fromAccountNumber: accountNumber, content: payContent, userId: userId, otp: otp, debtId: props.debt._id })
        .unwrap()
        .then((data) => {
          console.log({ data });
          setCancelStatus({ message: 'Pay Debt success', severity: 'success' });
          setTimeout(
            props.handlePayForDebt({data}), 5000);

        })
        .catch((error) => {
          console.log(error.data.errors.message);
          setCancelStatus({ message: error.data.errors.message, severity: 'error' });
        });
      handleClose2();
    } catch (err) {
      if (!err?.status) {
        setCancelStatus({ message: 'Interval Server Error ', severity: 'error' });
      } else {
        setCancelStatus({ message: 'Pay Debt failed', severity: 'error' });
      }
    }
  };

  
  return (
    <>
      {cancelStatus.message.length !== 0 && <Toastify message={cancelStatus.message} hidden={false} severity={cancelStatus.severity}></Toastify>}
      <Box>
        {props.debt.status === 'incomplete' ? (
          <>
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
                  onClick={handleOpen2}
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
            {/* <Divider light /> */}
          </>
        ) : (
          <></>
        )}

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
            <TextField
              autoFocus
              id="content"
              value={reason}
              onChange={handleReason}
              label="Cancel Content"
              type="text"
              fullWidth
              variant="standard"
            />
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

        <Dialog
          open={openModal2}
          onClose={handleClose2}
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
          <DialogTitle>PAY FOR THIS DEBT</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Pay debt for account: {props.debt.creditorAccountNumber} <br></br>
              Amount is: {props.debt.amountOwed} <br></br>
            </DialogContentText>
            <Box display={'flex'} flexDirection="row" gap={'1rem'} my="1rem">
              <Button sx={{ px: 4, backgroundColor: `${colors.grey[500]}`, fontSize: 15, color: 'white' }} onClick={handleGetOtp}>
                Get OTP
              </Button>
              <TextField autoFocus id="content" value={otp} onChange={handleOtp} label="OTP" type="text" fullWidth variant="standard" />
            </Box>
            <TextField
              autoFocus
              id="content"
              value={payContent}
              onChange={handlePayContent}
              label="Pay Content"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button sx={{ px: 4, backgroundColor: `${colors.grey[400]}`, fontSize: 15, color: 'white' }} onClick={handleClose2}>
              Cancel
            </Button>
            <Button sx={{ px: 4, backgroundColor: `${colors.blue[500]}`, fontSize: 15, color: 'white' }} onClick={handlePayDebt}>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};

export default OwnDebt;
