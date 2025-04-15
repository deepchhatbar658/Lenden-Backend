import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Lenden API' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 