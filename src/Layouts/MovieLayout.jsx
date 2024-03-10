import React from 'react'
// import MovieNavbarComp from '../Components/Navbar/MovieNavbarComp';
import NavbarComp from '../Components/Navbar/NavbarComp';
const MovieLayout = (WrappedComponent) =>
(props)=>{
  return <>
    <NavbarComp />
    <WrappedComponent {...props} />
    <div>Footer</div>
  </>
  }
  
  export default MovieLayout;