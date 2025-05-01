import React, { useContext } from "react";
import { AppContext } from "../../context/store";
import "./styles.css";

export default function Products() {
  const { PRODUCTS, addToCart } = useContext(AppContext);

  return (
    <div>
      <h1 className="product-title">Products</h1>

      <div className="product-container">
        {PRODUCTS.map((item) => {
          return (
            <div className="product-item">
              <h1>{item.name}</h1>
              <p>₹{item.price}</p>
              <button
                onClick={() => addToCart(item)}
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
