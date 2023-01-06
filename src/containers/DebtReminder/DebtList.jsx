import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Modal,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
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
            <Typography fontWeight={'bold'} fontSize="1.1rem" color={colors.red[500]}>
              {props.debt.bankName}
            </Typography>
            <Typography color={colors.grey[200]}>BID: {props.debt.bankID}</Typography>
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
        <Box display={'flex'} justifyContent={'flex-end'} mt={1} mb={2}>
          <Box
            borderRadius={'5px'}
            bgcolor={colors.grey[200]}
            boxShadow="0px 0px 3px #C3C3C3"
            fontWeight={700}
            fontSize="large"
            color={colors.red[700]}
            px={4}
            py={0.5}
            sx={{ '&:hover': { color: '#8C79B8', bgcolor: `${colors.grey[100]}`, transition: '0.5s', cursor: 'pointer' } }}
            onClick={handleOpen}
          >
            Cancel
          </Box>
        </Box>
      </Box>
      {/* <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableEnforceFocus
      >
        <Box
          border={2}
          borderRadius="2"
          borderColor={colors.grey[200]}
          bgcolor={colors.primary[600]}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '25%',
            p: 3,
          }}
        >
          <Box display="flex" justifyContent="flex-end">
            <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleClose} />
          </Box>
          <Typography variant="h5" color={colors.grey[200]}>
            Click to clear debt for
            <Typography variant="h4" mx={0.5} component={'span'} fontWeight={'bold'} color={colors.grey[100]}>
              {props.debt.bankName}.
            </Typography>
            Are you sure?
          </Typography>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            sx={{
              bgcolor: '#56408a',
              float: 'right',
              color: `${colors.grey[100]}`,
              fontWeight: '600',
              fontSize: 15,
              mt: 2,
              px: 3.25,
              py: 1,
              ':hover': {
                color: `${colors.grey[900]}`,
              },
            }}
            onClick={handleDeleteDebt}
          >
            CANCEL
          </Button>
        </Box>
      </Modal> */}
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
      <Divider light />
    </Box>
  );
};

export default OwnDebt;
