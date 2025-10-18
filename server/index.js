import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';
import orderRoutes from './routes/orders.js';
import checkoutRoutes from './routes/checkout.js';
import { swaggerUi, swaggerSpec } from './swagger.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL || '*', credentials: true }));

mongoose.connect(process.env.MONGODB_URI, { dbName: process.env.DB_NAME || 'ecommerce' })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error', err.message));

app.get('/', (_, res) => res.json({ ok: true }));

// Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/checkout', checkoutRoutes);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log('Server on ' + PORT));
