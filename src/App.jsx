import { useState } from "react";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Collections from "./Pages/Collections";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import PlaceOrder from "./Pages/PlaceOrder";
import Orders from "./Pages/Orders";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import SearchBar from "./Components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BestSellersAll from "./Pages/BestSellersAll";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Product/:productId" element={<Product />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bestsellers" element={<BestSellersAll />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
