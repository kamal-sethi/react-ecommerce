import React from "react";
import Navbar from "../navbar/Navbar";
import ProductList from "../productList/components/ProductList";

import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import AdminProductList from "../admin/components/AdminProductList";

const AdminHome = () => {
  return (
    <Navbar>
      <AdminProductList></AdminProductList>
    </Navbar>
  );
};

export default AdminHome;
