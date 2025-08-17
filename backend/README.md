# GoFood Backend

Backend API for the GoFood food delivery application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```env
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/GoFood
NODE_ENV=production
JWT_SECRET=your_secret_key
PORT=5000
```

3. Run development server:
```bash
npm run dev
```

## API Endpoints

- `POST /api/create` - Create new user
- `POST /api/login` - User login
- `POST /api/DisplayData` - Get food items and categories
- `POST /api/orderData` - Place new order
- `POST /api/myOrderData` - Get user's order history
- `GET /health` - Health check

## Deployment

Deploy to Render, Railway, or any Node.js hosting platform.
