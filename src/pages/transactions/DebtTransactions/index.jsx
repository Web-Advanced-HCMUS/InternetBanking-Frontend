import { tokens } from 'theme';
import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Header from 'components/Header';
import { Search } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useGetAccountInforByIdMutation, useGetAccountInforMutation, useGetDebtListMutation } from 'api/debtApi';

const CustomerTransactions = () => {
  const theme = useTheme();

  const [myDebt, setMyDebt] = useState([]);

  const [getDebtList] = useGetDebtListMutation();
  const [getAccountInfor] = useGetAccountInforMutation();
  const [getAccountInforById] = useGetAccountInforByIdMutation();

  useEffect(() => {
    async function getTransactionData() {
      const info = await getAccountInfor().unwrap();

      const accountNum = info.payload.accounts[0].accountNumber;

      const [debtPaid, myDebt] = await Promise.all([
        getDebtList({ accountNumber: accountNum, debtType: 'creditor' }),
        getDebtList({ accountNumber: accountNum, debtType: 'debtor' }),
      ]);

      const debtP = debtPaid.data.payload.map((item, index) => {
        return { ...item, startDate: new Date(item.startDate).toLocaleDateString(), endDate: new Date(item.endDate).toLocaleDateString(), id: index };
      });
      const debt = myDebt.data.payload.map((item, index) => {
        return {
          ...item,
          startDate: new Date(item.startDate).toLocaleDateString(),
          endDate: new Date(item.endDate).toLocaleDateString(),
          id: index + debtPaid.length,
        };
      });
      setMyDebt([...debtP, ...debt]);
    }

    getTransactionData();
  }, []);

  const colors = tokens(theme.palette.mode);

  const debtColumns = [
    { field: 'creditorAccountNumber', headerName: 'Creditor', flex: 1 },
    {
      field: 'debtorAccountNumber',
      headerName: 'Debtor',
      flex: 1,
    },
    {
      field: 'amountOwed',
      headerName: 'Amount',
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
    },
    {
      field: 'startDate',
      headerName: 'Start Date',
      flex: 1,
    },
    {
      field: 'endDate',
      headerName: 'End Date',
      flex: 1,
    },
  ];
  //console.log(transactionsList);
  console.log(myDebt);

  return (
    <Box height="60vh">
      <Box>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Box
              m="1.5rem 0"
              height="60vh"
              sx={{
                '& .MuiDataGrid-root': {
                  border: 'none',
                },
                '& .MuiDataGrid-cell': {
                  borderBottom: 'none',
                },
                '& .name-column--cell': {
                  color: colors.greenAccent[300],
                },
                '& .MuiDataGrid-columnHeaders': {
                  backgroundColor: colors.blueAccent[700],
                  borderBottom: 'none',
                },
                '& .MuiDataGrid-virtualScroller': {
                  backgroundColor: colors.primary[400],
                },
                '& .MuiDataGrid-footerContainer': {
                  borderTop: 'none',
                  backgroundColor: colors.blueAccent[700],
                },
                '& .MuiCheckbox-root': {
                  color: `${colors.greenAccent[200]} !important`,
                },
                '& .MuiTablePagination-selectLabel': {
                  marginBottom: '0 !important',
                },
                '& .MuiTablePagination-displayedRows': {
                  marginBottom: '0 !important',
                },
                '& .MuiDataGrid-toolbarContainer': {
                  padding: 0,
                  gap: 0.5,
                  margin: '4px 0',
                  borderRadius: 0,
                },
                '& .MuiButton-root': {
                  height: '40px',
                  weight: '72px',
                  padding: '8px 12px',
                  backgroundColor: `${theme.palette.mode === 'dark' ? colors.grey[200] : colors.grey[700]}`,
                  color: `${theme.palette.mode === 'light' && `#${colors.primary[400]}`}`,
                  borderRadius: 0,
                },
                '& .MuiButton-root:hover': {
                  height: '40px',
                  weight: '72px',
                  padding: '8px 12px',
                  backgroundColor: `${theme.palette.mode === 'dark' ? colors.grey[200] : colors.grey[800]}`,
                  color: `${theme.palette.mode === 'light' && `#${colors.primary[300]}`}`,
                  borderRadius: 0,
                },
              }}
            >
              <DataGrid rows={myDebt} columns={debtColumns}   components={{ Toolbar: GridToolbar }}
/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CustomerTransactions;
