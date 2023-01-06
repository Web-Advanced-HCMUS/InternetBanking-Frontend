import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from 'theme';
import CardItem from '../CardItem';

const cards = [
  {
    bank_name: 'Ngân hàng A Ngân hàng ANgân hàng ANgân hàng ANgân hàng A',
    bank_no: '3453-3434-3453-3455',
    owner: 'Nguyễn Văn A',
    status: 'Đang liên kết',
    default_card: true,
  },
  {
    bank_name: 'Ngân hàng A',
    bank_no: '3453-3434-3453-3455',
    owner: 'Nguyễn Văn A',
    status: 'Đang liên kết',
  },
  {
    bank_name: 'Ngân hàng A',
    bank_no: '3453-3434-3453-3455',
    owner: 'Nguyễn Văn A',
    status: 'Đang liên kết',
  },
];
const CardList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Box bgcolor={colors.primary[400]} py={2} display="flex" flexDirection="column" alignItems="center" gap={1.5}>
        <Typography variant="h3" color={colors.greenAccent[500]} fontWeight="bold">
          Default credit card to payment
        </Typography>
        <Box width="50%" px={3}>
          {cards
            .filter((card) => card?.default_card)
            .map((card) => (
              <CardItem {...card} key={0} />
            ))}
        </Box>
      </Box>

      <Box width="50%" height="100%" mx="auto" p={3} display="flex" flexDirection="column" gap={3}>
        {cards
          .filter((card) => !card?.default_card)
          .map((card, idx) => (
            <CardItem {...card} key={idx} />
          ))}
      </Box>
    </Box>
  );
};

export default CardList;
