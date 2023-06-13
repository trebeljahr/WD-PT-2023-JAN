import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  //with mulitple states
  const [newTitle, setNewTitle] = useState("");
  const [newImage, setNewImage] = useState([]);
  const [newDescription, setNewDescription] = useState("");
  const navigate = useNavigate();
  const [productObj, setProductObj] = useState({
    title: "",
    image: "",
    images: [],
    description: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("here is my product", productObj);
    try {
      productObj.images = [productObj.image];
      const { data } = await axios.post(
        "https://dummyjson.com/products/add",
        productObj
      );
      console.log("New product added", data);
      setNewTitle("");
      setNewImage("");
      setNewDescription("");
      navigate("/");
    } catch (err) {
      console.log("error adding product", err);
    }
  };
  const handleChange = (e) => {
    //you need the name of the input here
    let inputName = e.target.name;
    //this is the value of what you typed in the input
    let inputValue = e.target.value;
    //spread the object to take everything that doesn't match the input name
    setProductObj({ ...productObj, [inputName]: inputValue });
  };
  return (
    <div>
      <h2>CreateProduct</h2>
      <form onSubmit={handleSubmit}>
        <label>
          New Product Title:
          <input
            type="text"
            name="title"
            value={productObj.title}
            onChange={handleChange}
          />
        </label>
        <label>
          New Product Image:
          <input
            type="text"
            name="image"
            value={productObj.image}
            onChange={handleChange}
          />
        </label>
        <label>
          New Product Description:
          <input
            type="text"
            name="description"
            value={productObj.description}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
      {/* with multiple states */}
      <h2>With multiple States:</h2>
      <form>
        <label>
          New Product Title:
          <input
            type="text"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
          />
        </label>
        <label>
          New Product Image:
          <input
            type="text"
            value={newImage}
            onChange={(e) => {
              setNewImage(e.target.value);
            }}
          />
        </label>
        <label>
          New Product Description:
          <input
            type="text"
            value={newDescription}
            onChange={(e) => {
              setNewDescription(e.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateProduct;
