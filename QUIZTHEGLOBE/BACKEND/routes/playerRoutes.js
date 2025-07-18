
import express from 'express';
import {
  savePlayer,
  getTopPlayers,
  updatePlayer,
  deletePlayer,
} from '../controllers/playerController.js';

const router = express.Router();

router.post('/players', savePlayer);// Save new player score
router.get('/players/top', getTopPlayers); // Get top 10 players
router.put('/players/:id', updatePlayer);     // ✅ Update player
router.delete('/players/:id', deletePlayer);  // ✅ Delete player

export default router;
