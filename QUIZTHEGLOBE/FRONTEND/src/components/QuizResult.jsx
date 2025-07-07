import React, { useEffect, useCallback } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import StopIcon from '@mui/icons-material/Stop';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { styled } from '@mui/material/styles';
import { useQuiz } from '../context/QuizContext';
import SettingPanel from '../components/SettingPanel';
import QuizQuestion from '../components/QuizQuestion';
import ScoreBoard from '../components/ScoreBoard';
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
    userName,
    settings,
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

  // Fetch quiz data
  useEffect(() => {
    if (!quizStarted) return;

    (async () => {
      try {
        const res = await fetch(
          `/api/quiz?amount=${settings.numQuestions}&difficulty=${settings.difficulty}&types=${Object.keys(settings.types).filter(t => settings.types[t]).join(',')}`
        );
        const data = await res.json();
        const num = settings.numQuestions || fallbackQuestions.length;
        setQuestions(Array.isArray(data) ? data.slice(0, num) : fallbackQuestions.slice(0, num));
      } catch {
        const num = settings.numQuestions || fallbackQuestions.length;
        setQuestions(fallbackQuestions.slice(0, num));
      }
    })();
  }, [quizStarted, settings, setQuestions]);

  useEffect(() => {
    return () => {
      SoundEffect.stop();
    };
  }, []);

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
    SoundEffect.stop();
    navigate('/');
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
  };

  const handleAnswer = useCallback(
    (correct) => {
      if (correct) {
        setScore((s) => s + 1);
        setStreak((s) => s + 1);
        SoundEffect.play('correct');
        if (streak + 1 >= 3) SoundEffect.play('streak');
      } else {
        setStreak(0);
        SoundEffect.play('incorrect');
      }

      if (currentIndex < questions.length - 1) {
        setCurrentIndex((i) => i + 1);
      } else {
        SoundEffect.play('complete');
        navigate('/result');
      }
    },
    [currentIndex, questions.length, streak, navigate, setScore, setStreak, setCurrentIndex]
  );

  const current = questions[currentIndex] || {};
  const progress = questions.length ? (currentIndex + 1) / questions.length : 0;

  // 👉 If quiz NOT started yet
  if (!quizStarted) {
    return (
      <Container>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}
        >
          Welcome, {userName}! Ready to take on the challenge and become a Capital Master?
        </Typography>

        <Typography variant="h4" gutterBottom>
          Quiz Settings
        </Typography>
        <SettingPanel />
        <Button variant="contained" color="primary" onClick={handleStart} sx={{ mt: 2 }}>
          Start Quiz
        </Button>
      </Container>
    );
  }

  // 👉 Quiz In Progress
  return (
    <Container>
      <Grid container spacing={2} alignItems="center" sx={{ mb: 3 }}>
        <Grid item xs={4}>
          <ScoreBoard />
        </Grid>

        <Grid item xs={4} textAlign="center">
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 'bold', color: 'primary.main' }}
          >
            Question {currentIndex + 1} of {questions.length}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary' }}
          >
            {questions.length - currentIndex - 1} questions left
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Timer duration={30} onTimeout={() => handleAnswer(false)} progress={progress} />
        </Grid>
      </Grid>

      <Box mt={4}>
        <QuizQuestion question={current} onAnswer={handleAnswer} showHint options={settings.types} />
      </Box>

      <Box display="flex" justifyContent="center" gap={2} mt={5}>
        <Button startIcon={<StopIcon />} variant="contained" color="error" onClick={handleStop}>
          Stop
        </Button>
        <Button startIcon={<RestartAltIcon />} variant="outlined" onClick={handleRestart}>
          Restart
        </Button>
      </Box>
    </Container>
  );
}
