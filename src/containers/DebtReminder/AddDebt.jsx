import { Box, Divider, Modal, TextField, Autocomplete, Button, FormControl, useTheme } from '@mui/material';
import OwnDebt from 'containers/DebtReminder/OwnDebt';
import DebtList from 'containers/DebtReminder/DebtList';
import PaidIcon from '@mui/icons-material/Paid';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import Toastify from 'components/Toastify';
import * as yup from 'yup';
import { Formik } from 'formik';

import { tokens } from 'theme';

import { useCreateDebtMutation } from 'api/debtApi';

const AddDebt = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const initialValues = {
    creditorAccountNumber: props.accountNumber,
    debtorAccountNumber: '',
    amountOwed: '',
    content: '',
    startDate: new Date().toISOString().substring(0, 10),
    endDate: '',
  };

  const checkoutSchema = yup.object().shape({
    debtorAccountNumber: yup.string().required('required'),
    amountOwed: yup.number().moreThan(0).required('required'),
    content: yup.string().required('required'),
    startDate: yup.date(),
    endDate: yup.date().min(yup.ref('startDate'), "End date can't be before start date").required('required'),
  });


  const [createDebt] = useCreateDebtMutation();

  const [openModal, setOpenModal] = useState(props.open);

  const [inputStatus, setInputStatus] = useState({ message: '', severity: '' });

  const handleClose = () => setOpenModal(false);

  const handleDebtSubmit = async (values) => {    
    console.log(values)
    try {
        setInputStatus({ message: '', severity: '' });
        await createDebt(values)
          .unwrap()
          .then((data) => {
            console.log({ data });
            setInputStatus({ message: 'Add new Debt success', severity: 'success' });
          })
          .catch((error) => {
            console.log(error.data.errors.message);
            setInputStatus({ message: error.data.errors.message, severity: 'error' });
          });
  
        handleClose();
      } catch (err) {
        if (!err?.status) {
            setInputStatus({ message: "Wrong Infor", severity: 'error' });
        } else {
            setInputStatus({ message: "Add debt Failed", severity: 'error' });
        }
      }
  };

  return (
    <>
      {inputStatus.message.length !== 0 && <Toastify message={inputStatus.message} hidden={false} severity={inputStatus.severity}></Toastify>}

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
            bgcolor: colors.primary[400],
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
          <Formik onSubmit={handleDebtSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                {/* <Autocomplete
          id="bank-friends"
          options={bankFriends}
          fullWidth
          getOptionLabel={(option) => option.label || ''}
          renderInput={(params) => <TextField {...params} label="Bạn muốn gửi nhắc nợ tới ai" />}
          value={bankName}
          onChange={handleChooseBankName}
        /> */}
                <div className="form-group position-relative">
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Account Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.debtorAccountNumber}
                    name="debtorAccountNumber"
                    error={!!touched.debtorAccountNumber && !!errors.debtorAccountNumber}
                    helperText={touched.debtorAccountNumber && errors.debtorAccountNumber}
                    sx={{ gridColumn: 'span 4' }}
                    autoFocus
                  />
                </div>
                <div className="form-group position-relative">
                  <TextField
                    fullWidth
                    variant="filled"
                    type="number"
                    label="Amount"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.amountOwed}
                    name="amountOwed"
                    error={!!touched.amountOwed && !!errors.amountOwed}
                    helperText={touched.amountOwed && errors.amountOwed}
                    sx={{ gridColumn: 'span 4' }}
                  />
                </div>

                <div className="form-group position-relative">
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Content"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.content}
                    name="content"
                    error={!!touched.content && !!errors.content}
                    helperText={touched.content && errors.content}
                    sx={{ gridColumn: 'span 4' }}
                  />
                </div>
                <div className="form-group position-relative">
                  <TextField
                    fullWidth
                    variant="filled"
                    type="date"
                    label="Start Date"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.startDate}
                    name="startDate"
                    error={!!touched.startDate && !!errors.startDate}
                    helperText={touched.startDate && errors.startDate}
                    sx={{ gridColumn: 'span 4' }}
                    disabled={true}
                  />
                </div>
                <div className="form-group position-relative">
                  <TextField
                    fullWidth
                    variant="filled"
                    type="date"
                    label="End Date"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.endDate}
                    name="endDate"
                    error={!!touched.endDate && !!errors.endDate}
                    helperText={touched.endDate && errors.endDate}
                    sx={{ gridColumn: 'span 4' }}
                    focused={true}
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
                >
                  GỬI NHẮC NỢ
                </Button>
              </form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default AddDebt;
