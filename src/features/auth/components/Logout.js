import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser, signOutUserAsync } from "../authSlice";
import { Link, Navigate } from "react-router-dom";

const Logout = () => {
  const user = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();
  console.log(user);
  useEffect(() => {
    dispatch(signOutUserAsync(user.id));
  }, []);
  return <>{!user && <Navigate to="/login" replace={true}></Navigate>}</>;
};

export default Logout;
