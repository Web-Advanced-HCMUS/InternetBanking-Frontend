import { Button, TextField, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import Header from 'components/Header';
import { Formik } from 'formik';
import * as yup from 'yup';
import { PersonAddOutlined } from '@mui/icons-material';

const initialValues = {
  accountNo: '',
  phone: '',
};
const username = /(^0(\d{9})$)|(^\d{16}$)/;
const checkoutSchema = yup.object().shape({
  accountNo: yup.string().matches(username, 'username is not valid').required('required'),
  amount: yup.number().moreThan(0).required('required'),
});
const CustomerDeposit = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  const name = 'Huynh Tuan Kha';

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DEPOSIT" subtitle="Money deposit to customer's account" />
      </Box>
      <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              my="10px"
              mx="auto"
              width={`${isNonMobile ? '72%' : '100%'}`}
              display="grid"
              gap="10px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Account Number or Username"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.accountNo}
                name="accountNo"
                error={!!touched.accountNo && !!errors.accountNo}
                helperText={touched.accountNo && errors.accountNo ? errors.accountNo : name && `${name}`}
                sx={{ gridColumn: 'span 4' }}
                autoFocus
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
              />
            </Box>
            <Box mx="auto" width={`${isNonMobile ? '72%' : '82%'}`} display="flex" justifyContent={`${isNonMobile ? 'end' : 'center'}`} mt="20px">
              <Button startIcon={<PersonAddOutlined />} type="submit" color="secondary" variant="contained" size="large">
                Confirm Recharge
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default CustomerDeposit;
