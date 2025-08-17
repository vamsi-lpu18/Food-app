require('dotenv').config();
const express=require('express');
const app=express();
const mongoDB=require('./db');
const cors = require('cors');
const path = require('path');

mongoDB();

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.CORS_ORIGIN || '*' 
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

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
} else {
  app.get('/',(req,res)=>{
      res.send('Hello world - GoFood Backend API')
  })
}

app.listen(port,()=>{
    console.log(`Server running on port ${port} in ${process.env.NODE_ENV || 'development'} mode`)
})
