import React from "react";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../authSlice";
import { Navigate } from "react-router-dom";
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

const Protected = ({ children }) => {
  const user = useSelector(selectLoggedInUser);
  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};

export default Protected;
