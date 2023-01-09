import Header from 'components/Header';
import { tokens } from 'theme';
import { mockDataTeam } from 'mockData';
import { Box, Button, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { AddOutlined, LinkOffOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const BankDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'code',
      headerName: 'Code',
      flex: 1,
    },
    {
      field: 'secretKey',
      headerName: 'Secret Key',
      flex: 1,
    },
    {
      field: 'publicKey',
      headerName: 'Public Key',
      flex: 1,
    },
    {
      field: 'queryAPI',
      headerName: 'Query API',
      flex: 1,
    },
    {
      field: 'transferAPI',
      headerName: 'Transfer API',
      flex: 1,
    },
    {
      field: 'Controls',
      headerName: 'Controls',
      flex: 1,
      headerAlign: 'left',
      align: 'left',
      renderCell: ({ row: { id } }) => {
        return (
          <Box display="flex" justifyContent="center" borderRadius="4px" gap={2}>
            {/* <Button
              variant="primary"
              sx={{
                color: `${'white'} !important`,
                bgcolor: `${colors.blue[700]} !important`,
                fontWeight: 550,
              }}
            >
              <EditOutlined />
            </Button> */}
            <Button
              variant="primary"
              sx={{
                color: `${'white'} !important`,
                bgcolor: `${colors.red[500]} !important`,
                fontWeight: 550,
              }}
            >
              <LinkOffOutlined />
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="BANKS DETAIL" subtitle="Banks management and cooperations" />
        <Box>
          <Link to="/admin/banks/add">
            <Button
              variant="primary"
              sx={{
                color: `${colors.primary[400]} !important`,
                bgcolor: `${colors.greenAccent[500]} !important`,
                fontWeight: 550,
                fontSize: '1.05rem',
              }}
              startIcon={<AddOutlined />}
            >
              REQUEST LINK A BANK
            </Button>
          </Link>
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
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default BankDetails;
