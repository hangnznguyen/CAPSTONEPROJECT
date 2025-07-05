import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';
import { useQuiz } from '../context/QuizContext';

export default function SettingPanel() {
  const { settings, setSettings } = useQuiz();

  const handleNum = e => setSettings({ ...settings, numQuestions: Number(e.target.value) });
  const handleDiff = e => setSettings({ ...settings, difficulty: e.target.value });
  const handleType = e => {
    setSettings({
      ...settings,
      types: {
        ...settings.types,
        [e.target.name]: e.target.checked,
      },
    });
  };

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <FormControl fullWidth>
        <InputLabel id="num-questions-label">Number of Questions</InputLabel>
        <Select
          labelId="num-questions-label"
          value={settings.numQuestions}
          label="Number of Questions"
          onChange={handleNum}
        >
          {[5, 10, 15].map(n => (
            <MenuItem key={n} value={n}>
              {n}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="difficulty-label">Difficulty</InputLabel>
        <Select
          labelId="difficulty-label"
          value={settings.difficulty}
          label="Difficulty"
          onChange={handleDiff}
        >
          {['Easy', 'Medium', 'Hard'].map(d => (
            <MenuItem key={d} value={d}>
              {d}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box>
        <Typography variant="subtitle1" mb={1}>
          Question Types
        </Typography>
        {Object.keys(settings.types).map(typeKey => (
          <FormControlLabel
            key={typeKey}
            control={
              <Checkbox
                name={typeKey}
                checked={settings.types[typeKey]}
                onChange={handleType}
              />
            }
            label={typeKey.charAt(0).toUpperCase() + typeKey.slice(1)}
          />
        ))}
      </Box>
    </Box>
  );
}
