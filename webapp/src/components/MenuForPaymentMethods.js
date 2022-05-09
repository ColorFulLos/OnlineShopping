import React, { useState, useEffect } from "react";
import styled from "styled-components";

function MenuForPaymentMethods({ buyerId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const toggling = () => setIsOpen(!isOpen);
  const findPaymentMethodByBuyerId = () =>
    fetch(`http://localhost:8080/paymentMethod/findByBuyerId/${buyerId}`)
      .then((response) => response.json())
      .then((p) => setPaymentMethods(p));
  useEffect(() => {
    findPaymentMethodByBuyerId();
  }, []);
  return (
    <div>
      <table>
        <tr>
          <th>Account Details</th>
        </tr>
        {/* <DropDownContainer>
          <DropDownHeader onClick={toggling}>Existing Payment Methods</DropDownHeader> */}
        {paymentMethods.map((pm) => {
          console.log("PM Test: " + pm);
          return (
            <tr key={pm.paymentmethodId}>
              <td>{pm.accountDetails}</td>
            </tr>
          );
        })}
        {/* {isOpen && (
              

                {paymentMethods.map((pm) => {
                return (
                  <tr key={pm.productId}>
                  <td>{pm.accountDetails}</td>
                  </tr>
                )}
              
              
          )} */}
        {/* </DropDownContainer> */}
      </table>
    </div>
  );
}
export default MenuForPaymentMethods;
