import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import { useQuiz } from '../context/QuizContext';

export default function SettingPanel() {
  const { settings, setSettings } = useQuiz();

  const handleNum = e => setSettings({ ...settings, numQuestions: e.target.value });
  const handleDiff = e => setSettings({ ...settings, difficulty: e.target.value });
  const handleType = e => setSettings({
    ...settings,
    types: { ...settings.types, [e.target.name]: e.target.checked }
  });

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <FormControl>
        <InputLabel>Questions</InputLabel>
        <Select value={settings.numQuestions} label="Questions" onChange={handleNum}>
          {[5, 10, 20].map(n => <MenuItem key={n} value={n}>{n}</MenuItem>)}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Difficulty</InputLabel>
        <Select value={settings.difficulty} label="Difficulty" onChange={handleDiff}>
          {['Easy', 'Medium', 'Hard'].map(d => <MenuItem key={d} value={d}>{d}</MenuItem>)}
        </Select>
      </FormControl>

      <Box>
        {Object.keys(settings.types).map(key => (
          <FormControlLabel
            key={key}
            control={<Checkbox
              name={key}
              checked={settings.types[key]}
              onChange={handleType}
            />}
            label={key}
          />
        ))}
      </Box>
    </Box>
  );
}