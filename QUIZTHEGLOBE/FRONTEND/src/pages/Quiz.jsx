// src/pages/Quiz.jsx

import React, { useEffect, useCallback, useState } from 'react';
import { Box, Typography, Button, Grid, CircularProgress } from '@mui/material';
import StopIcon from '@mui/icons-material/Stop';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { styled, keyframes } from '@mui/material/styles';
import { useQuiz } from '../context/QuizContext';
import SettingPanel from '../components/SettingPanel';
import QuizQuestion from '../components/QuizQuestion';
import ScoreBoard from '../components/ScoreBoard';
import Timer from '../components/Timer';
import SoundEffect from '../components/SoundEffect';
import fallbackQuestions from '../data/fallbackQuestions.js';

const PageWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: 'url("/assets/images/Background.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));

const CenterContent = styled(Box)({
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '2rem',
});

const Container = styled(Box)({
  padding: '2rem',
  maxWidth: 800,
  width: '100%',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
  marginRight: '2rem',
});

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

const AnimatedHeading = styled(Typography)({
  animation: `${bounce} 1.6s ease-in-out infinite`,
  display: 'inline-block',
  fontWeight: 'bold',
  marginTop: '2rem',
  marginBottom: '1.5rem',
});

export default function Quiz() {
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

  const [quizFinished, setQuizFinished] = useState(false);
  const [loadingNextQuiz, setLoadingNextQuiz] = useState(false);

  const savePlayerScore = async (name, score) => {
    try {
      const res = await fetch('/api/players', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, score }),
      });
      if (!res.ok) throw new Error('Failed to save score');
      await res.json();
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (err) {
      console.error('Error saving score:', err.message);
    }
  };

  useEffect(() => {
    if (!quizStarted) return;
    fetchQuestions();
  }, [quizStarted, settings]);

  useEffect(() => {
    return () => SoundEffect.stop();
  }, []);

  const fetchQuestions = async () => {
    const typesStr = Object.keys(settings.types ?? {})
      .filter((key) => settings.types[key])
      .join(',');

    const difficulties = Object.keys(settings.difficulties ?? {}).filter(
      (key) => settings.difficulties[key]
    );
    const difficultyStr = difficulties.join(',');

    if (!typesStr || !difficultyStr) {
      setQuestions([]);
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:8080/api/quiz?amount=${settings.numQuestions}&difficulty=${difficultyStr}&types=${typesStr}&t=${Date.now()}`
      );
      const data = await res.json();
      const num = settings.numQuestions;
      setQuestions(Array.isArray(data) ? data.slice(0, num) : []);
    } catch {
      const num = settings.numQuestions;
      const filtered = fallbackQuestions
        .filter(
          (q) => difficulties.includes(q.difficulty) && settings.types[q.type]
        )
        .sort(() => 0.5 - Math.random());
      setQuestions(filtered.slice(0, num));
    }
  };

  const handleStart = () => {
    setQuizStarted(true);
    setQuizFinished(false);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
  };

  const handleStop = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setQuestions([]);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    SoundEffect.stop();
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setQuizFinished(false);
  };

  const handleNextQuiz = async () => {
    SoundEffect.stop(); // ✅ Stop music when starting new quiz
    setLoadingNextQuiz(true);
    setQuizFinished(false);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);

    try {
      await fetchQuestions();
      setQuizStarted(true);
    } finally {
      setLoadingNextQuiz(false);
    }
  };

  const handleAnswer = useCallback(
    async (correct) => {
      if (correct) {
        setScore((prev) => prev + 1);
        setStreak((prev) => prev + 1);
        SoundEffect.play('correct');
        if (streak + 1 >= 3) SoundEffect.play('streak');
      } else {
        setStreak(0);
        SoundEffect.play('incorrect');
      }

      const isLast = currentIndex >= questions.length - 1;

      if (!isLast) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        SoundEffect.play('complete');
        await savePlayerScore(userName || 'Anonymous', correct ? score + 1 : score);
        setQuizFinished(true);
        setQuizStarted(false);
      }
    },
    [currentIndex, questions.length, streak, score, userName]
  );

  const current = questions[currentIndex] || {};
  const progress = questions.length ? (currentIndex + 1) / questions.length : 0;

  const getMotivation = () => {
    if (score === questions.length) return "🎉 Perfect score! You're a true Capital Master!";
    if (score >= questions.length * 0.8) return '👏 Great job! Almost perfect!';
    if (score >= questions.length * 0.5) return '👍 Good effort! Keep practicing!';
    return '💪 Keep going! Every expert was once a beginner!';
  };

  if (loadingNextQuiz) {
    return (
      <PageWrapper>
        <CenterContent>
          <Container sx={{ textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
              Loading your next quiz...
            </Typography>
            <CircularProgress color="primary" />
          </Container>
        </CenterContent>
      </PageWrapper>
    );
  }

  if (!quizStarted && !quizFinished) {
    return (
      <PageWrapper>
        <CenterContent>
          <Container>
            <Typography variant="h3" fontWeight="bold" color="primary.main" gutterBottom>
              Welcome, {userName}!
            </Typography>

            <AnimatedHeading variant="h4" color="secondary">
              🎯 Set Your Challenge Level
            </AnimatedHeading>

            <Box mt={3} mb={4}>
              <SettingPanel />
            </Box>

            <Button variant="contained" color="primary" onClick={handleStart}>
              Start Quiz
            </Button>
          </Container>
        </CenterContent>
      </PageWrapper>
    );
  }

  if (quizFinished) {
    return (
      <PageWrapper>
        <CenterContent>
          <Container>
            <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
              🎉 Well done, {userName || 'Player'}!
            </Typography>
            <Typography variant="h5">
              Your final score is {score} out of {questions.length}
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              {getMotivation()}
            </Typography>
            <Box display="flex" justifyContent="center" gap={2}>
              <Button variant="outlined" onClick={handleRestart}>
                Restart Same Quiz
              </Button>
              <Button variant="contained" color="secondary" onClick={handleNextQuiz}>
                Next Quiz
              </Button>
              <Button
                startIcon={<StopIcon />}
                variant="outlined"
                color="error"
                onClick={handleStop}
              >
                Exit Quiz
              </Button>
            </Box>
          </Container>
        </CenterContent>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <CenterContent>
        <Container>
          <Grid container spacing={2} alignItems="center" sx={{ mb: 3 }}>
            <Grid item xs={4}>
              <ScoreBoard />
            </Grid>
            <Grid item xs={4} textAlign="center">
              <Typography variant="subtitle1" fontWeight="bold" color="primary.main">
                Question {currentIndex + 1} of {questions.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {questions.length - currentIndex - 1} questions left
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Timer duration={30} onTimeout={() => handleAnswer(false)} progress={progress} />
            </Grid>
          </Grid>

          <Box mt={4}>
            <QuizQuestion
              key={currentIndex}
              question={current}
              onAnswer={handleAnswer}
              showHint
              options={settings.types}
            />
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
      </CenterContent>
    </PageWrapper>
  );
}
