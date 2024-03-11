import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import HomePage from "./Pages/HomePage/HomePage";
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/products" element={<ProductsPage />} />
        <Route exact path="/product/:productId" element={<ProductPage />} />
        <Route exact path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
