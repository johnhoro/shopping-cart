import React, { useContext } from "react";
import "./styles.css";
import { Progress, theme } from "antd";
import { AppContext } from "../../context/store";

export default function CartSummary() {
  const { cartTotalAmount, THRESHOLD, FREE_GIFT } = useContext(AppContext);
  const progressBarValue= cartTotalAmount * 100 / THRESHOLD;
  return (
    <div>
      <h1 className="product-title">Cart Summary</h1>
      <div className="cart-summary-container">
        <div className="product-price-subtotal">
          <p>Subtotal</p>
          <p>₹{cartTotalAmount}</p>
        </div>
        {cartTotalAmount >= 1000 ? (
          <p className="free-mouse">You got a free {FREE_GIFT.name}!</p>
        ) : (
          <div className="gift-progress-bar">
            <p>
              Add ₹{THRESHOLD - cartTotalAmount} more to get a FREE{" "}
              {FREE_GIFT.name}!
            </p>
            <Progress percent={progressBarValue} showInfo={false} />
          </div>
        )}
      </div>
    </div>
  );
}
