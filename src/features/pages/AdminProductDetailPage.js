import React from "react";
import Navbar from "../navbar/Navbar";
import AdminProductDetails from "../admin/components/AdminProductDetails";

const AdminProductDetailPage = () => {
  return (
    <div>
      <Navbar>
        <AdminProductDetails></AdminProductDetails>
      </Navbar>
    </div>
  );
};

export default AdminProductDetailPage;
