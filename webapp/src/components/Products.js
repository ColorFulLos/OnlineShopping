import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import UpdateForm from "./UpdateForm";
import EditProduct from "./EditProduct";
import { useNavigate, useOutletContext } from "react-router-dom";
import CreatePaymentMethod from "./CreatePaymentMethod";
import EditPaymentMethod from "./EditPaymentMethod";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Products() {
  const {
    product,
    seller,
    user,
    orderHelper,
    productDeleteHelper,
  } = useOutletContext();
  // We may want to change the "buyerId" in the payment Methods section.
  const buyerId = 1;
  const [orderHandler] = orderHelper;
  const [productDeleteHandler] = productDeleteHelper;
  const [products, setProducts] = product;
  const [isSeller, setIsSeller] = seller;
  const [users, setUsers] = user;
  const [editProduct, setEditProduct] = useState({});
  const [productId, setProductId] = useState({});
  const [quantity, setQuantity] = useState({});

  const [open, setOpen] = useState(false);
  const [editPM, setEditPM] = useState("");
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = (id) => {
    findPaymentMethodById(id).then((pm) => setEditPM(pm));
    setTimeout(() => setOpen2(true), 1000);
  };
  const navigate = useNavigate();
  const [noneZeroProducts, setNoneZeroProducts] = useState({});  
  const trackNumber = "RANDOM ONE";
  const orderStatus = "SUBMITTED";

  const [isOpen, setIsOpen] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [previousButton, setPreviousButton] = useState([]);
  const [hasSet, setHasSet] = useState(false);
  const handlePMChange = (event, PMId) => {
    console.log(JSON.stringify(noneZeroProducts));
    event.preventDefault();
    setPaymentMethod(PMId);
    if (hasSet) {
      previousButton.target.style.color = "Black";
      setHasSet(true);
    }
    setPreviousButton(event);
    event.target.style.color = "Red";
  };
  async function findPaymentMethodById(id) {
    const response = await fetch(
      `http://localhost:8080/paymentMethod/findById/` + id,
      {
        method: "POST",
      }
    );
    const pm = await response.json();
    return pm;
  }
  const findPaymentMethodByBuyerId = () =>
    fetch(`http://localhost:8080/paymentMethod/findByBuyerId/${buyerId}`)
      .then((response) => response.json())
      .then((p) => setPaymentMethods(p));

  const handleOpen = (id) => {
    findProductById(id).then((product) => setEditProduct(product));
    setTimeout(() => setOpen(true), 1000);
  };

  const handleClose = () => setOpen(false);

  const handleClose2 = () => setOpen2(false);

  const deleteProduct = (id) => {
    fetch(`http://localhost:8080/product/delete/${id}`, {
      method: "DELETE",
    });
    productDeleteHandler(id);
  };

  const deletePM = (id) =>
    fetch(`http://localhost:8080/paymentMethod/delete/${id}`, {
      method: "DELETE",
    });

  const createOrder = async () => {
    console.log(JSON.stringify(noneZeroProducts));
    const response = await fetch(`http://localhost:8080/order/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: users.userId,
        paymentmethodId: Number(paymentMethod),
        orderStatus: orderStatus,
        trackNumber: trackNumber,
      }),
    });
    // console.log("Created a new order, which id is: " + json.orderId);
    // setTimeout(() => createOrderItem(json.orderId), 1000);
    // orderHandler(data);
    await response.json().then((data) => {
      console.log(JSON.stringify(noneZeroProducts));
      createOrderItem(data.orderId);
      setTimeout(() => console.log("Created a new order, which id is: " + data.orderId), 3000);
      orderHandler(data);
    });

    navigate("/buyer/order");
  };

  const createOrderItem = async (orderid) => {
    console.log(JSON.stringify(noneZeroProducts));

    for (const [productId, quantity] of Object.entries(noneZeroProducts)) {
      setProductId(productId);
      setQuantity(quantity);
      console.log(String(productId) + " "+ Number(quantity));
      await fetch(`http://localhost:8080/orderItem/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: Number(orderid),
          productId: productId,
          quantity: quantity,
        })
      }).then(console.log("Create a new OrderItem"))
    }
  };

  async function findProductById(id) {
    const response = await fetch(
      `http://localhost:8080/product/findById/` + id
    );
    const product = await response.json();
    return product;
  }
  // const findProductById = (id) =>
  //   await fetch(`http://localhost:8080/product/findById/` + id)
  //     .then((response) => response.json())
  //     .then((data) => setEditProduct(data));
  // // const deleteProduct = (id) => console.log("PRODUCT_ID: " + id);
  const checkQuantity = (productId, quantity) => {
    if (quantity == 0) {
      delete noneZeroProducts[productId];
      setNoneZeroProducts(noneZeroProducts);
      console.log(noneZeroProducts);
    }
    if (quantity > 0) {
      noneZeroProducts[productId] = quantity;
      setNoneZeroProducts(noneZeroProducts);
      console.log(noneZeroProducts);
    }
  };
  useEffect(() => {
    findPaymentMethodByBuyerId();
  }, []);

  return (
    <div>
      <h2>PRODUCT</h2>
      <br></br>

      <table>
        <tr>
          <th>Name</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Date</th>
          <th>Origin</th>
          <th>Description</th>
          {!isSeller && <th>Quantity</th>}
        </tr>

        {products.map((product) => {
          return (
            <tr key={product.productId}>
              <td>{product.productName}</td>
              <td>{product.productBrand}</td>
              <td>{product.productPrice}</td>
              <td>{product.productDate}</td>
              <td>{product.productOrigin}</td>
              <td>{product.productDescription}</td>
              {!isSeller && (
                <input
                  label="quantity"
                  variant="filled"
                  required
                  type="number"
                  onChange={(value) =>
                    checkQuantity(product.productId, value.target.value)
                  }
                />
              )}
              {isSeller && (
                <Button
                  open={isSeller}
                  onClick={() => handleOpen(product.productId)}
                >
                  Edit
                </Button>
              )}
              <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                  <EditProduct
                    product={editProduct}
                    handleClose={handleClose}
                  ></EditProduct>
                </Box>
              </Modal>

              {isSeller && (
                <Button onClick={() => deleteProduct(product.productId)}>
                  Delete
                </Button>
              )}
            </tr>
          );
        })}
      </table>
      {!isSeller && (
        <div>
          <div>PAYMENT METHOD</div>
          <table>
            <tr>
              <th>Account Number</th>
            </tr>
            {paymentMethods.map((pm) => {
              return (
                <tr key={pm.paymentmethodId}>
                  <td>{pm.accountDetails}</td>
                  <button
                    onClick={(e) => handlePMChange(e, pm.paymentmethodId)}
                  >
                    Select
                  </button>
                  <button onClick={() => deletePM(pm.paymentmethodId)}>
                    Delete
                  </button>
                  <button onClick={() => handleOpen2(pm.paymentmethodId)}>
                    Edit
                  </button>
                  <Modal open={open2} onClose={handleClose2}>
                    <Box sx={style}>
                      <EditPaymentMethod
                        pm={editPM}
                        handleClose={handleClose2}
                      ></EditPaymentMethod>
                    </Box>
                  </Modal>
                </tr>
              );
            })}
          </table>

          <CreatePaymentMethod buyerId={buyerId}></CreatePaymentMethod>
          <button onClick={() => createOrder()}>Submit The Order</button>
        </div>
      )}
    </div>
  );
}

export default Products;
