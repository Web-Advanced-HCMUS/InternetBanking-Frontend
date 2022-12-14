import { Snackbar, Alert } from '@mui/material';
import { useState } from 'react';

function Toastify({ message, hidden, severity }) {

  const [open, setOpen] = useState(!hidden);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} variant="filled" severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default Toastify;
