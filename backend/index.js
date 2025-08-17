require('dotenv').config();
const express=require('express');
const app=express();
const mongoDB=require('./db');
const cors = require('cors');

mongoDB();

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? true // Allow all origins in production
    : ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

const port = process.env.PORT || 5000;

// API routes
app.use('/api',require('./Routers/Createuser'))
app.use('/api',require('./Routers/DisplayData'))
app.use('/api',require('./Routers/OrderData'))

// Health check endpoint
app.get('/health',(req,res)=>{
    res.status(200).json({ status: 'OK', message: 'Server is running' })
})

// Simple root endpoint
app.get('/',(req,res)=>{
    res.json({ message: 'GoFood Backend API is running' })
})

app.listen(port,()=>{
    console.log(`Server running on port ${port} in ${process.env.NODE_ENV || 'development'} mode`)
})
