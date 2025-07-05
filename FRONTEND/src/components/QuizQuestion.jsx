import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  TextField,
  Fade,
  Stack,
} from '@mui/material';

export default function QuizQuestion({ question, onAnswer, showHint }) {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!question) return null;

  const { type, prompt, choices, answer, image, hint } = question;

  const handleSubmit = (value) => {
    let correct = false;

    if (type === 'multiple' || type === 'trueFalse') {
      correct = value === answer;
    } else if (type === 'fill') {
      correct = value.trim().toLowerCase() === answer.toLowerCase();
    }

    setInput('');
    setSubmitted(true);
    setTimeout(() => {
      onAnswer(correct);
      setSubmitted(false);
    }, 400); // delay for fade animation
  };

  return (
    <Fade in timeout={400} key={question.id}>
      <Box>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          {prompt}
        </Typography>

        {image && (
          <Box mb={2}>
            <img
              src={image}
              alt="Question visual"
              style={{ maxWidth: '100%', borderRadius: 8 }}
            />
          </Box>
        )}

        {/* Multiple Choice */}
        {type === 'multiple' && (
          <Stack spacing={2} mt={2}>
            {choices.map((choice, i) => (
              <Button
                key={i}
                variant="outlined"
                fullWidth
                color="primary"
                onClick={() => handleSubmit(choice)}
                disabled={submitted}
              >
                {choice}
              </Button>
            ))}
          </Stack>
        )}

        {/* True/False */}
        {type === 'trueFalse' && (
          <Stack direction="row" spacing={2} mt={2}>
            {['True', 'False'].map((val) => (
              <Button
                key={val}
                variant="contained"
                color="primary"
                onClick={() => handleSubmit(val === 'True')}
                disabled={submitted}
              >
                {val}
              </Button>
            ))}
          </Stack>
        )}

        {/* Fill-in-the-blank */}
        {type === 'fill' && (
          <Box mt={2} display="flex" gap={2}>
            <TextField
              label="Your Answer"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              fullWidth
              disabled={submitted}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && input.trim()) {
                  handleSubmit(input);
                }
              }}
            />
            <Button
              variant="contained"
              onClick={() => handleSubmit(input)}
              disabled={!input.trim() || submitted}
            >
              Submit
            </Button>
          </Box>
        )}

        {/* Hint */}
        {showHint && hint && (
          <Typography variant="body2" mt={2} sx={{ color: 'gray' }}>
            💡 Hint: {hint}
          </Typography>
        )}
      </Box>
    </Fade>
  );
}
