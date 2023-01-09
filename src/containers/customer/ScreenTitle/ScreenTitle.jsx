import { Typography } from '@mui/material';

const ScreenTitle = ({ title }) => {
  return (
    <Typography px={2} variant="h5">
      {title}
    </Typography>
  );
};

export default ScreenTitle;
