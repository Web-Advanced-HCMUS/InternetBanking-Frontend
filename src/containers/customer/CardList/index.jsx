import { Box } from '@mui/material';
import CardItem from '../CardItem';

const cards = [
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
  {
    bank_name: 'Ngân hàng A',
    bank_no: '3453-3434-3453-3455',
    owner: 'Nguyễn Văn A',
    status: 'Đang liên kết',
  },
];
const CardList = () => {
  return (
    <Box
      width="55%"
      height="100%"
      mx="auto"
      p={3}
      display="flex"
      flexDirection="column"
      gap={3}
    >
      {cards.map((card, idx) => (
        <CardItem {...card} key={idx} />
      ))}
    </Box>
  );
};

export default CardList;
