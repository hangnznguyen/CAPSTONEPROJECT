import React, { useEffect, useCallback } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import StopIcon from '@mui/icons-material/Stop';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { styled } from '@mui/material/styles';
import { useQuiz } from '../context/QuizContext';
import SettingPanel from '../components/SettingPanel';
import QuizQuestion from '../components/QuizQuestion';
import Scoreboard from '../components/Scoreboard';  
import Timer from '../components/Timer';
import SoundEffect from '../components/SoundEffect';
import fallbackQuestions from '../data/fallbackQuestions.js';
import { useNavigate } from 'react-router-dom';

const Container = styled(Box)({
  padding: '2rem',
  maxWidth: 800,
  margin: '0 auto',
});

export default function Quiz() {
  const navigate = useNavigate();
  const {
    settings,
    setSettings,
    questions,
    setQuestions,
    currentIndex,
    setCurrentIndex,
    score,
    setScore,
    streak,
    setStreak,
    quizStarted,
    setQuizStarted,
  } = useQuiz();

  useEffect(() => {
    if (!quizStarted) return;
    (async () => {
      try {
        const res = await fetch(
          `/api/quiz?amount=${settings.numQuestions}&difficulty=${settings.difficulty}&types=${Object.keys(settings.types).filter(t => settings.types[t]).join(',')}`
        );
        const data = await res.json();
        setQuestions(Array.isArray(data) ? data : fallbackQuestions);
      } catch {
        setQuestions(fallbackQuestions);
      }
    })();
  }, [quizStarted, settings]);

  const handleStart = () => {
    setQuizStarted(true);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
  };

  const handleStop = () => {
    setQuizStarted(false);
    setQuestions([]);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    navigate('/');  // or the main quiz settings page route
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
  };

  const handleAnswer = useCallback((correct) => {
    if (correct) {
      setScore(s => s + 1);
      setStreak(s => s + 1);
      SoundEffect.play('correct');
      if (streak + 1 >= 3) SoundEffect.play('streak');
    } else {
      setStreak(0);
      SoundEffect.play('incorrect');
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      SoundEffect.play('complete');
      navigate('/result');
    }
  }, [currentIndex, questions.length, streak, navigate]);

  if (!quizStarted) {
    return (
      <Container>
        <Typography variant="h4" gutterBottom>Quiz Settings</Typography>
        <SettingPanel />
        <Button variant="contained" color="primary" onClick={handleStart} sx={{ mt: 2 }}>
          Start Quiz
        </Button>
      </Container>
    );
  }

  const current = questions[currentIndex] || {};
  const progress = questions.length ? (currentIndex + 1) / questions.length : 0;

  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <Scoreboard />
        </Grid>
        <Grid item xs={6}>
          <Timer duration={30} onTimeout={() => handleAnswer(false)} progress={progress} />
        </Grid>
      </Grid>

      <Box mt={4}>
        <QuizQuestion question={current} onAnswer={handleAnswer} showHint options={settings.types} />
      </Box>

      <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
        <Typography>Progress: {currentIndex + 1} / {questions.length}</Typography>
        <Box sx={{ width: '60%', background: '#eee', height: 10, borderRadius: 5, overflow: 'hidden' }}>
          <Box sx={{ width: `${progress * 100}%`, height: '100%', background: 'primary.main' }} />
        </Box>
      </Box>

      {/* Fun buttons with icons */}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          color="error"
          startIcon={<StopIcon />}
          onClick={handleStop}
        >
          Stop
        </Button>

        <Button
          variant="contained"
          color="secondary"
          startIcon={<RestartAltIcon />}
          onClick={handleRestart}
        >
          Restart
        </Button>
      </Box>
    </Container>
  );
}
