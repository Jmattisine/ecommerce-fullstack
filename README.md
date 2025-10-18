# Proyecto 7 — Aplicación Fullstack de Comercio Electrónico

Monorepo con:
- `client/` (React + Vite, Context + Reducer, rutas: Home, SignUp, Login, Profile, Productos, Producto, Checkout)
- `server/` (Express + MongoDB + JWT + Swagger + Stripe test/demo)

## Demo local
**Backend**
```bash
cd server
cp .env.sample .env   # completa JWT_SECRET y revisa MONGODB_URI ya seteado
npm i
npm run seed
npm run dev
```
**Frontend**
```bash
cd client
cp .env.sample .env   # VITE_API_URL=http://localhost:3006
npm i
npm run dev
```

## Endpoints
- Auth: `POST /api/auth/register`, `POST /api/auth/login`
- Products: `GET /api/products`, `GET /api/products/:id`, `POST/PUT/DELETE` (admin)
- Orders: `GET /api/orders`, `POST /api/orders`
- Checkout: `POST /api/checkout/pay` (demo o Stripe test)
- Docs: `/api/docs` (Swagger UI)

## Despliegue (sugerido)
- **API**: Render / Railway
- **Web**: Netlify / Vercel
- **DB**: MongoDB Atlas

Tarjeta Stripe de prueba: `4242 4242 4242 4242` (fecha/CVC cualquiera).
