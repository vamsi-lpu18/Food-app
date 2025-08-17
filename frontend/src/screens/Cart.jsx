import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer';
import { getApiUrl } from '../config';

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  
  if (data.length === 0) {
    return (
      <div style={{ 
        padding: '20px', 
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        color: '#333',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Your Cart is Empty!</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>Add some food items to get started.</p>
        <button 
          style={{ 
            background: '#007bff', 
            color: 'white', 
            border: 'none', 
            padding: '12px 24px', 
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
          onClick={() => window.history.back()}
        >
          Continue Shopping
        </button>
      </div>
    )
  }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("email");
    
    if (!userEmail) {
      alert("Please login first to checkout!");
      return;
    }
    
    try {
      let response = await fetch(getApiUrl("/api/orderData"), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          order_date: new Date().toDateString()
        })
      });
      
      console.log("JSON RESPONSE:", response.status);
      
      if (response.status === 200) {
        alert("Order placed successfully! Your cart has been cleared.");
        dispatch({ type: "DROP" });
      } else {
        const errorData = await response.json();
        console.error("Order failed:", errorData);
        alert("Order failed: " + (errorData.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Checkout failed: " + error.message);
    }
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  
  return (
    <div style={{ 
      padding: '20px', 
      minHeight: '100vh',
      overflow: 'auto',
      backgroundColor: '#f8f9fa',
      color: '#333'
    }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Shopping Cart</h1>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: '2', minWidth: '300px' }}>
          <h3 style={{ color: '#333', marginBottom: '15px' }}>Cart Items ({data.length})</h3>
          <div style={{ 
            border: '1px solid #ccc', 
            borderRadius: '8px', 
            padding: '20px',
            maxHeight: '60vh',
            overflowY: 'auto',
            backgroundColor: 'white'
          }}>
            {data.map((food, index) => (
              <div key={index} style={{ 
                borderBottom: '1px solid #eee', 
                padding: '15px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <img 
                  src={food.img && food.img !== "#" ? food.img : "https://via.placeholder.com/60x60?text=Food"} 
                  alt={food.name}
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }}
                />
                <div style={{ flex: '1' }}>
                  <h4 style={{ margin: '0 0 5px 0', color: '#333' }}>{food.name}</h4>
                  <p style={{ margin: '0 0 5px 0', color: '#666' }}>{food.description}</p>
                  <span style={{ 
                    background: '#f0f0f0', 
                    padding: '2px 8px', 
                    borderRadius: '12px', 
                    fontSize: '12px' ,
                    color:"red",
                    font:"40px"
                  }}>
                    {food.size}
                  </span>
                </div>
                <div style={{ textAlign: 'center', minWidth: '60px' }}>
                  <strong style={{ color: '#dc3545' }}>Qty: {food.quant}</strong>
                </div>
                <div style={{ textAlign: 'center', minWidth: '80px' }}>
                  <strong style={{ color: '#333' }}>₹{food.price}</strong>
                </div>
                <button 
                  style={{ 
                    background: '#dc3545', 
                    color: 'white', 
                    border: 'none', 
                    padding: '8px 16px', 
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                  onClick={() => dispatch({ type: "REMOVE", index: index })}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div style={{ flex: '1', minWidth: '250px' }}>
          <h3 style={{ color: '#333', marginBottom: '15px' }}>Order Summary</h3>
          <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', backgroundColor: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: '#333' }}>Items:</span>
              <span style={{ color: '#333' }}>{data.length}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: '#333' }}>Subtotal:</span>
              <span style={{ color: '#333' }}>₹{totalPrice}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: '#333' }}>Delivery:</span>
              <span style={{ color: 'green' }}>Free</span>
            </div>
            <hr style={{ margin: '15px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <strong style={{ color: '#333' }}>Total:</strong>
              <strong style={{ color: 'green', fontSize: '18px' }}>₹{totalPrice}</strong>
            </div>
            <button 
              style={{ 
                background: '#28a745', 
                color: 'white', 
                border: 'none', 
                padding: '12px', 
                borderRadius: '4px',
                width: '100%',
                fontSize: '16px',
                cursor: 'pointer'
              }}
              onClick={handleCheckOut}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button 
          style={{ 
            background: 'transparent', 
            color: '#007bff', 
            border: '1px solid #007bff', 
            padding: '10px 20px', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          onClick={() => window.history.back()}
        >
          Continue Shopping
        </button>
      </div>

     
    </div>
  )
}