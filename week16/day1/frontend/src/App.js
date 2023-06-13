import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductDetail from "./pages/ProductDetail";
import AllProducts from "./pages/AllProducts";
import CreateProduct from "./pages/CreateProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/details/:productId" element={<ProductDetail />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
