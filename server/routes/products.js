/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Gestión de productos
 */
import { Router } from 'express';
import Product from '../models/Product.js';
import { authRequired, isAdmin } from '../middleware/auth.js';

const router = Router();

/**
 * @swagger
 * /api/products:
 *   get:
 *     tags: [Products]
 *     summary: Lista de productos
 */
router.get('/', async (_, res) => {
  const list = await Product.find().sort({ createdAt: -1 });
  res.json(list);
});

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     tags: [Products]
 *     summary: Detalle de producto
 */
router.get('/:id', async (req, res) => {
  const p = await Product.findById(req.params.id);
  if (!p) return res.status(404).json({ error: 'No existe' });
  res.json(p);
});

/**
 * @swagger
 * /api/products:
 *   post:
 *     tags: [Products]
 *     summary: Crear producto (admin)
 */
router.post('/', authRequired, isAdmin, async (req, res) => {
  const p = await Product.create(req.body);
  res.status(201).json(p);
});

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     tags: [Products]
 *     summary: Actualizar producto (admin)
 */
router.put('/:id', authRequired, isAdmin, async (req, res) => {
  const p = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(p);
});

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     tags: [Products]
 *     summary: Eliminar producto (admin)
 */
router.delete('/:id', authRequired, isAdmin, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

export default router;
