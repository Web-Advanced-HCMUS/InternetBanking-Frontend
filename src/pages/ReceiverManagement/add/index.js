import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { useGetBankListQuery, useLazyGetBankListQuery } from 'api/transactionApi';
import { useLazyGetAccountByAccountNumberQuery } from 'api/accountApi';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader';
import { useEffect, useState } from 'react';
import { useInsertRecipientMutation } from 'api/recipientApi';
import Toastify from 'components/Toastify';

function AddRecipientDialog(props) {
  const { data: bankList } = useGetBankListQuery();

  const { userId } = useSelector((state) => state.auth.loggedInUser);
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountNameErrMsg, setAccountNameErrMsg] = useState('');
  const [reminiscentName, setReminiscentname] = useState('');
  const [bankCode, setBankCode] = useState('');
  const [msg, setMsg] = useState('');

  const handleAccountNumberInput = (event) => {
    setAccountNumber(event.target.value);
  };
  const handlReminiscentName = (event) => {
    setReminiscentname(event.target.value);
  };
  const handleBankInput = (event) => {
    setBankCode(event.target.value);
  };

  const [getAccountByAccountNumber, { isFetching: accountLoading }] = useLazyGetAccountByAccountNumberQuery();
  const getAndSetAccountName = async () => {
    setAccountName('');
    if (accountNumber && bankCode) {
      try {
        const response = await getAccountByAccountNumber(accountNumber).unwrap();
        const accountNameResponse = response.payload.accountOwnerName;
        setAccountName(accountNameResponse ? accountNameResponse : '');
        setAccountNameErrMsg('');
      } catch (err) {
        if (!err.success) {
          setAccountNameErrMsg(err.error.message);
        } else {
          setAccountNameErrMsg('Lỗi hệ thống.');
        }
      }
    }
  };
  const handleAccountNumberBlur = (event) => {
    getAndSetAccountName();
  };
  const handleBankBlur = (event) => {
    getAndSetAccountName();
  };

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    setOpen(false);
  };
  const handleClickOpen = (event, reason) => {
    setOpen(true);
  };
  const resetForm = () => {
    setAccountNumber('');
    setReminiscentname('');
    setBankCode('');
  };

  const [insertRecipient, { isLoading, isError, isSuccess }] = useInsertRecipientMutation();
  const canSubmit = accountNumber && accountName && bankCode && userId;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await insertRecipient({
        accountNumber,
        reminiscentName,
        bankCode,
        userId,
        type: 'interbank',
      }).unwrap();
      setOpen(false);
      setMsg('Thêm người nhận thành công');
    } catch (err) {
      setMsg('');
      if (!err.success) {
        setMsg(err.error.message);
      } else {
        setMsg('Không thể thực hiện.');
      }
    }
  };

  useEffect(() => {
    resetForm();
  }, [open]);

  return (
    <>
      {(isError || isSuccess) && <Toastify message={msg} hidden={false} severity={isError ? 'error' : 'success'}></Toastify>}

      <Button variant="contained" color="secondary" onClick={handleClickOpen} {...props}>
        + ADD RECEIVER
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Thông tin người nhận</DialogTitle>
        <DialogContent>
          {accountLoading && <Loader />}
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="accountNumber"
              label="Số tài khoản"
              id="accountNumber"
              autoComplete="accountNumber"
              value={accountNumber}
              onChange={handleAccountNumberInput}
              onBlur={handleAccountNumberBlur}
            />
            <FormControl fullWidth required sx={{ marginTop: 2, marginBottom: 1 }}>
              <InputLabel id="role-label">Ngân hàng</InputLabel>
              <Select
                fullWidth
                labelId="bank-label"
                id="bank"
                label="Ngân hàng"
                name="bank"
                value={bankCode}
                onChange={handleBankInput}
                sx={{
                  textAlign: 'left',
                }}
                onBlur={handleBankBlur}
              >
                {bankList &&
                  bankList.payload.map((bank, idx) => (
                    <MenuItem key={idx} value={bank.code}>
                      {bank.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              name="accountName"
              label="Tên tài khoản"
              id="accountName"
              autoComplete="accountName"
              value={accountName}
              disabled
              error={accountNameErrMsg !== ''}
              helperText={accountNameErrMsg}
            />
            <TextField
              margin="normal"
              fullWidth
              name="nickName"
              label="Tên gợi nhớ"
              id="nickName"
              value={reminiscentName}
              onChange={handlReminiscentName}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Trở về</Button>
          <LoadingButton loading={isLoading} disabled={!canSubmit} onClick={handleSubmit}>
            Thêm
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddRecipientDialog;
