import { Button, FormControl, InputLabel, MenuItem, Select, TextField, useTheme, Box, useMediaQuery } from '@mui/material';
import { styled } from '@mui/styles';
import { ColorModeContext, tokens } from 'theme';
import { useContext, useState } from 'react';
import Header from 'components/Header';
import { Formik } from 'formik';
import * as yup from 'yup';
import { PersonAddOutlined } from '@mui/icons-material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useAddEmployeeMutation } from 'api/adminApi';
import Toastify from 'components/Toastify';

const PHONE_REG_EXP = /^0(\d{9})$/;
const IDENTITY_CARD_REG_EXP = /^(\d{9})$|^(\d{11})$/;
const initialValues = {
  fullName: '',
  gender: 'MALE',
  phone: '',
  identityCard: '',
  dateOfBirth: '',
  email: '',
  address: '',
  username: '',
  password: '',
  role: 'EMPLOYEE',
  accountType: 'EMPLOYEE',
};
const checkoutSchema = yup.object({
  fullName: yup.string().required('required'),
  gender: yup.string().required('required'),
  identityCard: yup.string().matches(IDENTITY_CARD_REG_EXP, 'Identity card number is not valid').required('required'),
  dateOfBirth: yup.string().required('required'),
  email: yup.string().email('invalid email').required('required'),
  address: yup.string().required('required'),
  phone: yup.string().matches(PHONE_REG_EXP, 'Phone number is not valid').required('required'),
  username: yup.string().required('required'),
  password: yup.string().required('required'),
});

const AddEmployees = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const [error, setError] = useState({ message: '', severity: '' });
  const [addStatus, setAddStatus] = useState({ message: '', severity: '' });
  const [addEmp, { isLoading }] = useAddEmployeeMutation({}, { refetchOnMountOrArgChange: true });

  const handleFormSubmit = async (values, { resetForm }) => {
    console.log(values);
    setAddStatus({ message: '', severity: '' });
    try {
      await addEmp(values)
        .unwrap()
        .then((data) => {
          console.log({ data });
          setAddStatus({ message: 'Add successfully', severity: 'success' });
        })
        .catch((error) => {
          console.log(error.data.errors.message);
          setAddStatus({ message: error.data.errors.message, severity: 'error' });
        });
    } catch (err) {
      if (!err?.status) {
        setError('Interval Server Error');
      } else {
        console.log(err);
        setError('Failed to add new employee!');
      }
    }

    resetForm();
  };

  return (
    <>
      {addStatus.message.length !== 0 && <Toastify message={addStatus.message} hidden={false} severity={addStatus.severity}></Toastify>}
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="ADD EMPLOYEE" subtitle="Adding new user" />
        </Box>
        <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
          {({ isSubmitting, values, errors, setFieldValue, touched, handleBlur, handleChange, handleSubmit }) => (
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
                  label="Identity Card"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.identityCard}
                  name="identityCard"
                  error={!!touched.identityCard && !!errors.identityCard}
                  helperText={touched.identityCard && errors.identityCard}
                  sx={{ gridColumn: 'span 4' }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Full name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.fullName}
                  name="fullName"
                  error={!!touched.fullName && !!errors.fullName}
                  helperText={touched.fullName && errors.fullName}
                  sx={{ gridColumn: 'span 2' }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="date"
                  label="Date of Birth"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.dateOfBirth}
                  name="dateOfBirth"
                  error={!!touched.dateOfBirth && !!errors.dateOfBirth}
                  helperText={touched.dateOfBirth && errors.dateOfBirth}
                  sx={{ gridColumn: 'span 2' }}
                  focused={true}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  select
                  label="Gender"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.gender}
                  name="gender"
                  error={!!touched.gender && !!errors.gender}
                  helperText={touched.gender && errors.gender}
                  sx={{ gridColumn: 'span 2' }}
                  focused
                >
                  <MenuItem key="MALE" value="MALE" selected>
                    Male
                  </MenuItem>
                  <MenuItem key="FEMALE" value="FEMALE">
                    Female
                  </MenuItem>
                  <MenuItem key="ELSE" value="ELSE">
                    Else
                  </MenuItem>
                </TextField>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{ gridColumn: 'span 2' }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Phone Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                  name="phone"
                  error={!!touched.phone && !!errors.phone}
                  helperText={touched.phone && errors.phone}
                  sx={{ gridColumn: 'span 1' }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address}
                  name="address"
                  error={!!touched.address && !!errors.address}
                  helperText={touched.address && errors.address}
                  sx={{ gridColumn: 'span 3' }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.username}
                  name="username"
                  error={!!touched.username && !!errors.username}
                  helperText={touched.username && errors.username}
                  sx={{ gridColumn: 'span 2' }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="password"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  sx={{ gridColumn: 'span 2' }}
                />
              </Box>
              <Box mx="auto" width={`${isNonMobile ? '72%' : '82%'}`} display="flex" justifyContent={`${isNonMobile ? 'end' : 'center'}`} mt="20px">
                <Button disabled={isSubmitting} startIcon={<PersonAddOutlined />} type="submit" color="secondary" variant="contained" size="large">
                  ADD NOW
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default AddEmployees;
