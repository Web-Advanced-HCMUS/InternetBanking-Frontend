import { tokens } from 'theme';
import { mockDataInvoices } from 'mockData';
import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from 'components/Header';
import { Search } from '@mui/icons-material';

const CustomerTransactions = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'email',
      headerName: 'Email',
      headerAlign: 'left',
      align: 'left',
      flex: 1,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
    },
    {
      field: 'phone',
      headerName: 'Number Phone',
      flex: 1,
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="CUSTOMER TRANSACTIONS" subtitle="Managing transactions of a customer" />
      </Box>
      <Box display="flex" alignItems="center" gap="10px">
        <Box display="flex" bgcolor={colors.primary[400]} borderRadius="3px">
          <InputBase sx={{ flex: 1, width: '450px', px: 2, py: 1 }} placeholder="Search by Username or Account No" />
          <IconButton type="button" sx={{ p: 2, '&:hover': { borderRadius: 0 } }}>
            <Search />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item md={4}>
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
              <DataGrid rows={mockDataInvoices} columns={columns} />
            </Box>
          </Grid>
          <Grid item md={4}>
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
              <DataGrid rows={mockDataInvoices} columns={columns} />
            </Box>
          </Grid>
          <Grid item md={4}>
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
              <DataGrid rows={mockDataInvoices} columns={columns} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CustomerTransactions;
