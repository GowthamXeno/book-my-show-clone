import React from "react";
import NavbarComp from "../Components/Navbar/NavbarComp";
import FooterComp from "../Components/Footer/FooterComp";
import PropagateLoader from "react-spinners"
import { useState,useEffect } from "react";

const DefaultLayout = (Component) => (props) => {
  return (
    <>
      <NavbarComp />
      <Component {...props} />
      <FooterComp />
    </>
  );
};

export default DefaultLayout;
