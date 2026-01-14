import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import "./App.css";
import Laptops from "./pages/Categories/Laptops";
import Smartphones from "./pages/Categories/Smartphones";
import Tablets from "./pages/Categories/Tablets";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div >

        <Routes>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />

                  <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/smartphones" element={<Smartphones />} />
          <Route path="/tablets" element={<Tablets />} />
        </Routes>

    </div>
  );
}

export default App;
