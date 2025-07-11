import React, { useState, useEffect } from 'react';
import { LinearProgress, Typography, Box } from '@mui/material';

export default function Timer({ duration, onTimeout }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTime(duration);
    const interval = setInterval(() => {
      setTime(t => {
        if (t <= 1) {
          clearInterval(interval);
          onTimeout();
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [duration, onTimeout]);

  const progress = ((duration - time) / duration) * 100;

  return (
    <Box textAlign="right" sx={{ width: '100%' }}>
      <Typography variant="body1" sx={{ mb: 0.5 }}>
        {time}s left
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          borderRadius: 5,
          backgroundColor: '#eee',
          '& .MuiLinearProgress-bar': {
            backgroundColor: time <= 5 ? '#d32f2f' : '#1976d2',
            transition: 'width 1s linear',
          },
        }}
      />
    </Box>
  );
}
