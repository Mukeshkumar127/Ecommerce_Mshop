import React from "react";
import { Navigate } from "react-router-dom";

const ADMIN_EMAIL = "krmukesh180u@gmail.com";

const ProtectedAdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.email !== ADMIN_EMAIL) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedAdminRoute;
