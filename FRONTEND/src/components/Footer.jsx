import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.dark',
        color: 'white',
        py: 2,
        mt: 4,
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        © 2025 QuizTheGlobe. Made with 🌍 by Hang Nguyen.
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Link href="/" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Home
        </Link>
        <Link href="/quiz" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Quiz
        </Link>
        <Link href="/explore" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Explore
        </Link>
        <Link href="/scoreboard" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Scoreboard
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;