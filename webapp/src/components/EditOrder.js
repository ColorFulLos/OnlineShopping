import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function EditOrder({ order, handleClose }) {
  const { orderUpdateHelper } = useOutletContext();
  const [orderUpdateHandler] = orderUpdateHelper;
  const [OrderTrackingNumber, setOrderTrackingNumber] = useState("");
  const [OrderStatus, setOrderStatus] = useState("");

  // const updateOrder = (id, newOrder) =>
  //   fetch(`http://localhost:8080/order/update/${id}`, {
  //     method: "PUT",

  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log("Success Updated Form"));
  async function updateOrder(id, newOrder) {
    const response = await fetch(`http://localhost:8080/order/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(newOrder),
      headers: { "content-type": "application/json" },
    });
    await response.json().then((data) => {
      console.log("EDIT ORDER RESPONSE: " + JSON.stringify(data));
      orderUpdateHandler(data);
    });
  }
  const getCurrentInfo = () => {
    console.log("ID: " + order.orderId);
    setOrderStatus(order.orderStatus);
    setOrderTrackingNumber(order.trackingNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateOrder(order.orderId, {
      orderStatus: OrderStatus,
      trackingNumber: OrderTrackingNumber,
    });
    handleClose();
  };

  useEffect(() => {
    getCurrentInfo();
  }, []);
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        {}

        <div> OrderStatus </div>
        <input
          label="Comment"
          variant="filled"
          required
          value={OrderStatus}
          onChange={(e) => setOrderStatus(e.target.value)}
        />

        <div> TrackingNumber </div>
        <input
          label="Comment"
          variant="filled"
          required
          value={OrderTrackingNumber}
          onChange={(e) => setOrderTrackingNumber(e.target.value)}
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

export default EditOrder;
