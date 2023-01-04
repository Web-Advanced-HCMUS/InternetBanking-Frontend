import { Box, Button, Divider, Modal } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
const OwnDebt = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const handleDeleteDebt = () => {
    //delete props.debt.bankID
  };
  return (
    <>
      <Box
        display={'flex'}
        flexDirection={'column'}
        flexWrap="wrap"
      >
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignContent={'center'}
          alignItems="center"
          flexWrap={'wrap'}
          width="100%"
          sx={{
            marginTop: '1rem',
          }}
        >
          <Box
            display={'flex'}
            flexDirection={'column'}
            gap={'0.5rem'}
          >
            <Box
              fontWeight={'bold'}
              fontSize="1.2em"
              color="#56408a"
            >
              {props.debt.bankName}
            </Box>
            <Box
              fontWeight={'300'}
              fontSize="0.8em"
              color="#56408a"
            >
              {props.debt.bankID}
            </Box>
          </Box>
          <Box
            fontWeight={'bold'}
            fontSize="1.5em"
            color="#56408a"
          >
            {props.debt.amount}
          </Box>
        </Box>

        <Divider />
        <Box> {props.debt.descript}</Box>

        <Box
          display={'flex'}
          justifyContent={'space-between'}
        >
          <Box
            borderRadius={'5px'}
            bgcolor="#ffffff"
            boxShadow="0px 0px 5px #C3C3C3"
            fontWeight={'700'}
            color="#51b059"
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
            //   onClick={handleOpen}
          >
            Thanh toán
          </Box>

          <Box
            borderRadius={'5px'}
            bgcolor="#ffffff"
            boxShadow="0px 0px 5px #C3C3C3"
            fontWeight={'700'}
            color="#fc7272"
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
            Hủy bỏ
          </Box>
        </Box>

        <Divider
          sx={{ marginTop: '1rem', bgcolor: '#56408a' }}
        />
      </Box>

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
          <Box>
            Bạn có chắc muốn hủy nợ từ:{' '}
            <Box component="span" fontWeight={"bold"}>
              {props.debt.bankName}
            </Box>
          </Box>
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
            onClick={handleDeleteDebt}
          >
            XÓA NHẮC NỢ
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default OwnDebt;
