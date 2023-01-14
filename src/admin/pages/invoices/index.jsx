import { tokens } from 'theme';
import { mockDataInvoices } from 'mockData';
import { Box, TextField, Typography, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Header from 'components/Header/index.jsx';
// import Transactions from 'pages/transactions';
import { useGetAllTransactionsQuery, useGetTotalsByDateMutation, useGetTotalsQuery, useGetTransactionsMutation } from 'api/adminApi';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Sync } from '@mui/icons-material';
import { setTotals } from 'redux/slices/adminSlice';

const SUBMIT_FILTER_STROKE_TIME = 500;
function InputDateInterval(props) {
  const { item, applyValue, focusElementRef = null } = props;

  const [getTotalsByDate] = useGetTotalsByDateMutation();
  const filterTimeout = useRef();
  const [filterValueState, setFilterValueState] = useState('');
  const [applying, setIsApplying] = useState(false);

  useEffect(() => {
    return () => {
      clearTimeout(filterTimeout.current);
    };
  }, []);

  useEffect(() => {
    async function handleFilter() {
      const itemValue = item.value ?? ['', ''];
      setFilterValueState(itemValue);
      if (itemValue[0] === '' || itemValue[1] === '') return;

      const payload = await getTotalsByDate({ fromDate: itemValue[0], toDate: itemValue[1] }).unwrap();
      console.log(itemValue, payload);
    }

    handleFilter();
  }, [item.value, getTotalsByDate]);

  const updateFilterValue = (lowerBound, upperBound) => {
    clearTimeout(filterTimeout.current);
    setFilterValueState([lowerBound, upperBound]);

    setIsApplying(true);
    filterTimeout.current = setTimeout(() => {
      setIsApplying(false);
      applyValue({ ...item, value: [lowerBound, upperBound] });
    }, SUBMIT_FILTER_STROKE_TIME);
  };

  const handleUpperFilterChange = (event) => {
    const newUpperBound = event.target.value;
    updateFilterValue(filterValueState[0], newUpperBound);
  };
  const handleLowerFilterChange = (event) => {
    const newLowerBound = event.target.value;
    updateFilterValue(newLowerBound, filterValueState[1]);
  };

  return (
    <Box sx={{ alignItems: 'flex-end', height: 48, flex: 1, mx: 1 }}>
      <TextField
        fullWidth
        name="lower-bound-input"
        placeholder="From"
        label="From"
        variant="standard"
        value={String(filterValueState[0])}
        onChange={handleLowerFilterChange}
        type="date"
        format="dd-mm-yyyy"
        inputRef={focusElementRef}
        sx={{ flex: 1, '& .MuiFormLabel-root.Mui-focused': { color: '#c3c7d2 !important' } }}
      />
      <TextField
        fullWidth
        name="upper-bound-input"
        placeholder="To"
        label="To"
        variant="standard"
        value={String(filterValueState[1])}
        onChange={handleUpperFilterChange}
        type="date"
        sx={{ flex: 1, '&  .MuiFormLabel-root.Mui-focused': { color: '#c3c7d2 !important' } }}
      />
    </Box>
  );
}

const quantityOnlyOperators = [
  {
    label: 'Between',
    value: 'between',
    getApplyFilterFn: (filterItem) => {
      if (!Array.isArray(filterItem.value) || filterItem.value.length !== 2) {
        return null;
      }

      if (filterItem.value[0] == null || filterItem.value[1] == null) {
        return null;
      }

      const filter = { value: [] };
      filter.value.push(filterItem.value[0].split('-').reverse().join('-'));
      filter.value.push(filterItem.value[1].split('-').reverse().join('-'));

      return ({ value }) => value !== null && filter.value[0] <= value && value <= filter.value[1];
    },
    InputComponent: InputDateInterval,
  },
];

const Employees = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useGetTotalsQuery({}, { refetchOnMountOrArgChange: true });
  useGetAllTransactionsQuery();
  const { transactions, totalAmounts } = useSelector((state) => state.admin);
  const columns = [
    // { field: '_id', headerName: 'ID', flex: 1 },
    { field: 'fromAccountNumber', headerName: 'From', flex: 0.7, valueGetter: (params) => '####' + params.row?.fromAccountNumber.slice(-4) },
    { field: 'fromAccountOwnerName', headerName: 'From Name', flex: 1.3 },
    { field: 'toAccountNumber', headerName: 'To', flex: 0.7, valueGetter: (params) => '####' + params.row?.toAccountNumber.slice(-4) },
    { field: 'toAccountOwnerName', headerName: 'To Name', flex: 1.3 },
    { field: 'bankCode', headerName: 'Bank', flex: 1 },
    {
      field: 'feePaymentMethod',
      headerName: 'Fee Payment',
      flex: 1,
      valueGetter: (params) =>
        params.row?.feePaymentMethod === undefined ? '' : params.row?.feePaymentMethod === 'paid receiver' ? 'Receiver' : 'Sender',
    },
    { field: 'amount', headerName: 'Amount', flex: 0.8, valueGetter: (params) => params?.row?.amount.toLocaleString('en-US') },
    { field: 'fee', headerName: 'Fee', valueGetter: (params) => params?.row?.fee.toLocaleString('en-US') },
    { field: 'status', headerName: 'Status', flex: 0.7 },
    {
      field: 'time',
      headerName: 'Time',
      flex: 0.8,
      valueGetter: (params) => params.row?.time.split('T')[0].split('-').reverse().join('-'),
      filterOperators: quantityOnlyOperators,
    },
    { field: 'type', headerName: 'Interbank', flex: 0.5, valueGetter: (params) => (params?.row?.interbankData ? 'Yes' : 'No') },
  ];

  // console.log(transactions, totalAmounts);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Invoices" subtitle="Managing the bank invoices" />
        {/* {JSON.stringify(totalAmounts)} */}
        <Box display="flex" flexDirection="column" mx="2" gap="1">
          <Typography variant="h4" color={colors.greenAccent[500]}>
            Total transfer:
            <Typography variant="h4" component={'span'} color={colors.red[800]} ml={1}>
              {totalAmounts.sendPayload?.totalAmount?.toLocaleString('en-US') || 0}
            </Typography>
          </Typography>
          <Typography variant="h4" color={colors.greenAccent[500]}>
            Total receive:
            <Typography variant="h4" component={'span'} color={colors.red[800]} ml={1}>
              {totalAmounts.receivePayload?.totalAmount?.toLocaleString('en-US') || 0}
            </Typography>
          </Typography>
        </Box>
      </Box>

      <Box
        m="1.5rem 0"
        height="75vh"
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
            color: `${theme.palette.mosde === 'light' && `#${colors.primary[300]}`}`,
            borderRadius: 0,
          },
          '& .MuiDataGrid-panelContent': {
            width: '600px',
          },
        }}
      >
        <DataGrid rows={transactions || []} columns={columns} components={{ Toolbar: GridToolbar }} getRowId={(row) => row._id} />
      </Box>
    </Box>
  );
};

export default Employees;
