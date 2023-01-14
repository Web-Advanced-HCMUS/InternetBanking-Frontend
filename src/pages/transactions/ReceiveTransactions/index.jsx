import { tokens } from 'theme.js';
import { mockDataInvoices } from 'mockData.js';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useGetTransactionOfAccountReceiveQuery } from 'api/transactionApi';
import { useSelector } from 'react-redux';
import { useGetAccountPaymentQuery } from 'api/accountApi';
import Loading from 'containers/Loading';

const ReceiveTransactions = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { accountNumber } = useSelector((state) => state.account.payment.payload);
  // console.log(accountNumber);
  const {
    data: transactions,
    isLoading,
    isSuccess,
    refetch,
  } = useGetTransactionOfAccountReceiveQuery({ accountNumber, type: 'receive' }, { refetchOnMountOrArgChange: true });

  const columns = [
    { field: '_id', headerName: 'ID', flex: 1 },
    {
      field: 'fromAccountNumber',
      headerName: 'From AccountNumbet',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'fromAccountOwnerName',
      headerName: 'From Account Name',
      headerAlign: 'left',
      align: 'left',
      flex: 1,
    },
    {
      field: 'toAccountNumber',
      headerName: 'Account Bank Account',
      flex: 1,
    },
    {
      field: 'toAccountOwnerName',
      headerName: 'To Account Name',
      flex: 1,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      flex: 1,
    },
    {
      field: 'time',
      headerName: 'At Time',
      flex: 1,
    },
  ];

  return (
    <Box
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
      <Loading open={isLoading} />
      {isSuccess && (
        <DataGrid
          rows={transactions?.payload ? transactions.payload : []}
          getRowId={(row) => row._id}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      )}
    </Box>
  );
};

export default ReceiveTransactions;
