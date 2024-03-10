import React from "react";
import Navigation from "./Components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage";
import ProductsPage from "./Pages/ProductsPage";
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/products" element={<ProductsPage />} />
        <Route exact path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
