import React from "react";
import NavbarComp from "../Components/Navbar/NavbarComp";

const DefaultLayout = (Component) => (props) => {
  return (
    <>
      <NavbarComp />
      <Component {...props} />
    </>
  );
};

export default DefaultLayout;
