import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { getApiUrl } from '../config';

export default function MyOrder() {

    const [orderData, setorderData] = useState({})

    const fetchMyOrder = async () => {
        let email = localStorage.getItem('email') || localStorage.getItem('userEmail') || localStorage.getItem('user_email');
        
        if (!email) {
            for (let key of Object.keys(localStorage)) {
                const value = localStorage.getItem(key);
                if (value && value.includes('@') && value.includes('.')) {
                    email = value;
                    break;
                }
            }
        }
        
        console.log("Using email:", email);
        
        if (!email) {
            console.error("No email found in localStorage");
            return;
        }

        await fetch(getApiUrl("/api/myOrderData"), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        }).then(async (res) => {
            let response = await res.json()
            setorderData(response)
            console.log("Response:", response);
        }).catch(error => {
            console.error("Error fetching orders:", error);
        })
    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='mt-4 mb-4'>My Orders</h2>
                        
                        {orderData && orderData.order_data && orderData.order_data.order_data && orderData.order_data.order_data.length > 0 ? 
                            orderData.order_data.order_data.slice(0).reverse().map((orderGroup, index) => {
                                const orderDate = orderGroup[0]?.Order_date || 'Unknown Date';
                                
                                const orderItems = orderGroup.slice(1).filter(item => item.name);
                                
                                return (
                                    <div key={index} className='w-100 mb-4'>
                                        <div className='m-auto mt-3'>
                                            <h5>Order Date: {orderDate}</h5>
                                            <hr />
                                        </div>
                                        
                                        <div className='row'>
                                            {orderItems.length > 0 ? 
                                                orderItems.map((item, itemIndex) => (
                                                    <div key={itemIndex} className='col-12 col-md-6 col-lg-3 mb-3'>
                                                        <div className="card" style={{ width: "16rem", maxHeight: "360px" }}>
                                                            <img src={item.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                                            <div className="card-body">
                                                                <h5 className="card-title">{item.name}</h5>
                                                                <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                    <span className='m-1'>Qty: {item.quant}</span>
                                                                    <span className='m-1'>Size: {item.size}</span>
                                                                    <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                        ₹{item.price}/-
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            : 
                                                <div className='col-12'>
                                                    <p>No items found in this order</p>
                                                </div>
                                            }
                                        </div>
                                        
                                        {orderItems.length > 0 && (
                                            <div className='mt-3 pt-3 border-top'>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <span className='text-muted'>
                                                        Total Items: {orderItems.length}
                                                    </span>
                                                    <span className='fw-bold text-success'>
                                                        Total Amount: ₹{orderItems.reduce((sum, item) => sum + (parseInt(item.price) || 0), 0)}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            })
                        : 
                            <div className='text-center mt-5'>
                                <h3>No orders found</h3>
                                <p>Either you haven't placed any orders yet, or there was an issue fetching your orders.</p>
                                <button onClick={fetchMyOrder} className='btn btn-primary'>Try Again</button>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}