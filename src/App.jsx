import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./components/navigation/Navbar";
import SingleProducts from "./components/product/SingleProducts";
import Product from "./pages/products";
import Experience from "./pages/experience";

function App() {
  return (
    <div className="app ">
     
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:productId" element={<SingleProducts />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
