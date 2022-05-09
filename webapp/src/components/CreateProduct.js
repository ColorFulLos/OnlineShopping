import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const Form = ({ handleClose }) => {
  const { productHelper } = useOutletContext();
  const [productHandler] = productHelper;
  const [productName, setProductName] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDate, setProductDate] = useState("");
  const [productOrigin, setProductOrigin] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productSellerId, setProductSellerId] = useState("");
  const navigate = useNavigate();
  const createProduct = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:8080/product/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productName: productName,
        productBrand: productBrand,
        productPrice: productPrice,
        productDate: productDate,
        productOrigin: productOrigin,
        productQuantity: productQuantity,
        productDescription: productDescription,
        productSellerId: productSellerId,
      }),
    })
      .then((response) => response.json())
      .then((data) => productHandler(data))
      .then(() => {
        setProductName("");
        setProductBrand("");
        setProductPrice("");
        setProductDate("");
        setProductOrigin("");
        setProductQuantity("");
        setProductDescription("");
        setProductSellerId("");
        console.log("new product added");
      });
    navigate("/seller/product");
  };

  return (
    <div>
      <form className="form" onSubmit={createProduct}>
        <div> Name</div>
        <input
          label="productName"
          variant="filled"
          required
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <div> Brand</div>
        <input
          label="productBrand"
          variant="filled"
          required
          value={productBrand}
          onChange={(e) => setProductBrand(e.target.value)}
        />
        <div> Price</div>
        <input
          label="productPrice"
          variant="filled"
          required
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <div> Date</div>
        <input
          label="productDate"
          type={"date"}
          variant="filled"
          required
          value={productDate}
          onChange={(e) => setProductDate(e.target.value)}
        />
        <div> Origin</div>
        <input
          label="productOrigin"
          variant="filled"
          required
          value={productOrigin}
          onChange={(e) => setProductOrigin(e.target.value)}
        />
        <div> Quantity</div>
        <input
          label="productQuantity"
          variant="filled"
          required
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
        />
        <div> Description</div>
        <input
          label="productDescription"
          variant="filled"
          required
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <div> Seller_ID</div>
        <input
          label="productSellerId"
          variant="filled"
          required
          value={productSellerId}
          onChange={(e) => setProductSellerId(e.target.value)}
        />
        <div>
          <button variant="contained" onClick={handleClose}>
            Cancel
          </button>
          <button type="submit" variant="contained" color="primary">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
