import {
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import routes from '../helpers/routes'


export default function DrawerComp() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate()

  return (
    <>
      <SwipeableDrawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        {/* <List>
          {PAGES.map((page, index) => (
            <ListItemButton
              onClick={() => {
                setOpenDrawer(false);
              }}
              key={index}
            >
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List> */}
        <List onClick={() => {
                setOpenDrawer(false);
                navigate(routes.home)
              }}>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemIcon>
            </ListItemButton>
        </List>
        <List onClick={() => {
                setOpenDrawer(false);
                navigate(routes.login)
              }}>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Login</ListItemText>
              </ListItemIcon>
            </ListItemButton>
        </List>
        <List onClick={() => {
                setOpenDrawer(false);
                navigate(routes.register)
              }}>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText on>Register</ListItemText>
              </ListItemIcon>
            </ListItemButton>
        </List>
        <List onClick={() => {
                setOpenDrawer(false);
                navigate(routes.account)
              }}>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText o>Account</ListItemText>
              </ListItemIcon>
            </ListItemButton>
        </List>
        <List onClick={() => {
                setOpenDrawer(false);
                navigate(routes.projects)
              }}>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Projects</ListItemText>
              </ListItemIcon>
            </ListItemButton>
        </List>
        <List onClick={() => {
                setOpenDrawer(false);
                navigate(routes.admin.users)
              }}>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Users</ListItemText>
              </ListItemIcon>
            </ListItemButton>
        </List>

      </SwipeableDrawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
}
