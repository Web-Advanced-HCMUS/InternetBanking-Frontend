import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import Sidebar from 'admin/pages/global/Sidebar';
import TopBar from 'admin/pages/global/Topbar';
import { ColorModeContext, tokens } from 'admin/theme';
import { useContext, useState } from 'react';
import Header from '../../../components/Header';
const CssTextField = styled(TextField)(
  ({ theme, colorMode, colors, width, ...props }) => ({
    '& label.Mui-focused': {
      color: `${theme.palette.mode === 'dark' ? colors.grey[200] : '#202020'}`,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: `${
        theme.palette.mode === 'dark' ? colors.grey[200] : '#202020'
      }`,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: `${theme.palette.mode === 'dark' ? colors.grey[200] : '#202020'}`,
      },
      '&:hover fieldset': {
        borderColor: `${theme.palette.mode === 'dark' ? colors.grey[200] : '#202020'}`,
      },
      '&.Mui-focused fieldset': {
        borderColor: `${theme.palette.mode === 'dark' ? colors.grey[200] : '#202020'}`,
      },
    },
    width,
    ...props,
  }),
);

const AddEmployees = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [role, setRole] = useState('');
  const handleChange = (e) => {
    setRole(e.target.value);
  };
  return (
    <main className="content">
      <Box display="flex">
        <Sidebar />
        <Box display="flex" flexDirection="column" flexGrow={1} height="100%">
          <TopBar />
          <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Header title="ADD EMPLOYEE" subtitle="Adding new user" />
            </Box>
            <Box
              m="10px 0"
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
              flexDirection="column"
            >
              <CssTextField
                label="Name"
                colors={colors}
                colorMode={colorMode}
                theme={theme}
                width="40%"
                margin="10px 0"
              />
              <CssTextField
                label="Email"
                colors={colors}
                colorMode={colorMode}
                theme={theme}
                width="40%"
                margin="10px 0"
                type="email"
              />
              <CssTextField
                label="Phone"
                colors={colors}
                colorMode={colorMode}
                theme={theme}
                width="40%"
                margin="10px 0"
              />
              <FormControl
                sx={{
                  width: '40%',
                  margin: '10px 0',
                  '& label.Mui-focused': {
                    color: `${
                      theme.palette.mode === 'dark' ? colors.grey[200] : '#202020'
                    }`,
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: `${
                      theme.palette.mode === 'dark' ? colors.grey[200] : '#202020'
                    }`,
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: `${
                        theme.palette.mode === 'dark' ? colors.grey[200] : '#202020'
                      }`,
                    },
                    '&:hover fieldset': {
                      borderColor: `${
                        theme.palette.mode === 'dark' ? colors.grey[200] : '#202020'
                      }`,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: `${
                        theme.palette.mode === 'dark' ? colors.grey[200] : '#202020'
                      }`,
                    },
                  },
                }}
              >
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  label="Role"
                  onChange={handleChange}
                  sx={{
                    '&:focus': {
                      borderRadius: 4,
                      borderColor: '#80bdff',
                      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
                    },
                  }}
                >
                  <MenuItem value="ADMIN">Administrator</MenuItem>
                  <MenuItem value="EMPLOYEE">Employee</MenuItem>
                </Select>
              </FormControl>
              <CssTextField
                label="Username"
                colors={colors}
                colorMode={colorMode}
                theme={theme}
                width="40%"
                margin="10px 0"
              />
              <CssTextField
                label="Password"
                colors={colors}
                colorMode={colorMode}
                theme={theme}
                width="40%"
                margin="10px 0"
                type="password"
              />
              <Button
                variant="primary"
                sx={{
                  width: '40%',
                  margin: '10px 0',
                  color: `${colors.primary[400]} !important`,
                  bgcolor: `${colors.greenAccent[500]} !important`,
                  fontWeight: 550,
                  fontSize: '1.05rem',
                }}
              >
                CREATE NOW
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default AddEmployees;
