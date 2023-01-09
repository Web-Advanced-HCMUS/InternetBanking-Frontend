import { Box, Typography } from '@mui/material';

const DebtBox = ({ title, amount, colors }) => {
  return (
    <Box width="100%" m="20px 30px">
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={1}>
        <Typography variant="h3" fontWeight="bold" sx={{ color: colors.grey[100] }}>
          {title}
        </Typography>
        <Typography variant="h2" sx={{ color: colors.greenAccent[500] }}>
          {amount}
        </Typography>
      </Box>
    </Box>
  );
};

export default DebtBox;
