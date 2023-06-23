import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function ProductDetail() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { productId } = useParams();
  console.log("here is our param", productId);
  useEffect(() => {
    getSelectedProduct();
  }, [productId]);
  const getSelectedProduct = async () => {
    const { data } = await axios(`https://dummyjson.com/products/${productId}`);
    console.log("here is the product", data);
    setSelectedProduct(data);
  };
  //check if there is a product
  if (!selectedProduct) {
    return <p>Loading</p>;
  }
  return (
    <div className="detail-page">
      <h1>Product Detail</h1>
      <img src={selectedProduct.images[0]} alt="product" />
      <h2>Title: {selectedProduct.title}</h2>
      <h4>Price: {selectedProduct.price}</h4>
      <h4>Rating: {selectedProduct.rating}</h4>
    </div>
  );
}

export default ProductDetail;
