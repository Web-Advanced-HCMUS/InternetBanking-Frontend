import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import Loader from 'components/Loader';

function AccountList({ onSetAccount, accountList, loading, ...props }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen} {...props}>
        <MenuIcon /> Chọn người nhận từ danh bạ
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Typography component="h1" variant="h5" color="primary" align="center" marginBottom="5px" marginTop="20px">
            Danh sách tài khoản nhận đã lưu
          </Typography>
        </DialogTitle>
        <DialogContent>
          {loading && <Loader />}
          {(!accountList || accountList?.length === 0) && <Typography variant="body1">Không có danh sách để hiển thị.</Typography>}
          {accountList?.length !== 0 && (
            <List>
              {accountList?.map((account, idx) => (
                <ListItemButton
                  key={idx}
                  onClick={(e) => {
                    handleClose(e);
                    onSetAccount(account.accountNumber, account.reminiscentName);
                  }}
                >
                  <ListItemText primary={account.reminiscentName} secondary={account.accountNumber} />
                </ListItemButton>
              ))}
            </List>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Trở về</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AccountList;
