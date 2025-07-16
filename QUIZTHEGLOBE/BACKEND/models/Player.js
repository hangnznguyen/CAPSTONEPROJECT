
import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  name: String,
  score: Number,
}, { timestamps: true });

const Player = mongoose.model('Player', playerSchema);
export default Player;
