import React from "react";
// import Navbar_Component from "../Components/Navbar_Component";

const DefaultLayout = (Component) => (props) => {
  return (
    <>
      {/* <Navbar_Component /> */}
      <Component {...props} />
    </>
  );
};

export default DefaultLayout;
