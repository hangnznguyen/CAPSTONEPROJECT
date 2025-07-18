import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  TextField,
  Fade,
  Stack,
} from '@mui/material';

export default function QuizQuestion({
  question,
  onAnswer,
  showHint,
  showAnswer,
}) {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
    // Reset states on new question
    setInput('');
    setSubmitted(false);
    setSelectedChoice(null);
  }, [question]);

  if (!question) return null;

  const { type, prompt, choices, answer, image, hint } = question;

  const handleSubmit = (value) => {
    if (submitted || showAnswer) return; // Prevent submitting while showing answer

    let correct = false;

    if (type === 'multiple' || type === 'trueFalse') {
      correct = value === answer || value === (answer ? 'True' : 'False');
    } else if (type === 'fill') {
      correct = value.trim().toLowerCase() === answer.toLowerCase();
    }

    setInput('');
    setSubmitted(true);
    setSelectedChoice(value);

    // Inform parent of answer correctness
    setTimeout(() => {
      onAnswer(correct);
    }, 400);
  };

  const isCorrectChoice = (choice) => {
    if (!showAnswer) return false;
    if (type === 'trueFalse') return choice === (answer ? 'True' : 'False');
    return choice === answer;
  };

  const isWrongChoice = (choice) => {
    // Show wrong only if user selected and it's not correct
    return showAnswer && selectedChoice === choice && !isCorrectChoice(choice);
  };

  const getButtonStyle = (choice) => {
    if (isCorrectChoice(choice)) {
      return {
        borderColor: 'green',
        backgroundColor: '#e6f4ea',
        fontWeight: 'bold',
      };
    }
    if (isWrongChoice(choice)) {
      return {
        borderColor: 'red',
        backgroundColor: '#f9d6d5',
        fontWeight: 'bold',
      };
    }
    return {};
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
                disabled={submitted || showAnswer}
                sx={getButtonStyle(choice)}
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
                disabled={submitted || showAnswer}
                sx={getButtonStyle(val)}
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
              disabled={submitted || showAnswer}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && input.trim() && !submitted && !showAnswer) {
                  handleSubmit(input);
                }
              }}
            />
            <Button
              variant="contained"
              onClick={() => handleSubmit(input)}
              disabled={!input.trim() || submitted || showAnswer}
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

        {/* Show Correct Answer */}
        {showAnswer && (
          <Box mt={2}>
            <Typography color="green" fontWeight="bold">
              ✅ Correct Answer:{' '}
              {type === 'trueFalse' ? (answer ? 'True' : 'False') : answer}
            </Typography>
          </Box>
        )}
      </Box>
    </Fade>
  );
}
