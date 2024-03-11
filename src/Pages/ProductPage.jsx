import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import ProductPageCard from "../Components/ProductPageCard";
import ProductCard from "../Components/ProductCard";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const relatedProducts = location.state.relatedProducts.filter(
    (product) => product.id != productId
  );
  console.log(`Povezni proizovid su : ${relatedProducts}`);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const json = await response.json();
      setProduct(json);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      {product && <ProductPageCard product={product} />}
      <div>
        <p>Možda će vam se svidjeti</p>
        {relatedProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default ProductPage;
