import React from "react";
import UserProfile from "../user/Components/UserProfile";
import Navbar from "../navbar/Navbar";

const UserProfilePage = () => {
  return (
    <>
      <Navbar>
        <h1 className="font-medium text-3xl">My Profile</h1>
        <UserProfile></UserProfile>
      </Navbar>
    </>
  );
};

export default UserProfilePage;
