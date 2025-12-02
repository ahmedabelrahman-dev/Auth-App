import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { connectDB } from './db/connectDB.js';

import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.route.js';

dotenv.config();
const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log('Server is running on port: ', PORT);
  connectDB();
});
