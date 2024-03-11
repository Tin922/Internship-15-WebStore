import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import ProductPageCard from "../Components/ProductPageCard";
import ProductCard from "../Components/ProductCard/ProductCard";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [relatedProducts, setRelatedProducts] = useState([]);
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
  const fetchRelatedProducts = () => {
    if (location.state && location.state.relatedProducts) {
      setRelatedProducts(location.state.relatedProducts);
    }
  };
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`, { state: { relatedProducts } });
  };
  useEffect(() => {
    fetchProduct();
    fetchRelatedProducts();
  }, [location.state]);
  return (
    <>
      {product && <ProductPageCard product={product} />}
      <div>
        <p>Možda će vam se svidjeti</p>
        {relatedProducts.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductPage;
