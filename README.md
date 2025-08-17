# 🍕 GoFood - Food Delivery Application

A modern, full-stack food delivery web application built with React and Node.js, featuring user authentication, real-time cart management, and order processing.

![GoFood Banner](https://images.unsplash.com/photo-1504674900240-9c9c0b0b0b0b?w=1200&h=400&fit=crop)

## 🌟 Live Demo

- **Frontend**: [GoFood App](https://gofood-frontend.onrender.com)
- **Backend API**: [GoFood API](https://go-food-backend-w4p1.onrender.com)

## ✨ Features

### 🍽️ Food Management
- **Browse Food Items**: Explore a diverse menu with categories
- **Search Functionality**: Find your favorite dishes quickly
- **Food Categories**: Organized by cuisine types (Biryani/Rice, Pizza, etc.)
- **Detailed Food Information**: Images, descriptions, and pricing

### 🛒 Shopping Cart
- **Add to Cart**: Seamlessly add items with different sizes
- **Real-time Cart Updates**: Instant quantity and price calculations
- **Cart Persistence**: Items remain in cart across sessions
- **Remove Items**: Easy item removal from cart
- **Order Summary**: Clear breakdown of costs

### 👤 User Authentication
- **User Registration**: Create new accounts with email
- **Secure Login**: JWT-based authentication
- **Password Security**: bcrypt hashing for data protection
- **Session Management**: Persistent login sessions

### 📦 Order Management
- **Checkout Process**: Secure order placement
- **Order History**: View all past orders
- **Order Tracking**: Real-time order status
- **Email-based Orders**: Orders linked to user accounts

### 🎨 User Interface
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface
- **Bootstrap Styling**: Consistent design language
- **Interactive Elements**: Smooth animations and transitions

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - Modern UI library
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Bootstrap 5.3.2** - CSS framework for responsive design
- **React Bootstrap** - Bootstrap components for React
- **Context API** - State management for cart and user data

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT (JSON Web Tokens)** - Authentication and authorization
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Database
- **MongoDB Atlas** - Cloud-hosted MongoDB database
- **Collections**:
  - `users` - User account information
  - `food_items` - Menu items and categories
  - `orders` - Order history and details

### Deployment
- **Render** - Backend hosting and static site hosting
- **Vercel** - Alternative frontend hosting
- **GitHub** - Version control and repository hosting

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vamsi-lpu18/Food-app.git
   cd Food-app
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**

   Create `.env` file in the backend directory:
   ```env
   NODE_ENV=development
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

5. **Run the Application**

   **Backend:**
   ```bash
   cd backend
   npm run dev
   ```

   **Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
Gofood/
├── backend/                 # Node.js API server
│   ├── models/             # MongoDB schemas
│   │   ├── user.js         # User model
│   │   └── Orders.js       # Order model
│   ├── Routers/            # API routes
│   │   ├── Createuser.js   # User authentication
│   │   ├── DisplayData.js  # Food items API
│   │   └── OrderData.js    # Order management
│   ├── db.js              # Database connection
│   ├── index.js           # Server entry point
│   └── package.json       # Backend dependencies
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── Card.jsx    # Food item card
│   │   │   ├── Navbar.jsx  # Navigation bar
│   │   │   ├── Footer.jsx  # Footer component
│   │   │   └── ContextReducer.jsx # State management
│   │   ├── screens/        # Page components
│   │   │   ├── Home.jsx    # Main page
│   │   │   ├── Login.jsx   # Login page
│   │   │   ├── Signup.jsx  # Registration page
│   │   │   ├── Cart.jsx    # Shopping cart
│   │   │   └── Myorder.jsx # Order history
│   │   ├── config.js       # API configuration
│   │   └── App.jsx         # Main app component
│   └── package.json        # Frontend dependencies
├── render.yaml             # Render deployment config
└── README.md              # Project documentation
```

## 🔧 API Endpoints

### Authentication
- `POST /api/create` - User registration
- `POST /api/login` - User login

### Food Items
- `POST /api/DisplayData` - Get all food items and categories

### Orders
- `POST /api/orderData` - Place new order
- `POST /api/myOrderData` - Get user's order history

### Health Check
- `GET /health` - API health status
- `GET /` - API root endpoint

## 🚀 Deployment

### Backend Deployment (Render)

1. **Connect Repository**
   - Link your GitHub repository to Render
   - Set root directory to `backend`

2. **Environment Variables**
   ```env
   NODE_ENV=production
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_secure_jwt_secret
   PORT=10000
   ```

3. **Build Settings**
   - Build Command: `npm install`
   - Start Command: `npm start`

### Frontend Deployment (Vercel/Render)

1. **Connect Repository**
   - Link your GitHub repository
   - Set root directory to `frontend`

2. **Environment Variables**
   ```env
   REACT_APP_API_URL=https://your-backend-url.onrender.com
   ```

3. **Build Settings**
   - Build Command: `npm run build`
   - Output Directory: `dist`

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt encryption for user passwords
- **CORS Protection**: Configured for production domains
- **Environment Variables**: Sensitive data protection
- **Input Validation**: Server-side data validation

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience
- **Tablet**: Touch-friendly interface
- **Mobile**: Optimized for small screens

## 🎯 Key Features Explained

### Shopping Cart System
- **Context API**: Global state management for cart data
- **Local Storage**: Cart persistence across browser sessions
- **Real-time Updates**: Instant price and quantity calculations
- **Size Selection**: Multiple portion sizes for each item

### User Authentication Flow
1. **Registration**: Email-based account creation
2. **Login**: Secure authentication with JWT tokens
3. **Session Management**: Persistent login state
4. **Protected Routes**: Order placement requires authentication

### Order Processing
1. **Cart Validation**: Ensures items are in cart
2. **User Authentication**: Verifies user login status
3. **Order Creation**: Saves order to database
4. **Cart Clear**: Automatically clears cart after successful order
5. **Order History**: Displays all user orders

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Vamsi** - [GitHub Profile](https://github.com/vamsi-lpu18)

## 🙏 Acknowledgments

- **Bootstrap** for the responsive UI framework
- **MongoDB Atlas** for cloud database hosting
- **Render** for reliable hosting services
- **Unsplash** for beautiful food images

## 📞 Support

If you have any questions or need support:
- Create an issue on GitHub
- Contact: [Your Email]
- Project Link: [https://github.com/vamsi-lpu18/Food-app](https://github.com/vamsi-lpu18/Food-app)

---

⭐ **Star this repository if you found it helpful!**
