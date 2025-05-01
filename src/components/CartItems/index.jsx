import React, { useContext } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import "./styles.css";
import { AppContext } from "../../context/store";

export default function CartItems() {
  const { cart, addToCart, removeFromCart } = useContext(AppContext);
  return (
    <div>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h1>Your cart is empty</h1>
          <p>Add some product to them here!</p>
        </div>
      ) : (
        <>
          <h1 className="product-title">Cart Items</h1>
          <div className="cart-item-container">
            {cart.map((item) => {
              return (
                <div className="cart-item">
                  <div className="item-detail">
                    <h1>{item.name}</h1>
                    <div className="calculate-item-price">
                      <p>₹{item.price}</p> <p>x</p>
                      <p>{item.quantity}</p> <p>=</p>
                      <p>₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                  <div>
                    <button
                      className="minus"
                      onClick={() => removeFromCart(item)}
                    >
                      <MinusOutlined
                        style={{ fontSize: "16px", color: "white" }}
                      />
                    </button>
                    <span>{item.quantity}</span>
                    <button className="plus" onClick={() => addToCart(item)}>
                      <PlusOutlined
                        style={{ fontSize: "16px", color: "white" }}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
