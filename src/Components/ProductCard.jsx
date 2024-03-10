import React from "react";

function ProductCard({ product, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
    </div>
  );
}

export default ProductCard;
