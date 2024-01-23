// import React from 'react';

import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Footer = lazy(() => import("./Components/Footer"));

const Home = lazy(() => import("./Pages/Home"));
const Search = lazy(() => import("./Pages/Search"));
const Navbar = lazy(() => import("./Components/Navbar"));
const Shipping = lazy(() => import("./Pages/Shipping"));
const Order = lazy(() => import("./Pages/Order"));
const Payment = lazy(() => import("./Pages/Payment"));
const Cart = lazy(() => import("./Pages/Cart"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchproduct" element={<Search />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/order" element={<Order />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
