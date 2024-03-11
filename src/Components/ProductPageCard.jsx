const ProductPageCard = ({ product }) => {
  console.log(product);
  return (
    <div className="product_card">
      <div className="product_card_photo">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product_card_content">
        <h3>{product.title}</h3>
        <p>Opis: {product.description}</p>
        <p>Cijena: {product.price}</p>
        <p>
          Ocjena: {product.rating.rate} ({product.rating.count})
        </p>
      </div>
    </div>
  );
};

export default ProductPageCard;
