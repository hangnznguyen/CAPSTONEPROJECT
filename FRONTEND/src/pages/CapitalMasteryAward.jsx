import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Collapse,
  Paper,
} from '@mui/material';
import Certificate from '../components/Certificate';
import confetti from 'canvas-confetti';

export default function CapitalMasteryAward() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const res = await fetch('/api/players/top');
        if (!res.ok) throw new Error('Failed to fetch top players');
        const data = await res.json();
        setPlayers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPlayers();
  }, []);

  if (loading) {
    return (
      <Box sx={{ px: 3, py: 5 }}>
        <Typography variant="h6" textAlign="center">Loading top players...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ px: 3, py: 5 }}>
        <Typography variant="h6" textAlign="center" color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url("/assets/images/Achievement.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          bgcolor: 'rgba(255,255,255,0.9)',
          borderRadius: 4,
          maxWidth: 500,
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          textAlign: 'center',
        }}
      >
        {/* 🥇 Top 10 Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            color: 'gold',
            textShadow: '0 0 10px #ffd700',
            fontFamily: "'Playfair Display', serif",
            mb: 4,
          }}
        >
          🥇 TOP 10 PLAYERS
        </Typography>

        {/* Player List */}
        <List>
          {players.map((player, index) => (
            <Box key={player._id || index} sx={{ mb: 3 }}>
              <ListItem
                sx={{
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  mb: 1,
                }}
                secondaryAction={
                  <Button
                    variant="outlined"
                    onClick={() => {
                      const isSame = selectedPlayer?._id === player._id;
                      setSelectedPlayer(isSame ? null : player);

                      if (!isSame) {
                        confetti({
                          particleCount: 100,
                          spread: 70,
                          origin: { y: 0.4 },
                        });
                      }
                    }}
                  >
                    Certificate
                  </Button>
                }
              >
                <ListItemText
                  primary={
                    <Typography variant="h6" fontWeight="bold" fontSize="1.3rem">
                      {index + 1}. {player.name}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body1" fontSize="1.1rem" color="text.secondary">
                      Score: {player.score}
                    </Typography>
                  }
                />
              </ListItem>

              <Collapse in={selectedPlayer?._id === player._id} timeout="auto" unmountOnExit>
                <Box mt={2}>
                  <Certificate name={player.name} score={player.score} />
                </Box>
              </Collapse>
            </Box>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
