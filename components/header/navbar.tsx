import AuthContext from "@/context/AuthContext";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";

import {
  Logout,
  Login,
  Menu,
  AppRegistration,
  Dashboard,
} from "@material-ui/icons";
import Link from "next/link";
import React, { useContext } from "react";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          {!user ? (
            <>
              <Link href="/account/login">
                <Button color="inherit">
                  <Login /> Login
                </Button>
              </Link>{" "}
              <Link href="/account/register">
                <Button color="inherit">
                  {" "}
                  <AppRegistration /> Register
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/account/dashboard">
                <Button color="inherit">
                  {" "}
                  <Dashboard /> Dashboard
                </Button>
              </Link>{" "}
              <Button color="inherit" onClick={logout}>
                {" "}
                <Logout /> Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
