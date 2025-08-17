import React from 'react'
import Navbar from './components/Navbar'
import Home from './screens/Home'
import Signup from './screens/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './screens/Login'
import Cart from './screens/Cart'
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import CartProvider from './components/ContextReducer.jsx'
import Myorder from './screens/Myorder.jsx'

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/create' element={<Signup/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/Myorder' element={<Myorder/>}/>

          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
