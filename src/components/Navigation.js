import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import { useState } from "react";
import DrawerComp from "./DrawerComp";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import routes from '../helpers/routes'

export default function Navigation() {
  const [value, setValue] = useState([]);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="sticky" sx={{ background: "#063970" }}>
        <Container>
        <Toolbar>
          <BatteryChargingFullIcon
            onClick={() => {
              navigate(routes.home);
            }}
            style={{ cursor: "pointer" }}
          />
          {isMatch ? (
            <>
              <Typography
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(routes.home);
                }}
                sx={{ fontSize: "1.5rem" }}
              >
                PowerFully
              </Typography>

              <DrawerComp />
            </>
          ) : (
            <>
              {/* <Tabs
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
                textColor="inherit"
                sx={{ marginLeft: "auto" }}
              >
                {PAGES.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
              </Tabs> */}
              <Tabs
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
                textColor="inherit"
                sx={{ marginLeft: '10px' }}
              >
                <Tab
                  onClick={() => {
                    navigate(routes.account);
                  }}
                  label="Account"
                />
                <Tab
                  onClick={() => {
                    navigate(routes.projects);
                  }}
                  label="Projects"
                />
                <Tab
                  onClick={() => {
                    navigate(routes.admin.users);
                  }}
                  label="Users"
                />
              </Tabs>
              <Button onClick={() => {
                  navigate(routes.login);
                }} sx={{ marginLeft: "auto" }} variant="contained">
                Signin{" "}
              </Button>
              <Button onClick={() => {
                  navigate(routes.register);
                }} sx={{ marginLeft: "10px" }} variant="contained">
                Signup{" "}
              </Button>
            </>
          )}
        </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
