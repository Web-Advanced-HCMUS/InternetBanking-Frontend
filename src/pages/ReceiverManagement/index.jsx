import { tokens } from 'theme';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridRowModes } from '@mui/x-data-grid';
import Header from 'components/Header';
import { AddOutlined, CancelOutlined, ContactlessOutlined, DeleteOutline, EditOutlined, SaveOutlined, UpdateRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Toastify from 'components/Toastify';
import { Navigate, useNavigate } from 'react-router';
import { useGetRecipientListQuery, useInsertRecipientMutation, useUpdateRecipientMutation, useDeleteRecipientMutation } from 'api/recipientApi';
import { useSelector } from 'react-redux';
import AddRecipientDialog from './add';
const Employees = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { userId } = useSelector((state) => state.auth.loggedInUser);
  const { data: recipients, isLoading, refetch } = useGetRecipientListQuery(userId, { refetchOnMountOrArgChange: true });
  const [deleteRecipient, { isLoading: deleteRecipientLoading }] = useDeleteRecipientMutation({}, { refetchOnMountOrArgChange: true });
  const [updateRecipient, { isLoading: updateRecipientLoading }] = useUpdateRecipientMutation({}, { refetchOnMountOrArgChange: true });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [rows, setRows] = useState(recipients?.payload || []);
  const [rowModesModel, setRowModesModel] = useState({});
  const [error, setError] = useState({ message: '', severity: '' });
  const [addStatus, setAddStatus] = useState({ message: '', severity: '' });
  const navigate = useNavigate();
  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };
  const handleDialogClose = (event, reason) => {
    if (reason && reason === 'backdropClick') return;
    setDialogOpen(false);
  };

  const handleRowEditStop = async (params, event) => {
    event.defaultMuiPrevented = true;
    const { _id } = params;
    console.log(event, _id);
  };

  const handleEditClick = (_id) => () => {
    setRowModesModel({ ...rowModesModel, [_id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (_id) => async () => {
    setRowModesModel({ ...rowModesModel, [_id]: { mode: GridRowModes.View } });
    console.log(_id, { ...recipients?.payload.filter((item) => item._id === _id) });
  };

  const handleDeleteClick = (_id) => async () => {
    setAddStatus({ message: '', severity: '' });

    try {
      await deleteRecipient(_id)
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
    console.log(updatedRow);
    try {
      const { _id, reminiscentName } = updatedRow;
      setAddStatus({ message: '', severity: '' });
      await updateRecipient({ id: _id, body: reminiscentName })
        .unwrap()
        .then((data) => {
          console.log({ data });
          setAddStatus({ message: 'Update successfully', severity: 'success' });
        })
        .catch((error) => {
          console.log(error);
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
    { field: '_id', headerName: 'ID Recipient', flex: 1, cellClassName: 'name-column--cell' },
    { field: 'accountNumber', headerName: 'Account Number', flex: 1, valueGetter: (params) => params.row?.accountNumber, editable: false },
    { field: 'reminiscentName', headerName: 'Reminiscent name', flex: 2, valueGetter: (params) => params.row?.reminiscentName, editable: true },
    { field: 'type', headerName: 'Type User', flex: 0.5, valueGetter: (params) => params.row?.type, editable: false },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      cellClassName: 'actions',
      getActions: ({ row: { _id } }) => {
        const isInEditMode = rowModesModel[_id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem icon={<SaveOutlined />} label="Save" onClick={handleSaveClick(_id)} />,
            <GridActionsCellItem icon={<CancelOutlined />} label="Cancel" className="textPrimary" onClick={handleCancelClick(_id)} color="inherit" />,
          ];
        }

        return [
          <GridActionsCellItem icon={<EditOutlined />} label="Edit" className="textPrimary" onClick={handleEditClick(_id)} color="inherit" />,
          <GridActionsCellItem icon={<DeleteOutline />} label="Delete" onClick={handleDeleteClick(_id)} color="inherit" />,
        ];
      },
    },
  ];

  const handleAdd = (e) => {
    setDialogOpen(true);
    console.log(dialogOpen);
  };
  // console.log(employees);
  return (
    <>
      {addStatus.message.length !== 0 && <Toastify message={addStatus.message} hidden={false} severity={addStatus.severity}></Toastify>}

      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="BENEFICIARIES" subtitle="Managing the Beneficiaries of you" />
          {/* {JSON.stringify(employees?.payload)} */}
          <Box>
            <AddRecipientDialog sx={{ marginBottom: 3 }}></AddRecipientDialog>
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
            rows={recipients?.payload ? recipients.payload : []}
            getRowId={(row) => row._id}
            columns={columns}
          />
        </Box>
      </Box>
    </>
  );
};

export default Employees;
