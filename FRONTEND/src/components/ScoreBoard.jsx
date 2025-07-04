// src/components/ScoreBoard.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useQuiz } from '../context/QuizContext';

export default function ScoreBoard() {
  const { score, streak } = useQuiz();

  return (
    <Box>
      <Typography variant="h6">Score: {score}</Typography>
      {streak > 1 && <Typography variant="body2">🔥 Streak: {streak}</Typography>}
    </Box>
  );
}