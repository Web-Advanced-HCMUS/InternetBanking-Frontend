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
const OwnDebt = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const handleDeleteDebt = () => {
    //delete props.debt.bankID
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
              BID: {props.debt.bankID}
            </Typography>
          </Box>
          <Typography fontWeight={'bold'} fontSize="1.5rem" color={colors.blue[200]}>
            {props.debt.amount}
          </Typography>
        </Box>

        <Typography variant="h6" color={colors.grey[200]}>
          Date: {!props.debt.deadline && '14/01/2023'}
        </Typography>
        <Typography variant="h6" color={colors.grey[200]}>
          Content: {props.debt.descript}
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
        <DialogTitle>CANCEL DEBT</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To delete to this debt reminder, please enter your the reasons why you want to delete. Thank you so much!
          </DialogContentText>
          <TextField autoFocus id="content" label="Cancel Content" type="text" fullWidth variant="standard" />
        </DialogContent>
        <DialogActions>
          <Button sx={{ px: 4, backgroundColor: `${colors.grey[400]}`, fontSize: 15, color: 'white' }} onClick={handleClose}>
            Cancel
          </Button>
          <Button sx={{ px: 4, backgroundColor: `${colors.blue[500]}`, fontSize: 15, color: 'white' }} onClick={handleClose}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OwnDebt;
