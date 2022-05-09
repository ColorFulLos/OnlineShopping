import React, { useReducer, createContext, useContext } from "react";
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";
import UserList from "./UserList";
import { useState } from "react";

function LandingPage() {
  // const UserContext = createContext();
  const [isLogged, setIsLogged] = useReducer((p) => !p, false);
  const [selectedBuyer, setSelectedBuyer] = useState(null);
  const [selectedSeller, setSelectedSeller] = useState(null);

  const selectBuyerHandler = (id) => {
    setSelectedBuyer(id);
  };

  const selectSellerHandler = (id) => {
    setSelectedSeller(id);
  };

  const isLoggedHandler = () => {
    setIsLogged();
  };
  return (
    <div>


      {/*<h1>Landing Page</h1>*/}
      {/*<Link to="/seller">*/}
      {/*  <Button>Seller Page</Button>*/}
      {/*</Link>*/}
      {/*<Link to="/buyer">*/}
      {/*  <Button>Buyer Page</Button>*/}
      {/*</Link>*/}
      {/*<hr />*/}

      {/*{!isLogged && (*/}
      {/*  <div>*/}
      {/*    <h1>Landing Page</h1>*/}
      {/*    <Link to="/seller">*/}
      {/*      <Button onClick={setIsLogged}>Seller Page</Button>*/}
      {/*    </Link>*/}
      {/*    <Link to="/buyer">*/}
      {/*      <Button onClick={setIsLogged}>Buyer Page</Button>*/}
      {/*    </Link>*/}
      {/*    <hr />*/}
      {/*  </div>*/}
      {/*)}*/}

      {!isLogged && (
        <UserList
          isLoggedHandler={isLoggedHandler}
          selectBuyerHandler={selectBuyerHandler}
          selectSellerHandler={selectSellerHandler}
        ></UserList>
        // <div>
        //   <h1>Landing Page</h1>
        //   <Link to="/seller">
        //     <Button onClick={setIsLogged}>Seller Page</Button>
        //   </Link>
        //   <Link to="/buyer">
        //     <Button onClick={setIsLogged}>Buyer Page</Button>
        //   </Link>
        //   <hr />
        // </div>
      )}


      <Outlet
        context={{
          sellerId: [selectedSeller],
          buyerId: [selectedBuyer],
        }}
      />
    </div>
  );
}

export default LandingPage;
