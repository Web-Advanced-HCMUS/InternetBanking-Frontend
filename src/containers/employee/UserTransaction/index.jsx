import * as React from 'react';
import {
  Box,
  Button,
  Typography,
  TextField,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { ArrowBack } from '@mui/icons-material';

import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';

import { visuallyHidden } from '@mui/utils';

import { useNavigate, useLocation } from 'react-router-dom';

function descendingComparator(a, b, orderBy) {

  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [
    el,
    index,
  ]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])

    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'date',
    disablePadding: true,
    sort: true,
    label: 'Ngày giao dịch',
  },
  {
    id: 'amount',
    disablePadding: false,
    sort: false,
    label: 'Số tiền',
  },
  {
    id: 'type',
    disablePadding: false,
    sort: false,
    label: 'Loại giao dịch',
  },
  {
    id: 'account',
    disablePadding: false,
    sort: false,
    label: 'Tài khoản đến',
  },
  {
    id: 'bank',
    disablePadding: false,
    sort: false,
    label: 'Ngân hàng đến',
  },
  {
    id: 'status',
    disablePadding: false,
    sort: false,
    label: 'Trạng thái',
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={'normal'}
            style={{ fontWeight: 'bold', fontSize: '1rem' }}
            sortDirection={
              orderBy === headCell.id ? order : false
            }
          >
            {headCell.sort ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={
                  orderBy === headCell.id ? order : 'asc'
                }
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              <div>{headCell.label}</div>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function UserTransaction() {
  const navigate = useNavigate();
  const {state} = useLocation();
  console.log(state)


  const data = [
    {
      date: '24/10/2022',
      amount: '2000000',
      type: 'Thanh toán nợ',
      account: '288138945959',
      bank: 'Agribank',
      status: 'success',
    },
    {
      date: '14/10/2022',
      amount: '1000000',
      type: 'Chuyển khoản',
      account: '348421995959',
      bank: 'Sacombank',
      status: 'success',
    },
    {
      date: '01/12/2021',
      amount: '2420000',
      type: 'Nhận tiền',
      account: '797908508923',
      bank: 'Agribank',
      status: 'success',
    },
    {
      date: '01/10/2022',
      amount: '44230000',
      type: 'Nhận tiền',
      account: '797908508923',
      bank: 'Agribank',
      status: 'success',
    },
    {
      date: '11/10/2022',
      amount: '184230000',
      type: 'Chuyển khoản',
      account: '797908508923',
      bank: 'Agribank',
      status: 'error',
    },
  ];

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('id');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [term, setTerm] = React.useState('');

  const handleBack = () => {
    navigate('/employee');
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const changeTerm = (event) => {
    setTerm(event.target.value);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - data.length)
      : 0;

  return (
    <>
      <Box
        display={'flex'}
        flexDirection="column"
        alignItems="center"
      >
        <Box
          display={'flex'}
          flexDirection="row"
          width={'80%'}
          justifyContent="space-between"
          alignItems="center"
        >
          <ArrowBack
            sx={{
              cursor: 'pointer',
            }}
            onClick={handleBack}
          />
          <Box>
          <Typography variant="h5" color="#56408a">
            {state.username}
          </Typography>
          <Typography>
            Số tài khoản: {state.userid}
          </Typography>
          </Box>
          <TextField
            margin="normal"
            width="30%"
            name="searchInput"
            label="Tìm kiếm"
            id="reasonInput"
            value={term}
            onChange={changeTerm}
          />
        </Box>

        <Box sx={{ width: '80%' }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={'medium'}
              >
                <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={data.length}
                />
                <TableBody>
                  {stableSort(
                    data,
                    getComparator(order, orderBy),
                  )
                    .filter(function (item) {
                      return (
                        item.account.includes(term) ||
                        item.bank.includes(term) || 
                        item.date.includes(term) || 
                        item.status.includes(term) || 
                        item.type.includes(term) 
                      );
                    })
                    .slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage,
                    )
                    .map((row, index) => {
                      return (
                     
                        (
                          <TableRow key={index}>
                            <TableCell align="left">
                              {row.date}
                            </TableCell>
                            <TableCell align="left">
                              {row.amount}
                            </TableCell>
                            <TableCell align="left">
                                {row.type === "Chuyển khoản"
                                ? <Typography color="orange" fontWeight={"bold"}> {row.type} </Typography>
                                : <>
                                    {row.type === "Nhận tiền"
                                    ? <Typography color="lightgreen" fontWeight={"bold"}> {row.type} </Typography>
                                : <Typography color="purple" fontWeight={"bold"}> {row.type} </Typography>}
                                </>}
                              
                            </TableCell>
                            <TableCell align="left">
                              {row.account}
                            </TableCell>
                            <TableCell align="left">
                              {row.bank}
                            </TableCell>
                            <TableCell align="left">
                            {row.status === "success"
                                ? <Typography color="#00cc00" fontWeight={"bold"}> {row.status} </Typography>
                                : <Typography color="red" fontWeight={"bold"}> {row.status} </Typography>
                            }
                            </TableCell>
                          </TableRow>
                        )
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: 53 * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Box>
    </>
  );
}
