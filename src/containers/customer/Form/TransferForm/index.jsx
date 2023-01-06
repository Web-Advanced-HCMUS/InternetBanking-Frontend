import { Box, Button, MenuItem, TextField, useMediaQuery } from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  bankName: '',
  accountNo: '',
  amount: 0,
  content: 'Transfer Money',
};
const phoneRegExp = /^0(\d{9})$/;
const checkoutSchema = yup.object().shape({
  content: yup.string().required('required'),
  bankName: yup.string().required('Select a bank!'),
  accountNo: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('required'),
  amount: yup.number().moreThan(0, 'Amount cannot less than 0').required('required'),
});
const TransferForm = ({ isExt }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const handleFormSubmit = () => {
    navigate('/transfer/confirm');
  };

  return (
    <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
      {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Box
            mt="10px"
            mx="auto"
            width={`${isNonMobile ? '53%' : '90%'}`}
            display="grid"
            gap="15px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{ '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' } }}
          >
            {isExt && (
              <TextField
                fullWidth
                variant="filled"
                select
                label="Bank Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.bankName}
                name="bankName"
                error={!!touched.bankName && !!errors.bankName}
                helperText={touched.bankName && errors.bankName}
                sx={{ gridColumn: 'span 4' }}
              >
                <MenuItem key="1" value="Ngân hàng A">
                  Ngân hàng A
                </MenuItem>
                <MenuItem key="2" value="Ngân hàng B">
                  Ngân hàng B
                </MenuItem>
              </TextField>
            )}
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Account No"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.accountNo}
              name="accountNo"
              error={!!touched.accountNo && !!errors.accountNo}
              helperText={!touched.accountNo ? '' : errors.accountNo ? errors.accountNo : name ? `Receiver: ${name}` : `Not found the receiver!`}
              sx={{ gridColumn: 'span 4' }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="Amount"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.amount}
              name="amount"
              error={!!touched.amount && !!errors.amount}
              helperText={touched.amount && errors.amount}
              sx={{ gridColumn: 'span 4' }}
              autoFocus
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              multiline
              rows={3}
              label="Content"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.content}
              name="content"
              error={!!touched.content && !!errors.content}
              helperText={touched.content && errors.content}
              sx={{ gridColumn: 'span 4' }}
            />
          </Box>
          <Box mx="auto" width={`${isNonMobile ? '53%' : '82%'}`} display="flex" justifyContent={`${isNonMobile ? 'end' : 'center'}`} my="20px">
            <Button type="submit" color="secondary" variant="contained" size="large" onClick={handleFormSubmit}>
              Next
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default TransferForm;
