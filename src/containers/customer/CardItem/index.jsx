import { Button, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';

const CardItem = ({ key, bank_name, bank_no, owner, status }) => {
  const handleDefaultCard = () => {
    console.log('Default Card');
  };
  return (
    <Box key={key} width="100%" height="auto" p={2} borderRadius={5} border={4}>
      <Box display={'flex'} alignItems="center" justifyContent={'space-around'} my={1}>
        <Typography width="20%" textAlign="right">
          Tên ngân hàng:
        </Typography>
        <Typography width="60%">{bank_name}</Typography>
      </Box>
      <Box display={'flex'} alignItems="center" justifyContent={'space-around'} my={1}>
        <Typography width="20%" textAlign="right">
          Số tài khoản:
        </Typography>
        <Typography width="60%">{bank_no}</Typography>
      </Box>
      <Box display={'flex'} alignItems="center" justifyContent={'space-around'} my={1}>
        <Typography width="20%" textAlign="right">
          Chủ tài khoản:
        </Typography>
        <Typography width="60%">{owner}</Typography>
      </Box>
      <Box display={'flex'} alignItems="center" justifyContent={'space-around'} my={1}>
        <Typography width="20%" textAlign="right">
          Trạng thái:
        </Typography>
        <Typography width="60%">{status}</Typography>
      </Box>
      <Divider light />
      {/* bank icon in right */}
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button variant="outlined" onClick={handleDefaultCard}>
          Chọn thanh toán mặc định
        </Button>
      </Box>
    </Box>
  );
};

export default CardItem;
