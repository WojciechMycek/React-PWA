import { useCart } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";

function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto", padding: "0 1rem" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", marginBottom: "1.5rem" }}>
        Twój koszyk
      </h1>

      {cart.length === 0 ? (
        <p>
          Koszyk jest pusty.{" "}
          <Link to="/" style={{ color: "#bfa37c" }}>
            Wracaj do sklepu
          </Link>
          .
        </p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                  borderBottom: "1px solid #ddd",
                  paddingBottom: "0.5rem",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 8, marginRight: 16 }}
                />
                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontWeight: "600", fontSize: "1.1rem" }}>{item.name}</div>
                </div>
                <button
                  onClick={() => removeFromCart(item.name)}
                  style={{
                    backgroundColor: "#d46a6a",
                    border: "none",
                    color: "white",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Usuń
                </button>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
            <button
              onClick={clearCart}
              style={{
                backgroundColor: "#bfa37c",
                border: "none",
                color: "white",
                padding: "0.6rem 1.2rem",
                borderRadius: "8px",
                cursor: "pointer",
                flexGrow: 1,
              }}
            >
              Wyczyść koszyk
            </button>

            <button
              onClick={handleCheckout}
              style={{
                backgroundColor: "#5a4c3b",
                border: "none",
                color: "white",
                padding: "0.6rem 1.2rem",
                borderRadius: "8px",
                cursor: "pointer",
                flexGrow: 2,
              }}
            >
              Przejdź do kasy
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
