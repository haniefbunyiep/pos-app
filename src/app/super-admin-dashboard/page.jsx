"use client";
import React, { useContext, useEffect } from "react";
import { UserContext } from "~/support/context/userContext";
import { useZustandStores } from "~/zustandStores";

const AdminDashboard = () => {
  const { userData } = useContext(UserContext);
  const { users } = useZustandStores();
  const showUserData = () => {
    console.log(users);
  };

  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      Super Admin Dashboard
    </div>
  );
};

export default AdminDashboard;
