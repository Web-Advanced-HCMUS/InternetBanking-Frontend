import { Box, Tab, Tabs, Typography, useTheme } from '@mui/material';
import Header from 'components/Header';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { tokens } from 'theme';
import DebtTransactions from './DebtTransactions';
import ReceiveTransactions from './ReceiveTransactions';
import TransferTransactions from './TransferTransactions';

const TabPanel = ({ children, value, index, ...other }) => (
  <Box role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
    {value === index && (
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </Box>
);

const a11yProps = (index) => ({ id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}` });

const Transactions = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { idx } = useParams();
  const [value, setValue] = useState((parseInt(idx) > 3 && parseInt(idx) < 0) || !!!idx ? 0 : parseInt(idx));
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TRANSACTION" subtitle="All transactions of you" />
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          TabIndicatorProps={{ style: { backgroundColor: '#D97D54' } }}
          value={value}
          variant="fullWidth"
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor={colors.greenAccent[500]}
          sx={{
            '& .MuiTab-root:hover': { bgcolor: `${colors.primary[400]}` },
            '& .MuiTab-root.Mui-selected': { color: `${colors.greenAccent[500]}` },
          }}
        >
          <Tab label="Receive Transactions" {...a11yProps(0)} />
          <Tab label="Transfer Transactions" {...a11yProps(1)} />
          <Tab label="Debt Transactions" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel colors={colors} value={value} index={0}>
        <ReceiveTransactions />
      </TabPanel>
      <TabPanel colors={colors} value={value} index={1}>
        <TransferTransactions />
      </TabPanel>
      <TabPanel colors={colors} value={value} index={2}>
        <DebtTransactions />
      </TabPanel>
    </Box>
  );
};

export default Transactions;
