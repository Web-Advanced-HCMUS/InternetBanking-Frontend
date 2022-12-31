import {
  Box,
  Button,
  Typography,
  TextField,
  FormControl,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const CreateUser = (props) => {

    const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const handleBack = () => {navigate('/employee')};

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box width={'60%'} margin="auto" marginTop={5}>
      <Box display="flex" justifyContent="flex-start">
        <ArrowBack
          sx={{
            cursor: 'pointer',
          }}
          onClick={handleBack}
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
        {/* <PaidIcon sx={{ fontSize: 35 }}></PaidIcon> */}
        <Box>TẠO NGƯỜI DÙNG MỚI</Box>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <Controller
            name={'username'}
            control={control}
            render={({ field }) => (
              <TextField
                margin="normal"
                fullWidth
                required
                label="Username"
                {...field}
              />
            )}
          />
        </div>

        <Controller
          name={'password'}
          control={control}
          render={({ field }) => (
            <TextField
              margin="normal"
              fullWidth
              required
              label="Password"
              {...field}
            />
          )}
        />

        <Controller
          name={'name'}
          control={control}
          render={({ field }) => (
            <TextField
              margin="normal"
              fullWidth
              required
              label="Họ và tên"
              {...field}
            />
          )}
        />


        <Controller
          name={'phone'}
          control={control}
          render={({ field }) => (
            <TextField
              margin="normal"
              type="cel"
              fullWidth
              required
              label="Số điện thoại"
              {...field}
            />
          )}
        />

        <Controller
          name={'email'}
          control={control}
          render={({ field }) => (
            <TextField
              margin="normal"
              type={"email"}
              fullWidth
              required
              label="Email"
              {...field}
            />
          )}
        />

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
          TẠO NGƯỜI DÙNG
        </Button>
      </form>
    </Box>
  );
};

export default CreateUser;
