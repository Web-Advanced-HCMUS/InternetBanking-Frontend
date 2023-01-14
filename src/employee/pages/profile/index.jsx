import { Box, Button, MenuItem, TextField, useMediaQuery } from '@mui/material';
import Header from 'components/Header';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useGetUserInfoQuery } from 'api/authApi';
import Loading from 'containers/Loading';

const Profile = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const navigate = useNavigate();
  const { data, isLoading, isFetching, isSuccess } = useGetUserInfoQuery();

  const userInfo = data?.payload;
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="PROFILE" subtitle="Show your personal information" />
      </Box>
      <Loading open={isLoading} />
      {isSuccess && (
        <form>
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
              variant="outlined"
              disabled
              type="text"
              label="Identity Card Number"
              value={userInfo.identityCard}
              name="identityCard"
              sx={{ gridColumn: 'span 2' }}
            />
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="text"
              label="Full name"
              value={userInfo.fullName}
              name="fullName"
              sx={{ gridColumn: 'span 2' }}
            />

            <TextField
              fullWidth
              disabled
              variant="outlined"
              label="Gender"
              value={userInfo.gender}
              name="gender"
              sx={{ gridColumn: 'span 2' }}
            ></TextField>
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="text"
              label="Email"
              value={userInfo.email}
              name="email"
              sx={{ gridColumn: 'span 2' }}
            />
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="text"
              label="Phone Number"
              value={userInfo.phone}
              name="phone"
              sx={{ gridColumn: 'span 2' }}
            />

            <TextField
              fullWidth
              d
              variant="outlined"
              type="text"
              label="Address"
              value={userInfo.address}
              name="address"
              sx={{ gridColumn: 'span 2' }}
            />
          </Box>
          <Box mx="auto" width={`${isNonMobile ? '72%' : '82%'}`} display="flex" justifyContent={`${isNonMobile ? 'end' : 'center'}`} mt="20px">
            <Button color="secondary" variant="contained" size="large" onClick={handleBack}>
              Trở về
            </Button>
          </Box>
        </form>
      )}
    </Box>
  );
};

export default Profile;
