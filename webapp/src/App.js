import React from "react";
import "./App.css";
import ListScreen from "./components/ListScreen.js";
import SellerListScreen from "./components/SellerListScreen";
import LandingPage from "./components/LandingPage";
import CreateProduct from "./components/CreateProduct";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Orders from "./components/Orders";
import FamilyPlan from "./components/FamilyPlan";

import MenuForPaymentMethods from "./components/MenuForPaymentMethods";
import SignUpForm from "./components/SignUpForm";


function App() {
  return (
    <div className="App">



      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route element={<SellerListScreen />} />
          <Route path="seller" element={<SellerListScreen />}>
            <Route path="create" element={<CreateProduct />}></Route>
            <Route path="order" element={<Orders />}></Route>
            <Route path="product" element={<Products />}></Route>
          </Route>
          <Route path="buyer" element={<ListScreen />}>
            <Route path="order" element={<Orders />}></Route>
            <Route path="product" element={<Products />}></Route>
            <Route path="familyplan" element={<FamilyPlan />}></Route>
          </Route>

          <Route path="create" element={<SignUpForm />}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
