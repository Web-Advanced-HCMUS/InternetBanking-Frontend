import { Snackbar, Alert } from '@mui/material';
import { useState } from 'react';
import { io } from 'socket.io-client';
import config from 'config/config';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function DebtNotification({ message, hidden, severity }) {
  const { userId } = useSelector((state) => state.auth.loggedInUser);
  const { accountNumber } = useSelector((state) => state.debt);

  
  const [open, setOpen] = useState(!hidden);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  console.log("Number"+ accountNumber)
  const socket = io.connect("http://localhost:3000");
  socket.emit('online', { accountNumber: accountNumber, userId: userId }); // check lại coi có account Number không ?, n1o đang null nên lỗi

  socket.on("pay_debt",(msg)=>{
    console.log(msg);
  })

  useEffect(()=>{
    socket.on("create_debt",(msg)=>{
      console.log(msg);
    });
    socket.on("cancel_debt_from_debtor",(msg)=>{
      console.log(msg);
    });
    socket.on("cancel_debt_from_creditor",(msg)=>{
      console.log(msg);
    })
  }, [socket])


  return (
    <Snackbar
      open={open}
      // autoHideDuration={100000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} variant="filled" severity={severity} width="100%" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default DebtNotification;
