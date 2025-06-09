import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import ImageHeader from "./ImageHeader";
import ImageHeader1 from "./ImageHeader1";
import { useCart } from "./CartContext";

interface ListGroupProps {
  content?: React.ReactNode;
}

function ListGroup({ content }: ListGroupProps) {
  const items = [
    "Klasyczna biżuteria",
  ];

  const subItems = ["Złoto", "Srebro", "Drewno"];
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const timeoutRef = useRef<number | null>(null);


  const { cart } = useCart(); // pobieramy koszyk

  const products = [
    { name: "Naszyjnik z perłą", image: "/images/perla.jpg", price: "249 zł" },
    { name: "Bransoletka boho", image: "/images/boho.jpg", price: "129 zł" },
    { name: "Kolczyki srebrne", image: "/images/kolczyki.jpeg", price: "179 zł" },
    { name: "Pierścionek z bursztynem", image: "/images/piersconek.jpg", price: "199 zł" },
    { name: "Naszyjnik klasyczny", image: "/images/klasyczny.jpg", price: "299 zł" },
    { name: "Bransoletka minimalistyczna", image: "/images/minimal.jpg", price: "139 zł" },
    { name: "Kolczyki z kamieniami", image: "/images/kamienie.jpg", price: "189 zł" },
    { name: "Zestaw ślubny", image: "/images/slub.jpg", price: "499 zł" },
    { name: "Nowość tygodnia", image: "/images/nowosc.jpg", price: "159 zł" },
    { name: "Złoty pierścionek", image: "/images/zloty.jpg", price: "349 zł" },
    { name: "Bransoletka z muszelek", image: "/images/muszle.jpg", price: "119 zł" },
    { name: "Kolczyki w stylu vintage", image: "/images/vintage.jpg", price: "179 zł" },
    { name: "Minimalistyczny naszyjnik", image: "/images/mininaszyjnik.jpg", price: "229 zł" },
    { name: "Zestaw etniczny", image: "/images/etniczny.jpg", price: "279 zł" },
  ];

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoverIndex(null);
    }, 200);
  };

  return (
    <div
      style={{
        backgroundColor: "#fdf8f3",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: "1", textAlign: "center", padding: "2rem" }}>
        {/* Nagłówek */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              fontSize: "3rem",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              background: "linear-gradient(to right, #bfa37c, #d4af7f)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            <span role="img" aria-label="pierścionek">
              💍
            </span>{" "}
            Ręcznie robiona biżuteria
          </div>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#555",
              marginTop: "0.5rem",
              fontStyle: "italic",
            }}
          >
            Unikatowe rękodzieło tworzone z pasją
          </p>
        </div>

        {/* Obrazki */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1.5rem",
            gap: "1rem",
          }}
        >
          <ImageHeader />
          <ImageHeader1 />
        </div>

        {/* Menu */}
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            listStyle: "none",
            padding: 0,
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          {items.map((item, index) => (
            <li
              key={item}
              style={{
                position: "relative",
                padding: "0.5rem 1rem",
                backgroundColor: "#f9f5f0",
                borderRadius: "8px",
                cursor: "pointer",
                border: "1px solid #d4af7f",
                userSelect: "none",
                minWidth: item === "Klasyczna biżuteria" ? "160px" : undefined,
                textAlign: "center",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item}

              {item === "Klasyczna biżuteria" && hoverIndex === index && (
                <ul
                  onMouseEnter={() => {
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  }}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "#f9f5f0",
                    border: "1px solid #d4af7f",
                    borderRadius: "8px",
                    marginTop: "0.3rem",
                    padding: "0.25rem 0",
                    listStyle: "none",
                    width: "100%",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    zIndex: 10,
                  }}
                >
                  {subItems.map((subItem) => (
                    <li
                      key={subItem}
                      style={{
                        padding: "0.4rem 0",
                        cursor: "pointer",
                        color: "#5a4c3b",
                        fontWeight: "500",
                        borderTop: "1px solid #d4af7f",
                      }}
                    >
                      <Link
                        to={`/klasyczna/${subItem.toLowerCase()}`}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          display: "block",
                        }}
                      >
                        {subItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Koszyk */}
          <li style={{ marginLeft: "1rem" }}>
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                color: "#5a4c3b",
                fontWeight: "600",
                padding: "0.5rem 1rem",
                border: "1px solid #d4af7f",
                borderRadius: "8px",
                backgroundColor: "#fff8ee",
                display: "inline-block",
              }}
            >
              🛒 Koszyk ({cart.length})
            </Link>
          </li>
        </ul>

        {/* Treść dynamiczna */}
        {content ? (
          content
        ) : (
          <>
            <h2
              style={{
                fontSize: "2rem",
                marginBottom: "1.5rem",
                color: "#333",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              ✨ Nowości i bestselery
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
                justifyItems: "center",
              }}
            >
              {products.map((product, index) => (
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
                    {product.price}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Stopka */}
      <footer
        style={{
          backgroundColor: "#bfa37c",
          color: "#fff",
          padding: "1.5rem 2rem",
          textAlign: "center",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 500,
          marginTop: "auto",
          boxShadow: "0 -2px 8px rgba(0,0,0,0.1)",
          userSelect: "none",
        }}
      >
        <div>📍 ul. Rzemieślnicza 12, 00-123 Warszawa</div>
        <div>📞 +48 123 456 789</div>
        <div>✉ kontakt@bizuteria.pl</div>
        <div>🕒 Pon–Pt 9:00–17:00</div>
      </footer>
    </div>
  );
}

export default ListGroup;
