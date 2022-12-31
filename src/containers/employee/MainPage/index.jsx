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

import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';

import { visuallyHidden } from '@mui/utils';

import { useNavigate } from 'react-router-dom';


function createData(id, userid, name, balance, status) {
  return {
    id,
    userid,
    name,
    balance,
    status,
  };
}

const rows = [
  createData(
    1,
    '6371289839s1fa90fas',
    'Lionel Messi',
    '2,000,000',
    '',
  ),
  createData(
    2,
    '6371289839s1fa90oas',
    'Thiago Messi',
    '2,000,000,000',
    '',
  ),
  createData(
    3,
    '6371289839s1fa90aas',
    'Bartomeli Messi',
    '52,000,000',
    '',
  ),
  createData(
    4,
    '6371289839s1fa90sas',
    'Cristiano Ronaldo',
    '12,000,000',
    '',
  ),
  createData(
    5,
    '6371289839s1fa90tas',
    'Malang Sarr',
    '441,000,000',
    '',
  ),
  createData(
    6,
    '6371289839s1fa90qas',
    'Kali Koulibaly',
    '123,000,000',
    '',
  ),
];

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
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'id',
    disablePadding: true,
    sort: true,
    label: 'ID',
  },
  {
    id: 'name',
    disablePadding: false,
    sort: true,
    label: 'Họ tên',
  },
  {
    id: 'balance',
    disablePadding: false,
    sort: true,
    label: 'Số dư',
  },
  {
    id: 'accountid',
    disablePadding: false,
    sort: false,
    label: 'Số tài khoản',
  },
  {
    id: 'infor',
    disablePadding: false,
    sort: false,
    label: '',
  },
  {
    id: 'topup',
    disablePadding: false,
    sort: false,
    label: '',
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

const CreateButton = styled(Button)(({ theme }) => ({
  color: 'white',
  backgroundColor: '#56408a',
  '&:hover': {
    backgroundColor: '#866DC1',
    color: 'white',
  },
}));

const InforButton = styled(Button)(({ theme }) => ({
  color: '#66DB44',
  borderBlockColor: '#66DB44',
  '&:hover': {
    backgroundColor: '#7AD85F',
    color: 'white',
  },
}));

const TopUpButton = styled(Button)(({ theme }) => ({
  color: '#EF922F',
  borderBlockColor: '#EF922F',
  '&:hover': {
    backgroundColor: '#FFA545',
    color: 'white',
  },
}));

export default function EnhancedTable() {
  const navigate = useNavigate();

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('id');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [buttonClick, setButtonClicked] = React.useState({});
  const [term, setTerm] = React.useState('');

  React.useEffect(() => {
    if(buttonClick.type === 'topup')
      navigate('/employee/topup', {state:buttonClick})
  }, [buttonClick]);

  const toCreateUser = () => {
    navigate('/employee/create');
  };

  // const handleTopUpClicked = () => {
  //   navigate('/employee/create');
  // };

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
      ? Math.max(0, (1 + page) * rowsPerPage - rows.length)
      : 0;

  return (
    <>
      <Box
        display={'flex'}
        flexDirection="column"
        alignItems="center"
        mt={5}
      >
        <Box
          display={'flex'}
          flexDirection="row"
          width={'80%'}
          justifyContent="space-between"
          alignItems="center"
        >
          <CreateButton
            variant="contained"
            onClick={toCreateUser}
          >
            Tạo người dùng mới
          </CreateButton>
          <Typography variant="h4" color="#56408a">
            DANH SÁCH NGƯỜI DÙNG
          </Typography>
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
                  rowCount={rows.length}
                />
                <TableBody>
                  {stableSort(
                    rows,
                    getComparator(order, orderBy),
                  )
                    .filter(function (item) {
                      return (
                        item.name.includes(term) ||
                        item.userid.includes(term)
                      );
                    })
                    .slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage,
                    )
                    .map((row, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell align="left">
                            {row.id}
                          </TableCell>
                          <TableCell align="left">
                            {row.name}
                          </TableCell>
                          <TableCell align="left">
                            {row.balance}
                          </TableCell>
                          <TableCell align="left">
                            {row.userid}
                          </TableCell>

                          <TableCell align="left">
                            <InforButton variant="outlined">
                              Xem thông tin
                            </InforButton>
                          </TableCell>
                          <TableCell align="left">
                            <TopUpButton
                              variant="outlined"
                              onClick={() => {setButtonClicked({type: 'topup', userid: row.userid, username: row.name})}}
                            >
                              Nạp tiền
                            </TopUpButton>
                          </TableCell>
                        </TableRow>
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
              count={rows.length}
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
