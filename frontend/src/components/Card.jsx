import React, { useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

const Card = ({ name, img, description, options, id }) => {
  let opt = options;
  let optvalue = Object.keys(opt);
  
  // Set default size to first available option, default quantity to 1
  const [size, setSize] = useState(optvalue[0] || "");
  const [quant, setQuant] = useState(1);
  
  const dispatch = useDispatchCart();
  const data = useCart();
  const fallbackImage = "https://th.bing.com/th/id/OSK.7f501abf84acb523ee6f0d6157f68bfa?w=200&h=126&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1";
  
  const handleAddtoCart = async () => {
    if (!size) {
      alert("Please select a size first!");
      return;
    }
    
    // Calculate price first
    const price = calculatePrice();
    
    // Check if item already exists with same id and size
    // let existingItem = null;
    // for(let i = 0; i < data.length; i++){
    //   if(data[i].id === id && data[i].size === size){
    //     existingItem = data[i];
    //     break;
    //   }
    // }
    
    // if(existingItem){
    //   // Item exists, update quantity and price
    //   await dispatch({
    //     type: "UPDATE",
    //     id: id,
    //     size: size,
    //     quant: existingItem.quant + quant,
    //     price: existingItem.price + price
    //   });
    //   // return 
    // } else {
    //   // New item, add to cart
    //   await dispatch({ 
    //     type: 'ADD', 
    //     id: id, 
    //     name: name, 
    //     price: price, 
    //     quant: quant, 
    //     size: size, 
    //     description: description, 
    //     img: img 
    //   });
    //   // return 
    // }
    // await dispatch({ 
    //   type: 'ADD', 
    //   id: id, 
    //   name: name, 
    //   price: price, 
    //   quant: quant, 
    //   size: size, 
    //   description: description, 
    //   img: img 
    // });
    let food = []
    for (const item of data) {
      if (item.id === id) {
        food = item;

        break;
      }
    }
    console.log(food)
    console.log(new Date())
    if (food !=[]) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id:id, price: price, quant: quant })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: id, name: name, price: price, quant:quant, size: size,img: img })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }

    await dispatch({ type: "ADD", id:id, name: name, price:price, quant:quant, size: size })



    console.log("Cart updated:", data);
  }
  
  const calculatePrice = () => {
    if (!size || !options[size]) return 0;
    const optionPrice = parseInt(options[size]);
    if (isNaN(optionPrice)) return 0;
    return quant * optionPrice;
  };
  
  const price = calculatePrice();
  
  return (
    <div className="col-12">
      <div className="card h-100 shadow-sm border-0" style={{ maxWidth: "100%" }}>
        <div className="position-relative">
          <img 
            src={img && img !== "#" ? img : fallbackImage} 
            className="card-img-top" 
            alt={name}
            style={{ 
              height: "200px", 
              objectFit: "cover",
              borderTopLeftRadius: "0.375rem",
              borderTopRightRadius: "0.375rem"
            }}
            onError={(e) => {
              e.target.src = fallbackImage;
            }}
          />
          <div className="position-absolute top-0 end-0 m-2">
            <span className="badge bg-success fs-6">₹{price}</span>
          </div>
        </div>
        
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold text-success mb-2">{name}</h5>
          <p className="card-text text-muted flex-grow-1 mb-3">
            {description}
          </p>
          
          <div className="row g-2 mb-3">
            <div className="col-6">
              <label className="form-label small text-muted">Quantity</label>
              <select 
                className="form-select form-select-sm border-success" 
                value={quant}
                onChange={(e) => setQuant(parseInt(e.target.value))}
              >
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-6">
              <label className="form-label small text-muted">Size</label>
              <select 
                className="form-select form-select-sm border-success" 
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                {optvalue.map((sizeOption) => {
                  return (
                    <option key={sizeOption} value={sizeOption}>{sizeOption}</option>
                  )
                })}
              </select>
            </div>
          </div>
          
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-success fw-bold fs-5">₹{price}</div>
            <button 
              className="btn btn-success btn-sm px-3" 
              onClick={handleAddtoCart}
              disabled={!size}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;