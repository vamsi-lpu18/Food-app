// Configuration for API endpoints
const config = {
  // API base URL - will be different for development and production
  API_BASE_URL: process.env.NODE_ENV === 'production' 
    ? (process.env.REACT_APP_API_URL || 'https://go-food-backend-w4p1.onrender.com') // Use environment variable or Render backend URL
    : 'http://localhost:5000', // Use localhost in development
  
  // Individual API endpoints
  endpoints: {
    displayData: '/api/DisplayData',
    createUser: '/api/create',
    login: '/api/login',
    orderData: '/api/orderData',
    myOrderData: '/api/myOrderData'
  }
};

// Helper function to get full API URL
export const getApiUrl = (endpoint) => {
  return `${config.API_BASE_URL}${endpoint}`;
};

export default config;
