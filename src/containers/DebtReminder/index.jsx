import {
  Box,
  Divider,
  Modal,
  TextField,
  Autocomplete,
  Button,
  FormControl,
} from '@mui/material';
import OwnDebt from 'containers/DebtReminder/OwnDebt';
import DebtList from 'containers/DebtReminder/DebtList';

import PaidIcon from '@mui/icons-material/Paid';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';

import Toastify from 'components/Toastify';

const DebtInfor = [
  {
    title: 'Số dư khả dụng',
    balance: '30.000',
  },
  {
    title: 'TỔNG TIỀN NHẬN',
    balance: '0',
  },
  {
    title: 'TỔNG TIỀN TRẢ',
    balance: '0',
  },
];

const bankFriends = [
  { label: 'Lady Gaga', id: '11233' },
  { label: 'Taylor Swift', id: '122334' },
  { label: 'Justin Bieber', id: '121341' },
  { label: 'John Cena', id: '121342' },
];

const ownDebt = [
  {
    bankID: '98981829391',
    bankName: 'Lionel Messi',
    amount: '200,000',
    descript: 'Không trả tết nay đừng về',
  },
  {
    bankID: '98981829392',
    bankName: 'Kylian Mbappe',
    amount: '500,000',
    descript: 'Thích thì trả không thích thì trả',
  },
  {
    bankID: '98981829393',
    bankName: 'Lionel Messi',
    amount: '5,000,000',
    descript: 'Không trả tết nay đừng về x2',
  },
];

const debtList = [
  {
    bankID: '89119021012',
    bankName: 'Toan Minh Phan',
    amount: '200,000',
    descript: 'Trả tiền trước 15/1',
  },
  {
    bankID: '939103010030',
    bankName: 'Kha Huynh',
    amount: '500,000',
    descript: 'Đi trả tiền đi',
  },
];

