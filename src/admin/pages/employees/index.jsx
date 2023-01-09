import { tokens } from 'theme';
import { mockDataTeam } from 'mockData';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from 'components/Header';
import { AddOutlined, DeleteOutline, EditOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Employees = () => {
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
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'accessLevel',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={access === 'admin' ? colors.greenAccent[600] : access === 'manager' ? colors.greenAccent[700] : colors.greenAccent[700]}
            borderRadius="4px"
          >
            {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'user' && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: 'Controls',
      headerName: 'Controls',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box display="flex" justifyContent="center" borderRadius="4px" gap={2}>
            <Button
              variant="primary"
              sx={{
                color: `${'white'} !important`,
                bgcolor: `${colors.blue[700]} !important`,
                fontWeight: 550,
              }}
            >
              <EditOutlined />
            </Button>
            <Button
              variant="primary"
              sx={{
                color: `${'white'} !important`,
                bgcolor: `${colors.red[500]} !important`,
                fontWeight: 550,
              }}
            >
              <DeleteOutline />
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TEAM" subtitle="Managing the Team Members" />
        <Box>
          <Link to="/admin/employees/add">
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
              ADD NEW
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

export default Employees;
