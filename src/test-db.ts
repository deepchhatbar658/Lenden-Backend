import dotenv from 'dotenv';
import connectDB from './utils/db';

// Load environment variables
dotenv.config();

// Test MongoDB connection
console.log('Testing MongoDB connection...');
connectDB(); 