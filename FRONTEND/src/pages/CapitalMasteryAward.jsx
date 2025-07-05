// src/pages/CapitalMasteryAward.jsx

import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function CapitalMasteryAward() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const savedPlayers = JSON.parse(localStorage.getItem('players')) || [];
    // Sort players by descending score
    const sortedPlayers = savedPlayers.sort((a, b) => b.score - a.score);
    setPlayers(sortedPlayers);
  }, []);

  return (
    <Box sx={{ px: 3, py: 5 }}>
      <Typography variant="h3" textAlign="center" fontWeight="bold" color="primary">
        🏆 Capital Mastery Awards
      </Typography>

      <Typography variant="h5" mt={4} mb={2}>
        🎉 Players Who Have Played:
      </Typography>

      <List>
        {players.length === 0 && (
          <Typography variant="body1" textAlign="center" color="text.secondary">
            No players have played yet. Be the first!
          </Typography>
        )}

        {players.map((player, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${index + 1}. ${player.name}`}
              secondary={`Score: ${player.score}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
