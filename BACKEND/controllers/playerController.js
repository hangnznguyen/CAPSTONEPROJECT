// controllers/playerController.js
import Player from '../models/Player.js';

// Save new player score
export const savePlayer = async (req, res) => {
  console.log('Received player save request:', req.body);  // Log incoming data

  const { name, score } = req.body;

  if (!name || score == null) {
    console.log('Missing name or score in request');  // Log missing data case
    return res.status(400).json({ message: 'Name and score are required' });
  }

  try {
    const player = new Player({ name, score });
    await player.save();
    console.log('Player saved successfully:', player);  // Log success
    res.status(201).json({ message: 'Player saved', player });
  } catch (error) {
    console.error('Error saving player:', error);  // Log error details
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get top 10 players sorted by score descending
export const getTopPlayers = async (req, res) => {
  try {
    const players = await Player.find().sort({ score: -1, createdAt: 1 }).limit(10);
    res.json(players);
  } catch (error) {
    console.error('Error getting top players:', error);  // Log error details
    res.status(500).json({ message: 'Server error', error });
  }
};
