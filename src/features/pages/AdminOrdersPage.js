import React from "react";
import Navbar from "../navbar/Navbar";
import AdminOrders from '../admin/components/AdminOrder'

const AdminOrdersPage = () => {
  return (
    <>
      <Navbar>
        <AdminOrders></AdminOrders>
      </Navbar>
    </>
  );
};

export default AdminOrdersPage;
