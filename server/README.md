# Backend (Express + Mongo + JWT)

## Scripts
```bash
npm i
npm run seed     # poblar productos
npm run dev      # desarrollo
npm start        # producción
```

## Variables (.env)
Ver `.env.sample` y copiar a `.env`.

## Endpoints
- Auth: `POST /api/auth/register`, `POST /api/auth/login`
- Products: `GET /api/products`, `GET /api/products/:id`, `POST/PUT/DELETE` (admin)
- Orders: `GET /api/orders`, `POST /api/orders`
- Checkout: `POST /api/checkout/pay` (demo o Stripe test)

## Docs
Swagger UI: `/api/docs`
