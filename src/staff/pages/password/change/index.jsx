import { Box, Button, MenuItem, TextField, useMediaQuery, useTheme } from '@mui/material';
import Header from 'staff/components/Header';
import { tokens } from 'staff/theme';
import { Formik } from 'formik';
import * as yup from 'yup';

const phoneRegExp = /^0(\d{9})$/;
const identityCardRegExp = /^(\d{9})$|^(\d{11})$/;
const checkoutSchema = yup.object().shape({
  oldPassword: yup.string().required('required'),
  password: yup.string().required('required'),
  confirmPassword: yup.string().required('required'),
});

const initialValues = {
  oldPassword: '',
  password: '',
  confirmPassword: '',
};

const ChangePassword = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="CHANGE PASSWORD" subtitle="Allowing to change your password" />
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
                label="Old Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.oldPassword}
                name="oldPassword"
                error={!!touched.oldPassword && !!errors.oldPassword}
                helperText={touched.oldPassword && errors.oldPassword}
                sx={{ gridColumn: 'span 4' }}
                autoFocus
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="New password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Confirm Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmPassword}
                name="confirmPassword"
                error={!!touched.confirmPassword && !!errors.confirmPassword}
                helperText={touched.confirmPassword && errors.confirmPassword}
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
                Confirm changes
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default ChangePassword;
