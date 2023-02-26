import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../auth/useAuth";
import routes from "../helpers/routes";

export default function LoginPages() {
  const { change } = useAuth();
  const navigate = useNavigate();

  const urlDb = "http://localhost:7000/signin";

  const [task, setTask] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(setTask({ ...task, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(urlDb, {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-type": "application/json" },
      });
      const data = await response.json();
      change(data.user);
      navigate(routes.home)
    } catch (error) {
      console.log('el error es: ', error)
      e.target.reset()
      setTask({
        username: "",
        password: "",
      })
    }
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{
            background: "#1e272e",
            padding: "1rem",
          }}
        >
          <Typography variant="5" textAlign="center" color="white">
            Login
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Write your username"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="username"
                value={task.username}
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "#777" } }}
              />
              <TextField
                variant="filled"
                label="Write your password"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="password"
                value={task.password}
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "#777" } }}
              />

              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
