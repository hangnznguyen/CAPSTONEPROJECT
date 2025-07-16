import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import logo from '../assets/images/logo.png';

// React Icons
import { FaHome, FaQuestionCircle, FaGlobeAsia, FaTrophy } from 'react-icons/fa';

// Styled logo
const LogoImg = styled('img')({
  height: 80,
  marginRight: 20,
  borderRadius: 25,
});

// Animated Icon Wrapper
const AnimatedIcon = styled('span')({
  display: 'inline-block',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.3) rotate(10deg)',
  },
});

const Navbar = () => {
  return (
    <AppBar position="sticky" color="primary" elevation={6}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo and App Name */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <RouterLink to="/">
            <LogoImg src={logo} alt="QuizTheGlobe Logo" />
          </RouterLink>
          <Typography
            variant="h4"
            component={RouterLink}
            to="/"
            sx={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: 'bold',
              letterSpacing: '0.1em',
              fontFamily: '"Chewy", cursive',
              ml: 4,
            }}
          >
            QUIZ THE GLOBE
          </Typography>
        </Box>

        {/* Navigation Buttons */}
        <Box>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            startIcon={<AnimatedIcon><FaHome /></AnimatedIcon>}
            sx={{
              fontWeight: 700,
              mx: 1,
              fontSize: '1.6rem',
              textTransform: 'none',
            }}
          >
            Home
          </Button>

          <Button
            color="inherit"
            component={RouterLink}
            to="/quiz"
            startIcon={<AnimatedIcon><FaQuestionCircle /></AnimatedIcon>}
            sx={{
              fontWeight: 700,
              mx: 1,
              fontSize: '1.6rem',
              textTransform: 'none',
            }}
          >
            Quiz
          </Button>

          <Button
            color="inherit"
            component={RouterLink}
            to="/explore"
            startIcon={<AnimatedIcon><FaGlobeAsia /></AnimatedIcon>}
            sx={{
              fontWeight: 700,
              mx: 1,
              fontSize: '1.6rem',
              textTransform: 'none',
            }}
          >
            Explore
          </Button>

          <Button
            color="inherit"
            component={RouterLink}
            to="/capitalmasteryaward"
            startIcon={<AnimatedIcon><FaTrophy /></AnimatedIcon>}
            sx={{
              fontWeight: 700,
              mx: 1,
              fontSize: '1.6rem',
              textTransform: 'none',
            }}
          >
            CapitalMasteryAward
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
