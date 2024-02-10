import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
// import authRoutes from './routes/authRoutes';
import { json } from 'body-parser';
import { pool } from './config/database';
import discountRoutes from './routes/discountRoutes'

// console.log({pool});

dotenv.config();

const app = express();

app.use(json());
app.use(cors());

// app.use(cors())

// Routes
app.use('/discounts', discountRoutes);

app.listen(3005, () => {
  console.log('Server is running on port 3005');
});
