import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./Landing/Home";
import Signup from "./Landing/SignUp";
// import AboutPage from "./landing_page/about/AboutPage";
// import ProductPage from "./landing_page/products/ProductsPage";
// import PricingPage from "./landing_page/pricing/PricingPage";
// import SupportPage from "./landing_page/support/SupportPage";

import NotFound from "./Landing/NotFound";
import Navbar from "./Landing/Navbar";
import Footer from "./Landing/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
