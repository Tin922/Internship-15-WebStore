import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [initialFetchProducts, setInitialFetchProducts] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState("");

  useEffect(() => {
    const searchTerm = searchParams.get("search");
    console.log(searchTerm);
    console.log(category);

    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter((item) =>
          item.title.toLowerCase().includes(searchTerm)
        );
        setInitialFetchProducts(filteredProducts);
        setProducts(filteredProducts);
        console.log(initialFetchProducts);
      })
      .catch((error) => console.log(error));
  }, [searchParams]);

  useEffect(() => {
    console.log(`Kategorija je ${category}`);
    console.log(`Incijalni podaci ${initialFetchProducts}`);
    const filteredProducts = initialFetchProducts.filter(
      (item) =>
        item.category.toLowerCase() === category.toLowerCase() ||
        category === ""
    );
    setProducts(filteredProducts);
    console.log(filteredProducts);
  }, [category]);

  const handleProductClick = (productId) => {
    const relatedProducts = products;
    navigate(`/product/${productId}`, { state: { relatedProducts } });
  };

  return (
    <div>
      <h2>Products</h2>
      <select
        name=""
        id=""
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      >
        <option value="">Sve</option>
        <option value="Men's clothing">Men's clothing</option>
        <option value="Women's clothing">Women's clothing</option>
        <option value="Jewelery">Jewelery</option>
        <option value="Electronics">Electronics</option>
      </select>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
