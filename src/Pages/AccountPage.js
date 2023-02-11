import { Button } from "@mui/material";
import React from "react";
import useAuth from "../auth/useAuth";
import { useNavigate } from "react-router-dom";
import routes from '../helpers/routes'

function AccountPage() {
  const { user, change } = useAuth();
  const navigate = useNavigate();

  const handleUser = () => {
    change(null);
    navigate(routes.home)
  };

  return (
    <div>
      <h1>AccountPage</h1>
      <p>Bienvenido {user.username}</p>
      <Button variant="contained"  onClick={handleUser}>LogoOut</Button>
    </div>
  );
}

export default AccountPage;
