import { useState } from "react";
import { useCart } from "./CartContext";

const products = [
  { name: "Naszyjnik z perłą", image: "/images/perla.jpg", price: 249 },
  { name: "Bransoletka boho", image: "/images/boho.jpg", price: 129 },
  { name: "Kolczyki srebrne", image: "/images/kolczyki.jpeg", price: 179 },
  { name: "Pierścionek z bursztynem", image: "/images/piersconek.jpg", price: 199 },
  { name: "Naszyjnik klasyczny", image: "/images/klasyczny.jpg", price: 299 },
  { name: "Bransoletka minimalistyczna", image: "/images/minimal.jpg", price: 139 },
  { name: "Kolczyki z kamieniami", image: "/images/kamienie.jpg", price: 189 },
  { name: "Zestaw ślubny", image: "/images/slub.jpg", price: 499 },
  { name: "Nowość tygodnia", image: "/images/nowosc.jpg", price: 159 },
  { name: "Złoty pierścionek", image: "/images/zloty.jpg", price: 349 },
  { name: "Bransoletka z muszelek", image: "/images/muszle.jpg", price: 119 },
  { name: "Kolczyki w stylu vintage", image: "/images/vintage.jpg", price: 179 },
  { name: "Minimalistyczny naszyjnik", image: "/images/mininaszyjnik.jpg", price: 229 },
  { name: "Zestaw etniczny", image: "/images/etniczny.jpg", price: 279 },
];

function HomeContent() {
  const [inputMin, setInputMin] = useState(0);
  const [inputMax, setInputMax] = useState(1000);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const { addToCart } = useCart();

  const handleFilter = () => {
    setMinPrice(inputMin);
    setMaxPrice(inputMax);
  };

  const filteredProducts = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  return (
    <>
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
          color: "#333",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        ✨ Nowości i bestselery
      </h2>

      {/* Filtrowanie cen */}
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <label>
          Cena od:{" "}
          <input
            type="number"
            value={inputMin}
            onChange={(e) => setInputMin(Number(e.target.value))}
            style={{ padding: "0.3rem", width: "80px" }}
          />
        </label>
        <label>
          do:{" "}
          <input
            type="number"
            value={inputMax}
            onChange={(e) => setInputMax(Number(e.target.value))}
            style={{ padding: "0.3rem", width: "80px" }}
          />
        </label>
        <button
          onClick={handleFilter}
          style={{
            padding: "0.4rem 1rem",
            backgroundColor: "#bfa37c",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Filtruj
        </button>
      </div>

      {/* Lista produktów */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          justifyItems: "center",
        }}
      >
        {filteredProducts.length === 0 ? (
          <div style={{ gridColumn: "1 / -1", textAlign: "center", color: "#888" }}>
            Brak produktów w wybranym przedziale cenowym.
          </div>
        ) : (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                maxWidth: "220px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "220px",
                  backgroundColor: "#f5f5f5",
                  border: "1px solid #ccc",
                  borderRadius: "12px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    e.currentTarget.src = "/images/placeholder.jpg";
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "#444",
                  marginTop: "0.5rem",
                }}
              >
                {product.name}
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#bfa37c",
                  marginTop: "0.2rem",
                }}
              >
                {product.price} zł
              </div>
              <button
                onClick={() => {
                  addToCart(product);
                  alert(`Dodano "${product.name}" do koszyka!`);
                }}
                style={{
                  marginTop: "0.5rem",
                  padding: "0.3rem 0.8rem",
                  fontSize: "0.85rem",
                  backgroundColor: "#444",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Dodaj do koszyka
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default HomeContent;
