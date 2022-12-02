import React from "react";
import { Navigate } from "react-router-dom";
const RequireAuth = ({ children }) => {
  const isAuth = localStorage.getItem("token");
  const isUser = localStorage.getItem("id");
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  } else if (!isUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default RequireAuth;