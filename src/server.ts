import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import authRoutes from './routes/authRoutes';
import { json } from 'body-parser';
import { pool } from './config/database';
import discountRoutes from './routes/discountRoutes'

// console.log({pool});

dotenv.config();

const app = express();

app.use(json());

// Routes
app.use('/discounts', discountRoutes);

app.listen(3005, () => {
  console.log('Server is running on port 3005');
});
