import React, { useContext } from 'react'
import {MovieContext} from "../../Context/MovieContext";
import { BiChevronDown, BiMenu, BiSearch, BiShareAlt } from "react-icons/bi";

const Navsm = ()=>{
  const {movie} = useContext(MovieContext)
  return(
    <>
      <div className='text-gray-700 flex items-center justify-between'>
        <div>
          <h3 className='text-xl font-bold'>{movie.original_title}</h3>
        </div>
        <div className='w-8 h-8'> 
          <BiShareAlt className='w-full h-full'/>
        </div>
      </div>
    </>
  )
}

const NavLg= ()=>{
  return (
    <>
      <div className="flex mx-auto px-5 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-36 h-8">
            <img
              src="https://res.cloudinary.com/admitad-gmbh/image/upload/v1666973032/ixaa8tyj24yv45cmgysl.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 border-1  rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
            ></input>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className=" text-gray-900 flex items-center cursor-pointer hover:text-gray-800">
            Chennai <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-3 py-0.5 pb-1 text-sm rounded">
            Sign in
          </button>
          <div className="w-8 h-8 text-gray-500">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

const MovieNavbarComp = () => {

  return (
    <>
      <nav className='bg-white border-b-2 lg:border-b-0  p-4'>
        {/* Small Screen */}
        <div className='md:hidden'>
          <Navsm />
        </div>

        {/* Larger Screen  */}
        <div className='hidden w-full lg:block'>
          <NavLg />
        </div>
      </nav>
    </>
  )
}

export default MovieNavbarComp