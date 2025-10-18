import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product from './models/Product.js';

dotenv.config();
await mongoose.connect(process.env.MONGODB_URI, { dbName: process.env.DB_NAME || 'ecommerce' });
await Product.deleteMany({});
await Product.insertMany([
  { name: 'Pizza Margarita', price: 8990, description:'Clásica', stock: 50, image:'' },
  { name: 'Pizza Pepperoni', price: 9990, description:'Pepperoni', stock: 60, image:'' }
]);
console.log('Seed ok'); process.exit(0);
