import Header from 'components/Header';
import { Box, Button, Grid, MenuItem, TextField, useMediaQuery, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from 'theme';
import { mockDataInvoices } from 'mockData';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';

const initialValues = {
  bankName: '',
  accountNo: '',
  amount: 0,
  content: 'Transfer Money',
};
const phoneRegExp = /^0(\d{9})$/;
const checkoutSchema = yup.object().shape({
  content: yup.string().required('required'),
  bankName: yup.string().required('Select a bank!'),
  accountNo: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('required'),
  amount: yup.number().moreThan(0, 'Amount cannot less than 0').required('required'),
});
const ReceiverManagement = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const [name, setName] = useState('');
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
  ];
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="RECEIVER MANAGEMENT" subtitle="Manage receiver and adding new receiver" />
      </Box>
      <Grid container>
        <Grid item xs={5}>
          <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  mx={'auto'}
                  display="grid"
                  width={'80%'}
                  gap="15px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{ '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' } }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    select
                    label="Bank Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.bankName}
                    name="bankName"
                    error={!!touched.bankName && !!errors.bankName}
                    helperText={touched.bankName && errors.bankName}
                    sx={{ gridColumn: 'span 4' }}
                  >
                    <MenuItem key="1" value="Ngân hàng A">
                      Ngân hàng A
                    </MenuItem>
                    <MenuItem key="2" value="Ngân hàng B">
                      Ngân hàng B
                    </MenuItem>
                  </TextField>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Account No"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.accountNo}
                    name="accountNo"
                    error={!!touched.accountNo && !!errors.accountNo}
                    helperText={
                      !touched.accountNo ? '' : errors.accountNo ? errors.accountNo : name ? `Receiver: ${name}` : `Not found the receiver!`
                    }
                    sx={{ gridColumn: 'span 4' }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="number"
                    label="Amount"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.amount}
                    name="amount"
                    error={!!touched.amount && !!errors.amount}
                    helperText={touched.amount && errors.amount}
                    sx={{ gridColumn: 'span 4' }}
                    autoFocus
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    multiline
                    rows={3}
                    label="Content"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.content}
                    name="content"
                    error={!!touched.content && !!errors.content}
                    helperText={touched.content && errors.content}
                    sx={{ gridColumn: 'span 4' }}
                  />
                </Box>
                <Box mx="auto" width="80%" display="flex" justifyContent={`${isNonMobile ? 'end' : 'center'}`} my="20px">
                  <Button type="submit" color="secondary" variant="contained" size="large" onClick={handleFormSubmit}>
                    Add Receiver
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Grid>
        <Grid item xs={7}>
          <Box
            height="65vh"
            sx={{
              '& .MuiDataGrid-root': { border: 'none' },
              '& .MuiDataGrid-cell': { borderBottom: 'none' },
              '& .name-column--cell': { color: colors.greenAccent[300] },
              '& .MuiDataGrid-columnHeaders': { backgroundColor: colors.blueAccent[700], borderBottom: 'none' },
              '& .MuiDataGrid-virtualScroller': { backgroundColor: colors.primary[400] },
              '& .MuiDataGrid-footerContainer': { borderTop: 'none', backgroundColor: colors.blueAccent[700] },
              '& .MuiCheckbox-root': { color: `${colors.greenAccent[200]} !important` },
              '& .MuiTablePagination-selectLabel': { mb: '0 !important' },
              '& .MuiTablePagination-displayedRows': { mb: '0 !important' },
              '& .MuiDataGrid-toolbarContainer': { p: 0, gap: 0.5, m: '4px 0', borderRadius: 0 },
              '& .MuiButton-root': {
                height: '40px',
                weight: '72px',
                p: '8px 12px',
                backgroundColor: `${theme.palette.mode === 'dark' ? colors.grey[200] : colors.grey[700]}`,
                color: `${theme.palette.mode === 'light' && `#${colors.primary[400]}`}`,
                borderRadius: 0,
              },
              '& .MuiButton-root:hover': {
                height: '40px',
                weight: '72px',
                p: '8px 12px',
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
  );
};

export default ReceiverManagement;