const DebtReminder = () => {
  const [openModal, setOpenModal] = useState(false);
  const [bankName, setBankName] = useState(null);
  const [debt, setDebt] = useState('');
  const [reason, setReason] = useState('');
  const [inputStatus, setInputStatus] = useState({});

  const handleOpen = () => setOpenModal(true);

  const handleClose = () => setOpenModal(false);

  const handleDebt = (event) => {
    setDebt(event.target.value);
  };
  const handleReason = (event) => {
    setReason(event.target.value);
  };
  const handleChooseBankName = (event, newValue) => {
    setBankName(newValue);
  };
  const handleDebtSubmit = () => {
    //get all infor
    // console.log(reason);
    // console.log(debt);
    // console.log(bankName);
    if (
      bankName == null ||
      reason === '' ||
      debt === '' ||
      isNaN(debt)
    ) {
      setInputStatus({
        message:
          'Thông tin nhập chưa đúng. Vui lòng nhập lại',
        severity: 'error',
      });
    } else {
      setInputStatus({
        message: 'Báo nợ thành công',
        severity: 'success',
      });
    }
  };

  useEffect(()=>{
    console.log(inputStatus)
  },[inputStatus])

  return (
    <>
      <Box
        display={'flex'}
        flexDirection="column"
        width={'100%'}
        alignItems="center"
      >
        <Box
          fontSize={'2.2rem'}
          fontWeight="600"
          m={'1rem'}
        >
          Nhắc nợ
        </Box>
        <Box
          display={'flex'}
          gap="0.3rem"
          fontWeight={'300'}
        >
          Số dư khả dụng:{' '}
          <Box fontWeight={'700'} color="#767474">
            {DebtInfor[0].balance}
          </Box>
        </Box>

        <Box
          display={'flex'}
          alignItems="center"
          alignContent={'center'}
          justifyContent="center"
          gap={'0.3rem'}
          m={'1rem'}
          p={'1rem'}
          color="#736B84"
          width={'100%'}
          fontSize="1.2rem"
          sx={{
            boxShadow:
              '1px 4px 6px -5px #222, 1px -4px 6px -5px #BFBFB6',

            '&:hover': {
              color: '#56408a',
              cursor: 'pointer',
            },
          }}
        >
          <PaidIcon></PaidIcon>
          <Box>Nhắc nợ</Box>
        </Box>

        {/* ------------------------Thông tin nợ---------------------- */}
        <Box
          display="flex"
          alignItems={'center'}
          justifyContent="center"
          gap="5rem"
          flexWrap={'wrap'}
          paddingY="1rem"
          width="40%"
          sx={{
            borderRadius: '10px',
            backgroundColor: '#ffffff',
            boxShadow: '0px 0px 5px #C3C3C3',
          }}
        >
          {DebtInfor.map((infor, index) => (
            <Box
              display={'flex'}
              flexDirection="column"
              gap="0.2rem"
              alignItems="center"
              key={index}
            >
              <Box fontWeight={'400'} fontSize="1.2rem">
                {infor.title}
              </Box>
              <Box
                fontWeight={'600'}
                fontSize="1.5rem"
                color={
                  DebtInfor.length === index + 1
                    ? 'red'
                    : ''
                }
              >
                {infor.balance}
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          display={'flex'}
          flexDirection="row"
          justifyContent={'flex-end'}
          width="40%"
        >
          <Box
            borderRadius={'5px'}
            bgcolor="#ffffff"
            boxShadow="0px 0px 5px #C3C3C3"
            fontWeight={'700'}
            color="#56408a"
            marginTop="1rem"
            paddingY={'1rem'}
            paddingX={'2rem'}
            sx={{
              '&:hover': {
                color: '#8C79B8',
                bgcolor: 'aliceblue',
                transition: '0.5s',
                cursor: 'pointer',
              },
            }}
            onClick={handleOpen}
          >
            TẠO NHẮC NỢ MỚI
          </Box>
        </Box>

        {/* -----------------------Nhắc nợ của mình---------------------- */}
        <Box
          display={'flex'}
          flexDirection="column"
          width={'40%'}
          borderRadius={'10px'}
          bgcolor="#ffffff"
          boxShadow="0px 0px 5px #C3C3C3"
          m="2rem"
        >
          <Box
            display={'flex'}
            flexDirection="row"
            justifyContent="space-between"
            margin="1rem"
          >
            <Box
              fontWeight={'600'}
              fontSize="1.2rem"
              color={'#56408a'}
            >
              Cần xử lý
            </Box>
            <Box
              fontWeight={'600'}
              fontSize="1.2rem"
              color={'#56408a'}
            >
              Thu gọn
            </Box>
          </Box>
          <Divider />
          <Box
            display={'flex'}
            flexDirection="column"
            margin="1rem"
            gap={'10px'}
          >
            {ownDebt.length === 0 ? (
              <Box>Chưa có nhắc nợ</Box>
            ) : (
              ownDebt.map((debt, index) => (
                <OwnDebt key={index} debt={debt} />
              ))
            )}
          </Box>
        </Box>

        {/* -----------------------Nợ đã trả---------------------- */}
        <Box
          display={'flex'}
          flexDirection="column"
          width={'40%'}
          borderRadius={'10px'}
          bgcolor="#ffffff"
          boxShadow="0px 0px 5px #C3C3C3"
          m="2rem"
        >
          <Box
            display={'flex'}
            flexDirection="row"
            justifyContent="space-between"
            margin="1rem"
          >
            <Box
              fontWeight={'600'}
              fontSize="1.2rem"
              color={'#56408a'}
            >
              Cần xử lý
            </Box>
            <Box
              fontWeight={'600'}
              fontSize="1.2rem"
              color={'#56408a'}
            >
              Thu gọn
            </Box>
          </Box>
          <Divider />
          <Box
            display={'flex'}
            flexDirection="column"
            margin="1rem"
            gap={'10px'}
          >
            {debtList.length === 0 ? (
              <Box>Bạn chưa có nhắc nợ ai</Box>
            ) : (
              debtList.map((debt, index) => (
                <DebtList key={index} debt={debt} />
              ))
            )}
          </Box>
        </Box>
      </Box>

      {/* -------------------Modal nhắc nợ-----------------  */}
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableEnforceFocus
      >
        <Box
          sx={{
            position: 'absolute',
            border: '0px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '25%',
            bgcolor: 'white',
            p: 3,
          }}
        >
          <Box display="flex" justifyContent="flex-end">
            <CloseIcon
              sx={{
                cursor: 'pointer',
              }}
              onClick={handleClose}
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
            <PaidIcon sx={{ fontSize: 35 }}></PaidIcon>
            <Box>TẠO NHẮC NỢ MỚI</Box>
          </Box>
          <FormControl sx={{ width: '100%' }}>
            <Autocomplete
              id="bank-friends"
              options={bankFriends}
              fullWidth
              getOptionLabel={(option) =>
                option.label || ''
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Bạn muốn gửi nhắc nợ tới ai"
                />
              )}
              value={bankName}
              onChange={handleChooseBankName}
            />
            <div className="form-group position-relative">
              <TextField
                margin="normal"
                type="number"
                value={debt}
                required
                fullWidth
                name="balanceInput"
                label="Nhập số tiền"
                id="balanceInput"
                autoComplete="balanceInput"
                onChange={handleDebt}
                sx={{
                  '& input[type=number]': {
                    '-moz-appearance': 'textfield',
                  },
                  '& input[type=number]::-webkit-outer-spin-button':
                    {
                      '-webkit-appearance': 'none',
                      margin: 0,
                    },
                  '& input[type=number]::-webkit-inner-spin-button':
                    {
                      '-webkit-appearance': 'none',
                      margin: 0,
                    },
                }}
              />
            </div>

            <div className="form-group position-relative">
              <TextField
                margin="normal"
                fullWidth
                name="reasonInput"
                label="Lý do (không bắt buộc)"
                id="reasonInput"
                value={reason}
                onChange={handleReason}
              />
            </div>

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
              onClick={handleDebtSubmit}
            >
              GỬI NHẮC NỢ
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
};

export default DebtReminder;
