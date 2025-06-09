import { useState } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const order = {
      customer: name,
      items: cart,
      date: new Date().toISOString(),
    };

    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    clearCart();
    navigate("/thanks");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📦 Finalizacja zamówienia</h2>
      <input
        type="text"
        placeholder="Imię i nazwisko"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Złóż zamówienie</button>
    </div>
  );
};

export default CheckoutPage;
