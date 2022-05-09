import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import EditOrder from "./EditOrder";
import EditProduct from "./EditProduct";
import { useOutletContext } from "react-router-dom";
import ProductsInOrderList from "./ProductsInOrderList";
import { useEffect } from "react";

function Orders() {
  const { order, orderUpdateHelper } = useOutletContext();
  const [orderUpdateHandler] = orderUpdateHelper;
  const [orders, setOrders] = order;
  const [editOrder, setOrderStatus] = useState("");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen = (id) => {
    findOrderById(id).then((order) => setOrderStatus(order));
    setTimeout(() => setOpen(true), 1000);
  };
  const handleOpen2 = (id) => {
    findOrderById(id).then((order) => setOrderStatus(order));
    setTimeout(() => setOpen2(true), 1000);
  };

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
  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);

  // const updateOrder = (id) =>
  //   fetch(`http://localhost:8080/order/cancel/${id}`, {
  //     method: "PUT",
  //   }).then((data) => console.log("Success Updated Form"));

  async function updateOrder(id) {
    const response = await fetch(`http://localhost:8080/order/cancel/${id}`, {
      method: "PUT",
    });
    await response.json().then((data) => {
      orderUpdateHandler(data);
    });
  }
  async function findOrderById(id) {
    const response = await fetch(`http://localhost:8080/order/findById/` + id, {
      method: "POST",
    });
    const order = await response.json();
    return order;
  }
  
  return (
    <div>
      <h2>ORDER</h2>
      <br></br>
      <table>
        <tr>
          <th>Order ID</th>
          <th>Status</th>
          <th>Tracking Number</th>
        </tr>
       
        {orders.map((order) => {
          return (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.orderStatus}</td>
              <td>{order.trackingNumber}</td>
              <Button onClick={() => updateOrder(order.orderId)}>CANCEL</Button>
              <Button onClick={() => handleOpen(order.orderId)}>Edit</Button>
              <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                  <EditOrder
                    order={editOrder}
                    handleClose={handleClose}
                  ></EditOrder>
                </Box>
              </Modal>
              <Button onClick={() => handleOpen2(order.orderId)}>View</Button>
              <Modal open={open2} onClose={handleClose2}>
                <Box sx={style2}>
                  <ProductsInOrderList
                    order={editOrder}
                    handleClose={handleClose2}
                  ></ProductsInOrderList>
                </Box>
              </Modal>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Orders;
