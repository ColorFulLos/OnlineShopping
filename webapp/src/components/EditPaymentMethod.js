import React, { useState, useEffect } from "react";

function EditPaymentMethod({ pm, handleClose }) {
  const [accountDetails, setAccountDetails] = useState("");
 

  const updatePM = (id, newPM) =>
    fetch(`http://localhost:8080/paymentMethod/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(newPM),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data.accountDetails));

  const getCurrentInfo = () => {
    setAccountDetails(pm.accountDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(accountDetails);
    updatePM(pm.paymentmethodId, {
      accountDetails: accountDetails,
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

        <div> Account Number </div>
        <input
          label="Comment"
          variant="filled"
          required
          value={accountDetails}
          onChange={(e) => setAccountDetails(e.target.value)}
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

export default EditPaymentMethod;
