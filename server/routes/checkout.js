/**
 * @swagger
 * tags:
 *   name: Checkout
 *   description: Pagos
 */
import { Router } from 'express';
import Order from '../models/Order.js';
import { authRequired } from '../middleware/auth.js';
import Stripe from 'stripe';

const router = Router();
const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

/**
 * @swagger
 * /api/checkout/pay:
 *   post:
 *     tags: [Checkout]
 *     summary: Pagar orden (demo o Stripe test)
 */
router.post('/pay', authRequired, async (req, res) => {
  const { orderId } = req.body;
  const order = await Order.findById(orderId);
  if (!order) return res.status(404).json({ error: 'Orden no existe' });

  if (!stripe) {
    order.status = 'paid';
    order.paymentId = 'demo_' + Date.now();
    await order.save();
    return res.json({ ok: true, order });
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(order.total * 100),
    currency: 'clp',
    automatic_payment_methods: { enabled: true }
  });

  res.json({ clientSecret: paymentIntent.client_secret, orderId: order._id });
});

export default router;
