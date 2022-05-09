import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';

// This is currently for creating a buyer more specifically.
const CreatePaymentMethod= ({buyerId}) => {
  const [accountDetails, setAccountDetails] = useState("");

  const createPM = (e) => {
    e.preventDefault();
    console.log(buyerId);
    fetch(`http://localhost:8080/paymentMethod/create`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        buyerId: Number(buyerId),
        accountDetails: accountDetails
      })}).then (()=>
    {
      console.log("new payment method added");

    })
  }
  return (
      <form className="form" onSubmit={createPM}>
        <div> Add a new payment method with bank account number </div>
        <input
            label="accountDetails"
            variant="filled"
            required
            value={accountDetails}
            onChange={(e) => setAccountDetails(e.target.value)}
        />

        <div>

          <button type="submit" variant="contained" color="primary">
            Create
          </button>

        </div>

      </form>
  );
};

export default CreatePaymentMethod;