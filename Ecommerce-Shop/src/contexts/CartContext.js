import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if(cart) {
      let total = 0;
      for(let i = 0;i < cart.length;i++) {
        total += cart[i].price * cart[i].amount;
      }
      setTotal(total.toFixed(2));
    }
  });
  useEffect(() => {
    if (cart) {
      let amount = 0;
      for (let i = 0; i < cart.length; i++) {
        amount += cart[i].amount;
      }
      setItemAmount(amount);
    }
  }, [cart]);
  const addToCart = (product) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find(item => item.id === newItem.id);
    if (cartItem) {
      newItem.amount += cartItem.amount;
      setCart((prev) => prev.map(item => item.id === newItem.id ? newItem : item));
    } else {
      setCart((prev) => [...prev, newItem]);
    }
    console.log(cart);
  }
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(item => item.id === id ? false : true))
  };
  const reduceFromCart = (id) => {
    const cartItem = cart.find(item => item.id === id);
    if (cartItem && cartItem.amount > 1) {
      cartItem.amount -= 1;
      setCart((prev) => prev.map(item => item.id === id ? cartItem : item));
    }
  }
  const plusQuantity = (id) => {
    setCart((prev) => prev.map(item => item.id === id ? { ...item, amount: item.amount + 1 } : item));
  }
  const clearCart = () => {
    setCart([]);
    setItemAmount(0);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, reduceFromCart, removeFromCart, plusQuantity, clearCart, itemAmount, total }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;