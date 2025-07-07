import React from 'react';
import {
  Box,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
  FormControlLabel
} from '@mui/material';
import { useQuiz } from '../context/QuizContext';

const questionTypes = [
  { label: 'Multiple Choice', value: 'multiple' },
  { label: 'Fill in the Blank', value: 'fill' },
  { label: 'True / False', value: 'trueFalse' },
];

export default function SettingPanel() {
  const { settings, setSettings } = useQuiz();

  const handleTypeChange = (event) => {
    const selected = event.target.value;
    const updatedTypes = {};

    questionTypes.forEach(({ value }) => {
      updatedTypes[value] = selected.includes(value);
    });

    setSettings((prev) => ({
      ...prev,
      types: updatedTypes,
    }));
  };

  const handleDifficultyChange = (event) => {
    const { name, checked } = event.target;
    setSettings((prev) => ({
      ...prev,
      difficulties: {
        ...prev.difficulties,
        [name]: checked,
      },
    }));
  };

  const selectedTypes = Object.entries(settings.types)
    .filter(([_, checked]) => checked)
    .map(([key]) => key);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Select Question Types
      </Typography>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="types-select-label">Question Types</InputLabel>
        <Select
          labelId="types-select-label"
          multiple
          value={selectedTypes}
          onChange={handleTypeChange}
          input={<OutlinedInput label="Question Types" />}
          renderValue={(selected) =>
            selected
              .map((value) => questionTypes.find((t) => t.value === value)?.label)
              .join(', ')
          }
        >
          {questionTypes.map((type) => (
            <MenuItem key={type.value} value={type.value}>
              <Checkbox checked={settings.types[type.value]} />
              <ListItemText primary={type.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" gutterBottom>
        Select Difficulty Levels
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={!!settings.difficulties?.easy}
            onChange={handleDifficultyChange}
            name="easy"
          />
        }
        label="Easy"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={!!settings.difficulties?.medium}
            onChange={handleDifficultyChange}
            name="medium"
          />
        }
        label="Medium"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={!!settings.difficulties?.hard}
            onChange={handleDifficultyChange}
            name="hard"
          />
        }
        label="Hard"
      />
    </Box>
  );
}
