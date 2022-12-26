import { ArrowLeft, SendOutlined } from '@mui/icons-material';
import { Alert, AlertTitle, Box, Button, TextField, Typography } from '@mui/material';

const TransactionForm = () => {
  return (
    <Box
      width="70%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mx="auto"
    >
      <Typography variant="h5" component="h5" textAlign="center" fontWeight={550} mt={1}>
        CHUYỂN TIỀN CHO NGƯỜI THỤ HƯỞNG TẠI NGÂN HÀNG KHÁC
      </Typography>
      <Box display="flex" flexDirection="column" width="100%" my={1}>
        <Typography fontWeight={550} variant="h6">
          Thông tin người chuyển
        </Typography>
        <Box bgcolor={'#efefef'} p={1}>
          <Box display="flex" justifyContent="space-around" width="70%" mx="auto">
            <Typography width="40%">Tài khoản chuyển:</Typography>
            <Typography width="60%">1855-3253-2535-2332</Typography>
          </Box>
          <Box display="flex" justifyContent="space-around" width="70%" mx="auto">
            <Typography width="40%">Số dư khả dụng:</Typography>
            <Typography width="60%">13,550,350,000 VNĐ</Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" width="100%" my={1}>
        <Typography fontWeight={550} variant="h6">
          Thông tin người nhận
        </Typography>
        <Box bgcolor={'#efefef'} p={1}>
          <Box display="flex" justifyContent="space-around" width="70%" mx="auto">
            <Typography width="40%">Tài khoản thụ hưởng:</Typography>
            <Typography width="60%">1855-2312-123</Typography>
          </Box>
          <Box display="flex" justifyContent="space-around" width="70%" mx="auto">
            <Typography width="40%">Tên người thụ hưởng:</Typography>
            <Typography width="60%">Nguyễn Văn A</Typography>
          </Box>
          <Box display="flex" justifyContent="space-around" width="70%" mx="auto">
            <Typography width="40%">Ngân hàng thụ hưởng:</Typography>
            <Typography width="60%">
              SCB - Ngân hàng thương mại cổ phần Sài Gòn Thương Tín
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" width="100%" my={1}>
        <Typography fontWeight={550} variant="h6">
          Thông tin giao dịch
        </Typography>
        <Box bgcolor={'#efefef'} p={1}>
          <Box display="flex" justifyContent="space-around" width="70%" mx="auto">
            <Typography width="40%">Số tiền chuyển:</Typography>
            <Typography width="60%">180,000,000 VNĐ</Typography>
          </Box>
          <Box display="flex" justifyContent="space-around" width="70%" mx="auto">
            <Typography width="40%">Số tiền bằng chữ:</Typography>
            <Typography width="60%">Một trăm tám mươi triệu đồng</Typography>
          </Box>
          <Box display="flex" justifyContent="space-around" width="70%" mx="auto">
            <Typography width="40%">Phí chuyển tiền:</Typography>
            <Typography width="60%">Người chuyển trả</Typography>
          </Box>
          <Box display="flex" justifyContent="space-around" width="70%" mx="auto">
            <Typography width="40%">Số tiền phí:</Typography>
            <Typography width="60%">3,300 VNĐ</Typography>
          </Box>
          {/* <Box display="flex" justifyContent="space-around" width="70%" mx="auto">
            <Typography width="40%">Số tiền phí:</Typography>
            <Typography width="60%">3,300 VNĐ</Typography>
          </Box> */}
          <Box display="flex" justifyContent="space-around" width="70%" mx="auto">
            <Typography width="40%">Mã kiểm tra giao dịch:</Typography>
            <Typography width="60%">343043024343240</Typography>
          </Box>
          <Box p={1} px={5}>
            <Alert severity="info">
              <AlertTitle sx={{ fontWeight: 550 }}>Thông báo</AlertTitle>
              Quý khách hãy kiểm trả tài khoản Email để nhận vào nhập mã OTP vào ô bên
              dưới để xác nhận giao dịch.
            </Alert>
          </Box>

          <Box display="flex" width="70%" mx="auto" alignItems="center">
            <Typography width="40%" textAlign="right" mr={3}>
              Nhập mã OTP
            </Typography>
            <TextField
              width="60%"
              variant="outlined"
              type="number"
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: `0` } }}
              placeholder="######"
              size="small"
            />
          </Box>
        </Box>
      </Box>
      <Box mb={1} display="flex" gap={5}>
        <Button sx={{ p: 1 }} variant="contained" startIcon={<ArrowLeft />}>
          Quay lại
        </Button>
        <Button sx={{ p: 1 }} variant="contained" endIcon={<SendOutlined />}>
          Xác nhận giao dịch
        </Button>
      </Box>
    </Box>
  );
};

export default TransactionForm;
