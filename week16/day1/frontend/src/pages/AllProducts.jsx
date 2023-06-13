import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";

function AllProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios("https://dummyjson.com/products");
      setProducts(data.products);
    };
    getData();
  }, []);

  if (!products) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Link to="/create">Create a Product</Link>
      <h1>Dummy JSON Example</h1>
      {products.map((oneProduct) => {
        return (
          <div key={oneProduct.id} className="product-card">
            <img
              src={oneProduct.images[0]}
              alt="product"
              style={{ height: "200px" }}
            />
            <h3>Title: {oneProduct.title}</h3>
            <h4>Description: {oneProduct.description}</h4>
            <Link to={`/details/${oneProduct.id}`}>
              <button>Veiw Product</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllProducts;
