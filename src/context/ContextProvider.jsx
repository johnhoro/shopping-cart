import React, { useState } from "react";
import { AppContext } from "./store";

const PRODUCTS = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Smartphone", price: 300 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Smartwatch", price: 150 },
];

export default function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };
  const THRESHOLD = 1000;

  const cartTotalAmount = cart.reduce(
    (acc, cv) => acc + cv.price * cv.quantity,
    0
  );

  const addToCart = (product) => {
    const isItemExisting = cart.find((item) => item.id === product.id);
    if (isItemExisting) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const isItemExisting = cart.find((item) => item.id === product.id);
    if (isItemExisting && isItemExisting.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.id !== product.id));
    }
  };
  return (
    <AppContext.Provider
      value={{
        PRODUCTS,
        cart,
        addToCart,
        removeFromCart,
        cartTotalAmount,
        FREE_GIFT,
        THRESHOLD,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
