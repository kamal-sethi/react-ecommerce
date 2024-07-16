import React from "react";
import ProductForm from "../admin/components/ProductForm";
import Navbar from "../navbar/Navbar";

const AdminProductFormPage = () => {
  return (
    <>
      <Navbar>
        <ProductForm></ProductForm>
      </Navbar>
    </>
  );
};

export default AdminProductFormPage;
