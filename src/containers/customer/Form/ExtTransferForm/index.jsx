import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  useTheme,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { tokens } from 'theme';
import Loader from 'components/Loader';
import AccountList from 'components/AccountList';
import Toastify from 'components/Toastify';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import config from 'config/config';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import OTPExtConfirm from 'components/OTPExtConfirm';
import { useLazyGetExtAccountByAccountNumberQuery } from 'api/accountApi';
import { useInsertRecipientMutation } from 'api/recipientApi';
import { useConfirmTransOtpMutation } from 'api/transactionApi';

const bankList = [
  {
    id: 1,
    bankCode: 'SWEN',
    bankName: 'SWEN Banking',
  },
  {
    id: 2,
    bankCode: 'TIMO',
    bankName: 'TIMO Digital Bank',
  },
];
function ExtTransferForm(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { userId } = useSelector((state) => state.auth.loggedInUser);
  const accountPay = useSelector((state) => state.account.payment.payload);
  let recipientList = useSelector((state) => state.recipient.list.payload);

  const [getExtAccountByAccountNumber, { isFetching: accountLoading }] = useLazyGetExtAccountByAccountNumberQuery();

  const [insertRecipient, { isLoading: insertRecipientLoading, isSuccess: insertRecipientSuccess }] = useInsertRecipientMutation();
  const [confirmTransOtp, { isLoading, isError, isSuccess }] = useConfirmTransOtpMutation();
  const [bankCode, setBankCode] = useState('');
  const [toAccountNumber, setToAccountNumber] = useState('');
  const [toAccountName, setToAccountName] = useState('');
  const [amount, setAmount] = useState('');
  const [messageTransfer, setMessageTransfer] = useState('');
  const [feeMethod, setFeeMethod] = useState(0);
  const [toAccountErrMsg, setToAccountErrMsg] = useState('');
  const [msg, setMsg] = useState('');
  const [otpDialogOpen, setOtpDialogOpen] = useState(false);
  const [saveRecipientChecked, setSaveRecipientChecked] = useState(false);
  const isNewRecipient = !recipientList?.some((recipient) => recipient.accountNumber === toAccountNumber);

  const handleBankCode = (event) => {
    setBankCode(event.target.value);
  };
  const handleOtpDialogClose = (event, reason) => {
    if (reason && reason === 'backdropClick') return;
    setOtpDialogOpen(false);
  };
  const handleMessageTransfer = (event) => {
    setMessageTransfer(event.target.value);
  };
  const handleToAccountInput = (event) => {
    setToAccount(event.target.value);
  };
  const handleAmountInput = (event) => {
    const value = event.target.value;
    setAmount(value ? Number.parseInt(value) : '');
  };
  const handleFeeMethod = (event) => {
    const value = event.target.value;
    setFeeMethod(value ? Number.parseInt(value) : '');
  };
  const handleToAccountName = async (event) => {
    setToAccountName('');
    if (toAccountNumber) {
      try {
        const response = await getExtAccountByAccountNumber(toAccountNumber).unwrap();
        const accountName = response.payload.name;
        console.log(response);
        setToAccountName(accountName ? accountName : '');
        setToAccountErrMsg('');
      } catch (err) {
        if (!err.success) {
          setToAccountErrMsg(err.data.error);
        } else {
          setToAccountErrMsg('Internal Server Error.');
        }
      }
    }
  };
  const handleSaveRecipientInput = (event) => {
    setSaveRecipientChecked(!saveRecipientChecked);
  };

  const canSubmit = accountPay && toAccountName && toAccountNumber && amount && bankCode;
  const setToAccount = (toAccountNumber, toAccountName, bankCode) => {
    setToAccountName(toAccountName);
    setToAccountNumber(toAccountNumber);
    setBankCode(bankCode);
    setToAccountErrMsg('');
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    localStorage.setItem('account_number', toAccountNumber);
    localStorage.setItem('account_name', toAccountName);
    localStorage.setItem('amount', amount);
    localStorage.setItem('bank_code', bankCode);
    localStorage.setItem('method', feeMethod);
    localStorage.setItem('content', messageTransfer);
    const { accountNumber, accountOwnerName } = accountPay;
    localStorage.setItem('from_account', accountNumber);
    localStorage.setItem('from_account_name', accountOwnerName);
    try {
      if (saveRecipientChecked) {
        await insertRecipient({
          userId,
          reminiscentName: toAccountName,
          accountNumber: toAccountNumber,
          type: 'interbank',
        }).unwrap();
      }
      await confirmTransOtp({
        userId,
        amount,
      }).unwrap();

      setOtpDialogOpen(true);
      setToAccountName('');
      setToAccountNumber('');
      setAmount('');
      setMessageTransfer('');
      setBankCode('');
    } catch (err) {
      setMsg('');
      if (err.message) {
        setMsg(err.message);
      } else if (!err.success && err.data) {
        setMsg(err.data.errors.message);
      } else {
        setMsg('Lỗi hệ thống !');
      }
      console.log(msg);
    }
  };

  recipientList = recipientList.filter((r) => r.bankCode === bankCode);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {isError && <Toastify message={msg} hidden={false} severity={'error'}></Toastify>}
      <OTPExtConfirm open={otpDialogOpen} onClose={handleOtpDialogClose}></OTPExtConfirm>

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, maxWidth: '50%' }}>
        <FormControl fullWidth required>
          <Box sx={{ backgroundColor: `${colors.primary[400]} !important` }}>
            <Typography component="h1" variant="h5" align="center" marginBottom="10px" marginTop="20px">
              Tài khoản thanh toán:
            </Typography>
            {accountPay && (
              <Box>
                <Typography component="h2" align="left" textAlign="center" marginBottom="10px">
                  Tên người gửi: {accountPay.accountOwnerName} &nbsp;&nbsp;
                </Typography>
                <Typography component="h2" align="left" textAlign="center" marginBottom="10px">
                  Số tài khoản: {accountPay.accountNumber} &nbsp;&nbsp;
                </Typography>
              </Box>
            )}
          </Box>
        </FormControl>

        <Typography sx={{ textAlign: 'left', marginTop: 2, marginBottom: 2 }}>Chuyển đến</Typography>
        <AccountList onSetAccount={setToAccount} accountList={recipientList}></AccountList>
        <FormControl fullWidth required sx={{ textAlign: 'left', marginTop: 2 }}>
          <InputLabel id="ext-bank-label">Chọn ngân hàng liên kết:</InputLabel>
          <Select
            fullWidth
            labelId="ext-bank-select-label"
            id="bank"
            label="Chọn ngân hàng"
            name="bank"
            value={bankCode}
            onChange={handleBankCode}
            sx={{
              textAlign: 'left',
            }}
          >
            {bankList?.map((b, id) => (
              <MenuItem key={id} value={b.bankCode}>
                {b.bankName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          required
          variant="filled"
          type="text"
          label="Nhập số tài khoản người nhận"
          onBlur={handleToAccountName}
          onChange={handleToAccountInput}
          value={toAccountNumber}
          name="toAccountNumber"
          sx={{ gridColumn: 'span 2', marginTop: 2 }}
          autoFocus
        />
        {accountLoading && <Loader />}
        <TextField
          margin="normal"
          disabled
          fullWidth
          name="recipientName"
          label="Tên người nhận"
          id="recipient-name"
          autoComplete="recipient-name"
          value={toAccountName}
        />
        {toAccountNumber && toAccountName && isNewRecipient && (
          <FormControlLabel
            control={<Checkbox checked={saveRecipientChecked} onChange={handleSaveRecipientInput} />}
            label="Lưu lại người nhận này"
          />
        )}

        <TextField
          fullWidth
          required
          variant="filled"
          type="number"
          label="Nhập số tiền cần chuyển"
          onChange={handleAmountInput}
          value={amount}
          name="amount"
          sx={{ gridColumn: 'span 2', marginBottom: '10px', marginTop: '10px' }}
        />
        <TextField
          fullWidth
          required
          variant="filled"
          type="text"
          label="Lời nhắn"
          onChange={handleMessageTransfer}
          value={messageTransfer}
          name="content"
          sx={{ gridColumn: 'span 2' }}
        />
        <FormControl fullWidth required sx={{ marginTop: 3 }}>
          <InputLabel id="fee-label">Hình thức thanh toán phí</InputLabel>
          <Select
            fullWidth
            labelId="fee-method-select-label"
            id="fee-method"
            label="Hình thức thanh toán phí"
            name="fee-method"
            value={feeMethod}
            onChange={handleFeeMethod}
            sx={{
              textAlign: 'left',
            }}
          >
            {Object.keys(config.FEE_PAYMENT_METHOD).map((c, idx) => {
              return (
                <MenuItem value={c} key={idx}>
                  {config.FEE_PAYMENT_METHOD[c][0]}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          loading={isLoading || insertRecipientLoading}
          disabled={!canSubmit}
        >
          Chuyển tiền
        </LoadingButton>
      </Box>
    </Box>
  );
}

export default ExtTransferForm;
