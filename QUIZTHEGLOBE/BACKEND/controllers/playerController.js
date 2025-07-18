
import Player from '../models/Player.js';

// Save new player score
export const savePlayer = async (req, res) => {
  const { name, score } = req.body;
  if (!name || score == null || typeof score !== 'number' || score < 0) {
    return res.status(400).json({ message: 'Valid name and non-negative score are required' });
  }

  try {
    const player = new Player({ name: name.trim(), score });
    await player.save();
    res.status(201).json({ message: 'Player saved', player });
  } catch (error) {
    res.status(500).json({ message: 'Server error occurred while saving player.' });
  }
};

// Get top 10 players
export const getTopPlayers = async (req, res) => {
  try {
    const players = await Player.find().sort({ score: -1, createdAt: 1 }).limit(10);
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: 'Server error occurred while retrieving top players.' });
  }
};

// ✅ Update player by ID
export const updatePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }

    res.json({ message: 'Player updated', player });
  } catch (error) {
    res.status(500).json({ message: 'Error updating player', error });
  }
};

// ✅ Delete player by ID
export const deletePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id);
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }

    res.json({ message: 'Player deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting player', error });
  }
};
