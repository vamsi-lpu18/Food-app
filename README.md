# GoFood - Food Delivery Application

A full-stack food delivery application with separate frontend and backend.

## Project Structure

```
Gofood/
├── frontend/          # React frontend application
│   ├── src/          # React source code
│   ├── public/       # Static files
│   └── package.json  # Frontend dependencies
└── backend/          # Node.js backend API
    ├── Routers/      # API routes
    ├── models/       # Database models
    └── package.json  # Backend dependencies
```

## Quick Start

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Deployment

### Backend (Render/Railway)
1. Deploy the `backend` folder to Render or Railway
2. Set environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `NODE_ENV=production`

### Frontend (Vercel/Netlify)
1. Deploy the `frontend` folder to Vercel or Netlify
2. Set environment variable:
   - `REACT_APP_API_URL` = your backend URL

## Features

- 🍕 Browse food items by categories
- 🛒 Add items to cart with different sizes
- 👤 User authentication (signup/login)
- 📦 Order history and tracking
- 💳 Secure checkout process

## Tech Stack

- **Frontend:** React, Vite, Bootstrap
- **Backend:** Node.js, Express, MongoDB
- **Authentication:** JWT, bcrypt
