"use client";
import React, { useContext, useEffect } from "react";
import { UserContext } from "~/support/context/userContext";

const AdminDashboard = () => {
  const { userData } = useContext(UserContext);
  const showUserData = () => {
    console.log(userData);
  };

  useEffect(() => {
    console.log(userData);
  });
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      Super Admin Dashboard
    </div>
  );
};

export default AdminDashboard;
