// import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchproduct" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
