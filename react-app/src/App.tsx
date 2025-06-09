import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";

import ListGroup from "./components/ListGroup";
import GoldJewelryContent from "./components/GoldJewelryContent";
import SilverJewelryContent from "./components/SilverJewelryContent";
import WoodJewelryContent from "./components/WoodJewelryContent";
import HomeContent from "./components/HomeContent";
import CartPage from "./components/CartPage";
import { CartProvider, useCart } from "./components/CartContext";


function KlasycznaCategoryWrapper() {
  const { category } = useParams<{ category: string }>();
  const { addToCart } = useCart();

  switch (category?.toLowerCase()) {
    case "zloto":
    case "złoto":
      return <ListGroup content={<GoldJewelryContent/>} />;
    case "srebro":
      return <ListGroup content={<SilverJewelryContent addToCart={addToCart} />} />;
    case "drewno":
      return <ListGroup content={<WoodJewelryContent addToCart={addToCart} />} />;
    default:
      return <ListGroup content={<HomeContent />} />;
  }
}

function App() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("Service Worker zarejestrowany:", registration.scope);
          })
          .catch((error) => {
            console.log("Rejestracja Service Workera nie powiodła się:", error);
          });
      });
    }
  }, []);

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ListGroup content={<HomeContent />} />} />
          <Route path="/klasyczna/:category" element={<KlasycznaCategoryWrapper />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
