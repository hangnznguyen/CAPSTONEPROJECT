import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@mui/system';
import { Typewriter } from 'react-simple-typewriter';

// 🎯 Bounce-in animation for headline
const headlineAnimation = keyframes`
  0% { transform: translateY(-20px); opacity: 0 }
  50% { transform: translateY(10px); opacity: 1 }
  100% { transform: translateY(0); opacity: 1 }
`;

const Home = () => {
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    if (nickname.trim() === '') {
      alert('Please enter your nickname');
      return;
    }
    navigate('/quiz', { state: { nickname } });
  };

  const handleLearn = () => {
    navigate('/explore');
  };

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        backgroundImage: 'url(/assets/images/globe-bg.jpg)', // Update this path as needed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 3,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.85)',
          borderRadius: 4,
          p: 4,
          textAlign: 'center',
          boxShadow: 4,
        }}
      >
        {/* 🎯 Animated Headline */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            animation: `${headlineAnimation} 1.5s ease-in-out`,
            color: 'primary.main',
            fontFamily: '"Comic Sans MS", cursive',
          }}
        >
          How well do you know the world?
        </Typography>

        {/* ⌨️ Typewriter Subheading in Green */}
        <Typography
          variant="h6"
          sx={{ mb: 4, fontStyle: 'italic', color: '#4CAF50' }}
        >
          <Typewriter
            words={[
              'Test your geography.',
              'Explore new countries.',
              'Become a capital master!',
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </Typography>

        {/* 🎮 Nickname Input + Buttons */}
        <Paper
          elevation={3}
          sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper', mb: 3 }}
        >
          <TextField
            label="Enter your nickname"
            variant="outlined"
            fullWidth
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            sx={{ mb: 3 }}
          />

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleStart}
              sx={{
                fontWeight: 'bold',
                minWidth: 140,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1) rotate(-2deg)',
                  backgroundColor: 'secondary.main',
                },
              }}
            >
              🌎 Start the Quiz
            </Button>

            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={handleLearn}
              sx={{
                fontWeight: 'bold',
                minWidth: 140,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1) rotate(2deg)',
                  borderColor: 'secondary.dark',
                  color: 'secondary.dark',
                },
              }}
            >
              🌐 Learn More
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;