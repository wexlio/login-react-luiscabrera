import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function PublicRoute() {
  // const auth = {user:'diego'};
  const { isLogged } = useAuth();
  return isLogged() ? <Navigate to="/projects" /> : <Outlet />;
}
