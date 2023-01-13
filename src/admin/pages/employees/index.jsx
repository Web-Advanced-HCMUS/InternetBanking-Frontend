import { tokens } from 'theme';
import { mockDataTeam } from 'mockData';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridRowModes } from '@mui/x-data-grid';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from 'components/Header';
import { AddOutlined, CancelOutlined, ContactlessOutlined, DeleteOutline, EditOutlined, SaveOutlined, UpdateRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDeleteEmployeeMutation, useGetEmployeesQuery, useUpdateEmployeeMutation } from 'api/adminApi';
import { useState } from 'react';
import Toastify from 'components/Toastify';
import { Navigate, useNavigate } from 'react-router';

const Employees = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data: employees, isLoading, refetch } = useGetEmployeesQuery({}, { refetchOnMountOrArgChange: true });
  const [deleteEmp, { isLoading: deleteEmpLoading }] = useDeleteEmployeeMutation({}, { refetchOnMountOrArgChange: true });
  const [updateEmp, { isLoading: updateEmpLoading }] = useUpdateEmployeeMutation({}, { refetchOnMountOrArgChange: true });
  const [rows, setRows] = useState(employees?.payload || []);
  const [rowModesModel, setRowModesModel] = useState({});
  const [error, setError] = useState({ message: '', severity: '' });
  const [addStatus, setAddStatus] = useState({ message: '', severity: '' });
  const navigate = useNavigate();
  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = async (params, event) => {
    event.defaultMuiPrevented = true;
    const { _id, username } = params;
    console.log(event, _id, username);
    // try {
    //   const body = { ...employees?.payload.find((row) => row._id === _id) };
    //   // console.log(_id, empId, { ...employees?.payload.find((row) => row._id === _id) });
    //   console.log(body);
    //   setAddStatus({ message: '', severity: '' });

    //   await updateEmp({ empId, ...body })
    //     .unwrap()
    //     .then((data) => {
    //       console.log({ data });
    //       setAddStatus({ message: 'Update successfully', severity: 'success' });
    //     })
    //     .catch((error) => {
    //       console.log(error.data.errors.message);
    //       setAddStatus({ message: error.data.errors.message, severity: 'error' });
    //     });
    // } catch (err) {
    //   if (!err?.status) {
    //     setError('Interval Server Error');
    //   } else {
    //     console.log(err);
    //     setError('Failed to update employee!');
    //   }
    // }
    // refetch();
  };

  const handleEditClick = (_id) => () => {
    setRowModesModel({ ...rowModesModel, [_id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (_id, empId) => async () => {
    setRowModesModel({ ...rowModesModel, [_id]: { mode: GridRowModes.View } });
    console.log(_id, empId, { ...employees?.payload.filter((item) => item._id === _id) });
  };

  const handleDeleteClick = (_id) => async () => {
    setAddStatus({ message: '', severity: '' });

    try {
      setRows(rows.filter((row) => row.userId?.empId !== _id));
      await deleteEmp({ _id })
        .unwrap()
        .then((data) => {
          console.log({ data });
          setAddStatus({ message: 'Delete successfully', severity: 'success' });
        })
        .catch((error) => {
          console.log(error.data.errors.message);
          setAddStatus({ message: error.data.errors.message, severity: 'error' });
        });
    } catch (err) {
      if (!err?.status) {
        setError('Interval Server Error');
      } else {
        console.log(err);
        setError('Failed to delete employee!');
      }
    }
    refetch();
  };

  const handleCancelClick = (_id) => () => {
    setRowModesModel({ ...rowModesModel, [_id]: { mode: GridRowModes.View, ignoreModifications: true } });

    const editedRow = rows.find((row) => row._id === _id);
    if (editedRow && editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== _id));
    }
  };

  const processRowUpdate = async (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    // console.log(updatedRow);
    try {
      const { email, phone, identityCard, address } = updatedRow;
      const { empId } = updatedRow?.userId;

      setAddStatus({ message: '', severity: '' });
      await updateEmp({ empId, email, phone, identityCard, address })
        .unwrap()
        .then((data) => {
          console.log({ data });
          setAddStatus({ message: 'Update successfully', severity: 'success' });
        })
        .catch((error) => {
          console.log(error.data.errors.message);
          setAddStatus({ message: error.data.errors.message, severity: 'error' });
        });
    } catch (err) {
      if (!err?.status) {
        setError('Interval Server Error');
      } else {
        console.log(err);
        setError('Failed to update employee!');
      }
    }
    refetch();
    return updatedRow;
  };

  const columns = [
    // { field: 'userId._id', headerName: 'ID', flex: 1, valueGetter: (params) => params.row?.userId?._id },
    { field: 'username', headerName: 'Name', cellClassName: 'name-column--cell' },
    { field: 'identityCard', headerName: 'Identity', flex: 1, valueGetter: (params) => params.row?.userId?.identityCard, editable: true },
    { field: 'gender', headerName: 'Gender', valueGetter: (params) => params.row?.userId?.gender },
    { field: 'address', headerName: 'Address', flex: 1.5, valueGetter: (params) => params.row?.userId?.address, editable: true },
    { field: 'dateOfBirth', headerName: 'Date of Birth', flex: 1, valueGetter: (params) => params.row?.userId?.dateOfBirth, editable: true },
    { field: 'phone', headerName: 'Phone Number', flex: 1, valueGetter: (params) => params.row?.userId?.phone, editable: true },
    { field: 'email', headerName: 'Email', flex: 2, valueGetter: (params) => params.row?.userId?.email, editable: true },
    {
      field: 'userId.role',
      headerName: 'Access Level',
      flex: 2,
      valueGetter: (params) => params.row?.userId?.role,
      renderCell: ({
        row: {
          userId: { role },
        },
      }) => (
        <Box
          width="60%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          backgroundColor={role === 'ADMIN' ? colors.greenAccent[600] : role === 'EMPLOYEE' ? colors.greenAccent[700] : colors.greenAccent[700]}
          borderRadius="4px"
        >
          {role === 'ADMIN' && <AdminPanelSettingsOutlinedIcon />}
          {role === 'EMPLOYEE' && <SecurityOutlinedIcon />}
          {role === 'CLIENT' && <LockOpenOutlinedIcon />}
          <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
            {role}
          </Typography>
        </Box>
      ),
    },
    // {
    //   field: 'Controls',
    //   headerName: 'Controls',
    //   flex: 1,
    //   renderCell: ({
    //     row: {
    //       userId: { role },
    //     },
    //   }) => {
    //     return (
    //       <Box display="flex" justifyContent="center" borderRadius="4px" gap={2}>
    //         <Button
    //           variant="primary"
    //           sx={{
    //             color: `${'white'} !important`,
    //             bgcolor: `${colors.blue[700]} !important`,
    //             fontWeight: 550,
    //           }}
    //         >
    //           <EditOutlined />
    //         </Button>
    //         <Button
    //           variant="primary"
    //           sx={{
    //             color: `${'white'} !important`,
    //             bgcolor: `${colors.red[500]} !important`,
    //             fontWeight: 550,
    //           }}
    //         >
    //           <DeleteOutline />
    //         </Button>
    //       </Box>
    //     );
    //   },
    // },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      cellClassName: 'actions',
      getActions: ({
        row: {
          _id,
          userId: { empId },
        },
      }) => {
        const isInEditMode = rowModesModel[_id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem icon={<SaveOutlined />} label="Save" onClick={handleSaveClick(_id, empId)} />,
            <GridActionsCellItem icon={<CancelOutlined />} label="Cancel" className="textPrimary" onClick={handleCancelClick(_id)} color="inherit" />,
          ];
        }

        return [
          <GridActionsCellItem icon={<EditOutlined />} label="Edit" className="textPrimary" onClick={handleEditClick(_id)} color="inherit" />,
          <GridActionsCellItem icon={<DeleteOutline />} label="Delete" onClick={handleDeleteClick(empId)} color="inherit" />,
        ];
      },
    },
  ];

  const handleAdd = (e) => {
    e.preventDefault();
    navigate('/admin/employees/add');
  };
  // console.log(employees);
  return (
    <>
      {addStatus.message.length !== 0 && <Toastify message={addStatus.message} hidden={false} severity={addStatus.severity}></Toastify>}

      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="TEAM" subtitle="Managing the Team Members" />
          {/* {JSON.stringify(employees?.payload)} */}
          <Box>
            {/* <Link to="/admin/employees/add"> */}
            <Button
              onClick={handleAdd}
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
            {/* </Link> */}
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
          <DataGrid
            editMode="row"
            rowModesModel={rowModesModel}
            onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
            onRowEditStart={handleRowEditStart}
            onRowEditStop={handleRowEditStop}
            processRowUpdate={processRowUpdate}
            experimentalFeatures={{ newEditingApi: true }}
            // checkboxSelection
            rows={employees?.payload ? employees.payload : []}
            getRowId={(row) => row._id}
            columns={columns}
          />
        </Box>
      </Box>
    </>
  );
};

export default Employees;
