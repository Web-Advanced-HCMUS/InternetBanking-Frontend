import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

const TrackRouteBar = () => {
  return (
    <>
      <Box px={2} py={1}>
        <Link to="/home">Home</Link>
        <NavigateNextOutlinedIcon />
        <Link to="/transfer">Transfer</Link>
      </Box>
    </>
  );
};

export default TrackRouteBar;
