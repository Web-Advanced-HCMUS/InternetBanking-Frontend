import { Snackbar, Alert, Button } from '@mui/material';
import { useState } from 'react';
import { io } from 'socket.io-client';
import config from 'config/config';
import { useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DebtNotification({ socket }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState({ message: '', status: false, severity: '' });

  //const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setMessage({ message: '', status: false, severity: '' });
  };

  useEffect(() => {
    console.log(socket);
    socket?.on('pay_debt', (msg) => {
      console.log(msg);
      const newMessage = `Debtor: ${msg.debtorAccountNumber} has paid a debt for you`;
      setMessage({ message: '', status: false, severity: '' });
      setMessage({ message: newMessage, status: true, severity: 'success' });
    });
    socket?.on('create_debt', (msg) => {
      const response = { msg };
      const getData = response.msg;
      const newMessage = `Creditor: ${getData.creditorAccountNumber} has create a debt for you \n------ Content: ${getData.content}`;
      setMessage({ message: '', status: false, severity: '' });
      setMessage({ message: newMessage, status: true, severity: 'warning' });
    });
    socket?.on('cancel_debt_from_debtor', (msg) => {
      console.log(msg);
      const newMessage = `Debtor: ${msg.debtorAccountNumber} wants you to delete debt \n------ Content: ${msg.content}`;
      setMessage({ message: '', status: false, severity: '' });
      setMessage({ message: newMessage, status: true, severity: 'error' });
    });
    socket?.on('cancel_debt_from_creditor', (msg) => {
      console.log(msg);
      const newMessage = `Creditor: ${msg.creditorAccountNumber} has delete your debt \n------ Content: ${msg.content}`;
      setMessage({ message: '', status: false, severity: '' });
      setMessage({ message: newMessage, status: true, severity: 'success' });
    });
  }, [socket]);

  const handleToDebt = () => {
    handleClose();
    console.log(window.location.pathname)
    if(window.location.pathname === '/debt')
      navigate('/home');
    else
      navigate('/debt');
  };

  return (
    <Snackbar
      open={message.status}
      autoHideDuration={50000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        variant="filled"
        severity={message.severity}
        width="100%"
        sx={{ width: '100%' }}
        action={
          <>
            <Button color="primary" size="small" onClick={handleToDebt}>
              To Debt
            </Button>
            <IconButton aria-label="close" color="inherit" sx={{ p: 0.5 }} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </>
        }
      >
        {message.message}
      </Alert>
    </Snackbar>
  );
}

export default DebtNotification;
