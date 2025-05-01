import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";
import CartSummary from "./components/CartSummary";
import CartItems from "./components/CartItems";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="app-title">Shopping Cart</h1>
        <Products />
        <CartSummary />
        <CartItems />
      </div>
    </div>
  );
}

export default App;
