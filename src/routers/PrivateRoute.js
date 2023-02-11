import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function PrivateRoute({hasRole: role}) {
  // const auth = {user:'diego'};
  const { hasRole, isLogged } = useAuth();

  if (role && !hasRole(role)) {
    return <Navigate to="/" />;
  }

  return isLogged() ? <Outlet /> : <Navigate to="/login" />;
}
