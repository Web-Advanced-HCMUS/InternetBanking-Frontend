import { Box, Button, MenuItem, TextField, useMediaQuery, useTheme } from '@mui/material';
import Header from 'staff/components/Header';
import { tokens } from 'staff/theme';
import { Formik } from 'formik';
import * as yup from 'yup';

const initialValues = {
  fullName: '',
  gender: 'male',
  phone: '',
  identityCard: '',
  dateOfBirth: '',
  email: '',
  address: '',
};
const phoneRegExp = /^0(\d{9})$/;
const identityCardRegExp = /^(\d{9})$|^(\d{11})$/;
const checkoutSchema = yup.object().shape({
  fullName: yup.string().required('required'),
  gender: yup.string().required('required'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('required'),
  email: yup.string().email('invalid email').required('required'),
  identityCard: yup
    .string()
    .matches(identityCardRegExp, 'Identity card number is not valid')
    .required('required'),
  address: yup.string().required('required'),
  dateOfBirth: yup.string().required('required'),
});

const Profile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="PROFILE" subtitle="Manage your personal information" />
      </Box>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              my="20px"
              mx="auto"
              width={`${isNonMobile ? '72%' : '100%'}`}
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Identity Card Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.identityCard}
                name="identityCard"
                error={!!touched.identityCard && !!errors.identityCard}
                helperText={touched.identityCard && errors.identityCard}
                sx={{ gridColumn: 'span 2' }}
                autoFocus
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
                helperText="Please select your birthday"
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
                <MenuItem key="male" value="male" selected>
                  Male
                </MenuItem>
                <MenuItem key="female" value="female">
                  Female
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
                sx={{ gridColumn: 'span 2' }}
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
                sx={{ gridColumn: 'span 4' }}
              />
            </Box>
            <Box
              mx="auto"
              width={`${isNonMobile ? '72%' : '82%'}`}
              display="flex"
              justifyContent={`${isNonMobile ? 'end' : 'center'}`}
              mt="20px"
            >
              <Button type="submit" color="secondary" variant="contained" size="large">
                Save your information
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Profile;
