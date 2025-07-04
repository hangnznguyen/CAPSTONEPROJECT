import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';

export default function Result() {
  const { score, questions, setQuizStarted } = useQuiz();
  const navigate = useNavigate();

  const restartQuiz = () => {
    setQuizStarted(false);
    navigate('/quiz');
  };

  return (
    <Box textAlign="center" mt={6}>
      <Typography variant="h4" gutterBottom>Quiz Complete!</Typography>
      <Typography variant="h6">You scored {score} out of {questions.length}</Typography>
      <Box mt={4}>
        <Button variant="contained" onClick={restartQuiz}>Restart</Button>
      </Box>
    </Box>
  );
}
