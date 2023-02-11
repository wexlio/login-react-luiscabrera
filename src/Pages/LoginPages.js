import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

export default function LoginPages() {

  const { change } = useAuth();
  const navigate = useNavigate();

  function handleUser() {
    change({ id: 1,username:'diego', role: "admin" });
    navigate(routes.home)
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <Button variant="contained" onClick={handleUser}>LogIn</Button>
    </div>
  )
}
