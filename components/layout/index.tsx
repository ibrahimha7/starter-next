import { Container } from "@material-ui/core";
import React from "react";
import Navbar from "../header/navbar";

function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <Container fixed>{children}</Container>
    </>
  );
}

export default Layout;
