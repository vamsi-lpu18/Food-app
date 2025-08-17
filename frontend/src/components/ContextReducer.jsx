import React, { createContext, useContext, useReducer } from 'react'

const carStateContext = createContext();
const carDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
 
      return [...state, { id: action.id, name: action.name, quant: action.quant, size: action.size, price: action.price, img: action.img }]
      
    case 'REMOVE':
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;
      
    case 'UPDATE':
      let arr = [...state]
      arr.find((food, index) => {
          if (food.id === action.id) {
              console.log(food.quant, parseInt(action.quant), action.price + food.price)
              arr[index] = { ...food, quant: parseInt(action.quant) + food.quant, price: action.price + food.price }
          }
          return arr
      })
      return arr
      
    case 'DROP':
      return []; // Clear cart
      
    default:
      return state;
  }
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  
  return (
    <carDispatchContext.Provider value={dispatch}>
      <carStateContext.Provider value={state}>
        {children}
      </carStateContext.Provider>
    </carDispatchContext.Provider>
  )
}

export default CartProvider
export const useCart = () => useContext(carStateContext);
export const useDispatchCart = () => useContext(carDispatchContext);