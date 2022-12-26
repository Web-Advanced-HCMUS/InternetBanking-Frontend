import { Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

const CountDown = ({ totalSeconds }) => {
  const [minutes, setMinutes] = useState(Math.floor((totalSeconds / 1000) % 60));
  const [seconds, setSeconds] = useState(Math.floor((totalSeconds / 1000 / 60) % 60));

  useEffect(() => {}, {});

  return (
    <Typography>
      {minutes}:{seconds}
    </Typography>
  );
};

export default CountDown;
