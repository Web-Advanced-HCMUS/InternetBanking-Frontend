import Notifications from './instant-noti.png';
import AppSecurity from './app-securs.png';
import ProtectFunds from './protected-funds.png';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
const mockStrengths = [
  {
    img: Notifications,
    name: 'Thông báo tức thời',
    content:
      'Với ứng dụng Timo, bạn sẽ luôn nhận được thông báo cho mọi giao dịch từ tài khoản. Đồng thời, bạn có thể khóa/mở khóa thẻ ngay trong ứng dụng một cách nhanh chóng để bảo đảm tiền của bạn vẫn luôn được an toàn.',
  },
  {
    img: AppSecurity,
    name: 'Bảo mật trong ứng dụng',
    content:
      'Đăng nhập vào tài khoản luôn cần được xác minh bằng tên đăng nhập, mật khẩu hoặc Mã sinh trắc học. Mã OTP được gửi đến tức thời trong ứng dụng để xác thực các giao dịch được thực hiện từ tài khoản của bạn.',
  },
  {
    img: ProtectFunds,
    name: 'Bảo vệ tiền gửi',
    content:
      'Timo cho bạn toàn quyền truy cập vào tài khoản để thực hiện các giao dịch ngân hàng bất cứ lúc nào, trong khi tiền của bạn vẫn luôn được bảo đảm tại Ngân hàng Bản Việt và được bảo vệ bởi Ngân hàng Nhà nước. ',
  },
];

const Strength = () => {
  return (
    <>
      <Box display={'flex'} alignItems="center" flexDirection={'column'} my={8}>
        {/* Title */}
        <Typography variant="h4" fontWeight={600}>
          Lorem ipsum dolor sit amet consectetur.
        </Typography>

        {/* Card List */}
        <Grid container spacing={4} width="75%" mt={0}>
          {/* Card Items */}
          {mockStrengths.map((strength) => (
            <Grid item xs={4}>
              <Box
                mx={'auto'}
                display={'flex'}
                justifyContent="center"
                component={'img'}
                src={strength.img}
                height={180}
              />
              <Typography variant="h5" fontWeight={550} textAlign="center" mt={1} mb={3}>
                {strength.name}
              </Typography>
              <Typography fontSize={19}>{strength.content}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Strength;
