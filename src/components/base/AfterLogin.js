import React from "react";
import { Navigate } from "react-router-dom";
const AfterLogin = ({ children }) => {
  const isAuth = localStorage.getItem("token");
  if (isAuth) {
    return <Navigate to="/home" replace />;
  }
  return children;
};

export default AfterLogin;