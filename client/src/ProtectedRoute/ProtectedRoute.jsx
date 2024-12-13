import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, condition, redirectTo }) => {
  return condition ? children : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
