import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import playerRoutes from './routes/playerRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();     // Create the app FIRST

app.use(cors());           // Then use middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Register routes
app.use('/api', playerRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
