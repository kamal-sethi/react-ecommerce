import React from "react";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../authSlice";
import { Navigate } from "react-router-dom";
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

const ProtectedAdmin = ({children}) => {
  const user = useSelector(selectLoggedInUser);
  console.log(user);
  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  if(user && user.role!=='admin')
  {
    return <Navigate to='/' replace={true}></Navigate>
  }
  return children;
};

export default ProtectedAdmin;
