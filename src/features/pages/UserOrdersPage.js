import React from "react";
import Navbar from "../navbar/Navbar";
import UserOrders from "../user/Components/UserOrders";

const UserOrdersPage = () => {
  return (
    <div>
      <Navbar>
        <h1 className="text-3xl font-medium">My Orders</h1>
        <UserOrders></UserOrders>
      </Navbar>
    </div>
  );
};

export default UserOrdersPage;
