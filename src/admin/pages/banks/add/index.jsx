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

const AddBank = () => {
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
        <Box>
          <Sidebar />
        </Box>
        <Box display="flex" flexDirection="column" flexGrow={1} height="100%">
          <TopBar />
          <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Header
                title="REQUEST TO LINK A BANK"
                subtitle="Send request to new bank"
              />
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
                label="Code"
                colors={colors}
                colorMode={colorMode}
                theme={theme}
                width="40%"
                margin="10px 0"
              />
              <CssTextField
                label="Secret Key"
                colors={colors}
                colorMode={colorMode}
                theme={theme}
                width="40%"
                margin="10px 0"
                type="password"
              />
              <CssTextField
                label="Public Key"
                colors={colors}
                colorMode={colorMode}
                theme={theme}
                width="40%"
                margin="10px 0"
                type="password"
              />
              <CssTextField
                label="Query API"
                colors={colors}
                colorMode={colorMode}
                theme={theme}
                width="40%"
                margin="10px 0"
              />
              <CssTextField
                label="Transfer API"
                colors={colors}
                colorMode={colorMode}
                theme={theme}
                width="40%"
                margin="10px 0"
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
                REQUEST NOW
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default AddBank;
