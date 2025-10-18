/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Órdenes
 */
import { Router } from 'express';
import Order from '../models/Order.js';
import Product from '../models/Product.js';
import { authRequired } from '../middleware/auth.js';

const router = Router();

/**
 * @swagger
 * /api/orders:
 *   get:
 *     tags: [Orders]
 *     summary: Listar mis órdenes
 */
router.get('/', authRequired, async (req, res) => {
  const list = await Order.find({ user: req.user.id }).populate('items.product');
  res.json(list);
});

/**
 * @swagger
 * /api/orders:
 *   post:
 *     tags: [Orders]
 *     summary: Crear orden
 */
router.post('/', authRequired, async (req, res) => {
  const { items } = req.body;
  const detailed = await Promise.all(items.map(async it => {
    const p = await Product.findById(it.product);
    return { product: p._id, quantity: it.quantity, price: p.price };
  }));
  const total = detailed.reduce((a, b) => a + b.price * b.quantity, 0);
  const order = await Order.create({ user: req.user.id, items: detailed, total, status:'pending' });
  res.status(201).json(order);
});

export default router;
