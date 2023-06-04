import { useState } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Favorites from "./components/Favorites";
import Cart from "./components/SHoppingCart";
import Menu from "./components/Navbar";
import { useSelector } from "react-redux";

function App() {
   const data = useSelector((state) => state);
   const [count, setCount] = useState(0);
   const [text, setText] = useState(false);
  

  return (
    <div className="App">
      <Menu data={data} />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart data={data.Cart} />} />
        <Route path="/:name" element={<Product />} />
      
      </Routes>
    </div>
  );
}

export default App
