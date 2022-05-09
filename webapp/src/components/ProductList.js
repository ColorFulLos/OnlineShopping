import React, { useState, useEffect } from "react";
import User from "./User.js";
import Orders from "./Orders.js";
import Products from "./Products.js";
import CreatePaymentMethod from "./CreatePaymentMethod";
import UpdateForm from "./UpdateForm.js";
import Button from "@mui/material/Button";
// import Modal, Button from '@mui/material/*';

function ProductList() {
  const userId = 1;
  const [products, setProducts] = useState([]);

  const findAllProduct = () =>
      fetch(`http://localhost:8080/product/findAll`)
      .then((response) => response.json())
      .then((products) => setProducts(products));

  useEffect(() => {
    findAllProduct();
  }, []);

  return (
      <div>
        <Products products={products} userId={userId}></Products>
        <CreatePaymentMethod userId = {userId}></CreatePaymentMethod>
      </div>
  );
}

export default ProductList;
