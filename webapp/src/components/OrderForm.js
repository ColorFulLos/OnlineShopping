import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';

// This is currently for creating a buyer more specifically.
const CreateOrder = ({}) => {

  const userId = 1;
  const paymentmethodId = 1;

  // create state variables for each input

  const trackNumber = "RANDOM ONE";
  const orderStatus = "SUBMITTED";

  const createOrder = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/order/create`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        userId: userId,
        paymentmethodId: paymentmethodId,
        orderStatus: orderStatus,
        trackNumber: trackNumber
      })}).then (()=>
    {
      console.log("new order added");
      
    })
  }
  return (
      <form className="form" onSubmit={createOrder}>
        {}
        <div> userId </div>
        <input
            label="userId"
            variant="filled"
            required
            value={userId}
        />
        <div> paymentmethod Id </div>
        <input
            label="paymentmethodId"
            variant="filled"
            required
            value={paymentmethodId}
        />
        <div> order Status </div>
        <div>(Only "CANCELLED", "PROCESSING", "DELIVERED", 
            "IN_DELIVERY", or "SUBMITTED")</div>
        <input
            label="orderStatus"
            variant="filled"
            required
            value={orderStatus}
            // onChange={e => setOrderStatus(e.target.value)}
        />
         <div> Tracking number</div>
        <input
            label="trackNumber"
            variant="filled"
            required
            value={trackNumber}
            // onChange={e => setTrackNumber(e.target.value)}
        />

        <div>
          
          <button type="submit" variant="contained" color="primary">
            Submit
          </button>

        </div>
        
      </form>
  );
};

export default CreateOrder;