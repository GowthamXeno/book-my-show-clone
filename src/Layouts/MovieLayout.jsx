import React from 'react'
import MovieNavbarComp from '../Components/Navbar/MovieNavbarComp';
const MovieLayout = (WrappedComponent) =>
(props)=>{
  return <>
    <MovieNavbarComp />
    <WrappedComponent {...props} />
    <div>Footer</div>
  </>
  }
  
  export default MovieLayout;