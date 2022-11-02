const Product = ({ productKey, imgSrc, productName }) => {
  return (
    <div className="container product-item p-3">
      <div className="img-container">
        <img src={imgSrc} alt={productKey} className="img-fluid" />
      </div>
      <div className="product-title d-flex align-items-center justify-content-center pt-3">
        <span>{productName}</span>
      </div>
    </div>
  );
};

export default Product;
