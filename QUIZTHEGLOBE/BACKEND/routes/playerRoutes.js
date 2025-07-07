// routes/playerRoutes.js
import express from 'express';
import { savePlayer, getTopPlayers } from '../controllers/playerController.js';

const router = express.Router();

router.post('/players', savePlayer);
router.get('/players/top', getTopPlayers);

export default router;
