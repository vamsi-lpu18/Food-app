# GoFood - Food Delivery Application

A full-stack food delivery application built with React, Node.js, Express, and MongoDB.

## Quick Deploy

### Option 1: Heroku (Easiest)

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku app**
   ```bash
   heroku create your-app-name
   ```

4. **Set environment variables**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set MONGODB_URI="your_mongodb_connection_string"
   heroku config:set JWT_SECRET="your_secret_key"
   ```

5. **Deploy**
   ```bash
   npm run build
   git add .
   git commit -m "Deploy"
   git push heroku main
   ```

### Option 2: Railway (Simple)

1. Go to [Railway.app](https://railway.app/)
2. Connect your GitHub repo
3. Select the `Backend` folder
4. Add environment variables in Railway dashboard
5. Deploy

### Option 3: Vercel + Railway

1. **Deploy backend to Railway** (follow Option 2)
2. **Deploy frontend to Vercel**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

## Environment Setup

Create a `.env` file in the `Backend` directory:

```env
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/GoFood
NODE_ENV=production
JWT_SECRET=your_secret_key
```

## Local Development

```bash
# Install dependencies
npm install
cd Backend && npm install && cd ..

# Start backend
cd Backend && npm run dev

# Start frontend (in new terminal)
npm run dev
```

## Features

- 🍕 Browse food items by categories
- 🛒 Add items to cart with different sizes
- 👤 User authentication (signup/login)
- 📦 Order history and tracking
- 💳 Secure checkout process

That's it! Your app is ready to deploy.
