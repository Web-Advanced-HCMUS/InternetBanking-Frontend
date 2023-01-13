import { AddOutlined, SettingsInputComponentOutlined } from '@mui/icons-material';
import { Box, Button, Divider, Grid, IconButton, Typography, useTheme } from '@mui/material';
import DebtBox from 'components/DebtBox';
import Header from 'components/Header';
import DebtPage from 'containers/DebtReminder';
import { tokens } from 'theme';
import DebtList from 'containers/DebtReminder/DebtList';
import OwnDebt from 'containers/DebtReminder/OwnDebt';
import AddDebt from 'containers/DebtReminder/AddDebt';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import DebtNotification from 'components/DebtNotification';

import { useGetAccountInforByIdMutation, useGetAccountInforMutation, useGetDebtListMutation } from 'api/debtApi';

const CustomerHome = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [myDebt, setMyDebt] = useState([]);
  const [debtPaid, setDebtPaid] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const [getDebtList] = useGetDebtListMutation();
  const [getAccountInfor] = useGetAccountInforMutation();
  const [getAccountInforById] = useGetAccountInforByIdMutation();

  const { accountNumber, currentBalance } = useSelector((state) => state.debt);

  // async function getAccountName(id) {
  //   return await getAccountInforById(id);
  // }

  async function getDebtData() {
    const info = await getAccountInfor().unwrap();

    const accountNum = info.payload.accounts[0].accountNumber;

    const [debtPaid, myDebt] = await Promise.all([
      getDebtList({ accountNumber: accountNum, debtType: 'creditor' }),
      getDebtList({ accountNumber: accountNum, debtType: 'debtor' }),
    ]);

    const debtP = debtPaid.data.payload.map((item, index) => {
      return { ...item, endDate: new Date(item.endDate).toLocaleDateString() };
    });
    const debt = myDebt.data.payload.map((item, index) => {
       return { ...item, endDate: new Date(item.endDate).toLocaleDateString() };
    });

    const newdebtP = debtP.filter((item)=> item.status === 'incomplete')
    const newdebt = debt.filter((item)=> item.status === 'incomplete')



    setMyDebt(newdebt);
    setDebtPaid(newdebtP);
  }

  useEffect(() => {
    getDebtData();
  }, []);

  const handleOpenAddModal = () => {
    setOpenModal(!openModal);
  };

  const handleAddDebt = (newItem) => {
    const newData = newItem.data.payload.data;
    //console.log(newData);
    const newDebt = [newData].concat(debtPaid);
    setDebtPaid(newDebt);
  };

  const handleCancelDebt = (newItem) => {
    //setDebtPaid(prevState => ({arr: [...prevState, ...newItem]}))
    //console.log(newItem.data.payload.debt);
    const outData = newItem.data.payload.debt;

    const newMyDebt = myDebt.filter((item) => item._id !== outData._id);
    //console.log(newMyDebt);

    setTimeout(setMyDebt(newMyDebt),100000);
  };

  const handleCancelDebt2 = (newItem) => {
    //setDebtPaid(prevState => ({arr: [...prevState, ...newItem]}))
    //console.log(newItem.data.payload.debt);
    const outData = newItem.data.payload.debt;

    const newDebtPaid = debtPaid.filter((item) => item._id !== outData._id);
    //console.log(newDebtPaid);

    setDebtPaid(newDebtPaid);
  };

  const handleCancelDebt3 = (newItem) => {
    //setDebtPaid(prevState => ({arr: [...prevState, ...newItem]}))
    //console.log(newItem.data.payload.data);
    const outData = newItem.data.payload.data;

    const newMyDebt = myDebt.filter((item) => item._id !== outData._id);
    //console.log(newMyDebt);

    setMyDebt(newMyDebt);
  };

  useEffect(() => {
    //console.log(debtPaid);
  }, [debtPaid]);

  //console.log(accountNumber + ' ' + currentBalance);

  return (
    <Box m="20px">
      {openModal && <AddDebt open={openModal} accountNumber={accountNumber} handleAddDebt={handleAddDebt} />}
      {/* <DebtNotification/> */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DEBT MANAGEMENT" subtitle="Manage debt transactions and create a debt" />

        <Button
          sx={{
            backgroundColor: colors.red[700],
            color: colors.greenAccent[300],
            fontSize: '14px',
            fontWeight: 'bold',
            padding: '10px 20px',
            ':hover': {
              backgroundColor: colors.primary[400],
              color: colors.grey[100],
            },
          }}
          onClick={handleOpenAddModal}
        >
          <AddOutlined sx={{ mr: '10px' }} />
          Add Debt
        </Button>
      </Box>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6} md={12}>
          <Box backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
            <DebtBox colors={colors} title="MY BALANCE" amount={currentBalance} />
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
            <DebtBox colors={colors} title="ACCOUNT NUMBER" amount={accountNumber} />
          </Box>
        </Grid>
        {/* <Grid item xs={12} md={4}>
          <Box backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
            <DebtBox colors={colors} title="TOTAL PAYMENT" amount="30.000.000.000" />
          </Box>
        </Grid> */}
      </Grid>

      {/* <DebtPage /> */}

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box
            display={'flex'}
            flexDirection="column"
            bgcolor={colors.primary[400]}
            color={colors.grey[100]}
            boxShadow="0px 0px 5px #C3C3C3"
            my="1.5rem"
            mx="3.5rem"
          >
            <Box fontWeight={'600'} fontSize="1.2rem" color={colors.greenAccent[500]} my={1} mx={2}>
              Your Debt
            </Box>
            <Divider />
            <Box display={'flex'} flexDirection="column" p="1rem" gap={'10px'} maxHeight="325px" sx={{ overflowY: 'scroll' }}>
              {myDebt.length === 0 ? (
                <Box>Bạn chưa có nhắc nợ ai</Box>
              ) : (
                myDebt.map((debt, index) => (
                  <OwnDebt key={index} debt={debt} handleCancelDebt={handleCancelDebt} handlePayForDebt={handleCancelDebt3} />
                ))
              )}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            display={'flex'}
            flexDirection="column"
            bgcolor={colors.primary[400]}
            color={colors.grey[100]}
            boxShadow="0px 0px 5px #C3C3C3"
            my="1.5rem"
            mx="3.5rem"
          >
            <Box fontWeight={'600'} fontSize="1.2rem" color={colors.greenAccent[500]} my={1} mx={2}>
              Debt Paid
            </Box>
            <Divider />
            <Box display={'flex'} flexDirection="column" p="1rem" gap={'10px'} maxHeight="325px" sx={{ overflowY: 'scroll' }}>
              {debtPaid.length === 0 ? (
                <Box>Bạn chưa có nhắc nợ ai</Box>
              ) : (
                debtPaid.map((debt, index) => <DebtList key={index} debt={debt} handleCancelDebt={handleCancelDebt2} />)
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerHome;
