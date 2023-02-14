import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../auth/useAuth";
import { useNavigate } from "react-router-dom";
import routes from "../helpers/routes";

function AccountPage() {
  const { user, change } = useAuth();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  const mostrarData = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:7000/logout`, {
        method: "GET",
      });
      const data = await res.json();

      setTasks(data);
      console.log("estoy: ", data);
      change(null);
      navigate(routes.home)
    } catch (error) {
      console.error("Ocurrio algo no desseadooo");
    }
  };

  // useEffect(() => {
  //   mostrarData();
  // }, []);

  return (
    <div>
      <h1>AccountPage</h1>
      <p>Bienvenido {user.username}</p>
      <Button variant="contained" onClick={mostrarData}>
        LogoOut
      </Button>
    </div>
  );
}

export default AccountPage;
