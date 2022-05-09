import React, { useState, useEffect } from "react";





import { useOutletContext, useNavigate } from "react-router-dom";

function EditProduct({ product, handleClose }) {
  const navigate = useNavigate();
  const { productUpdateHelper } = useOutletContext();
  const [productUpdateHandler] = productUpdateHelper;

  const [productBrand, setProductBrand] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDate, setProductDate] = useState("");
  const [productOrigin, setProductOrigin] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productDescription, setProductDescription] = useState("");

  // const updateProduct = (id, newProduct) =>
  //   fetch(`http://localhost:8080/product/update/${id}`, {
  //     method: "PUT",
  //     body: JSON.stringify(newProduct),
  //     headers: { "content-type": "application/json" },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => productUpdateHandler(data));

  async function updateProduct(id, newProduct) {
    const response = await fetch(`http://localhost:8080/product/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(newProduct),
      headers: { "content-type": "application/json" },
    });
    await response.json().then((data) => {
      console.log("EDIT PRODUCT RESPONSE: " + JSON.stringify(data));
      productUpdateHandler(data);
    });
  }
  const getCurrentInfo = () => {
    console.log("PRODUCT_ID: " + product.productId);
    setProductBrand(product.productBrand);
    setProductName(product.productName);
    setProductPrice(product.productPrice);
    setProductDate(product.productDate);
    setProductOrigin(product.productOrigin);
    setProductQuantity(product.productQuantity);
    setProductDescription(product.productDescription);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(product.productId, {
      productName: productName,
      productBrand: productBrand,
      productPrice: productPrice,
      productDate: productDate,
      productOrigin: productOrigin,
      productQuantity: productQuantity,
      productDescription: productDescription,

    }).then(r => {
      handleClose()

    }).then((r) => {
      navigate("/seller/product");
      handleClose();

    });
  };

  const deleteProduct = (id) => {
    fetch(`http://localhost:8080/product/delete/` + id, {
      method: "DELETE",
    });
  };
  useEffect(() => {
    getCurrentInfo();
  }, []);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        {}
        <div> productName </div>
        <input
          label="productName"
          variant="filled"
          required
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <div> productBrand </div>
        <input
          label="productBrand"
          variant="filled"
          required
          value={productBrand}
          onChange={(e) => setProductBrand(e.target.value)}
        />
        <div> productPrice </div>
        <input
          label="productPrice"
          variant="filled"
          required
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <div> productDate </div>
        <input
          label="productDate"
          variant="filled"
          type={"date"}
          required
          value={productDate}
          onChange={(e) => setProductDate(e.target.value)}
        />
        <div> productOrigin </div>
        <input
          label="productOrigin"
          variant="filled"
          required
          value={productOrigin}
          onChange={(e) => setProductOrigin(e.target.value)}
        />
        <div> productQuantity </div>
        <input
          label="productQuantity"
          variant="filled"
          required
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
        />
        <div> productDescription </div>
        <input
          label="productDescription"
          variant="filled"
          required
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <div>
          <button variant="contained" onClick={handleClose}>
            Cancel
          </button>
          <button type="submit" variant="contained" color="primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
