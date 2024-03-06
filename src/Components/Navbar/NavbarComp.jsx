import React from "react";
import { Link } from "react-router-dom";
import {
  BiChevronDown,
  BiChevronRight,
  BiMenu,
  BiSearch,
} from "react-icons/bi";

function NavSm() {
  return (
    <>
      <div className="flex items-center justify-between ">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-red-600 text-xs flex items-center cursor-pointer hover:text-white">
            Chennai <BiChevronRight className="" />
          </span>
        </div>
        <div className="w-24 h-8 flex  gap-3 items-center flex-row">
          <button className="border  border-gray-400 rounded-lg p-1 text-sm">
            Use App
          </button>
          <BiSearch className="w-1/5 h-5 text-gray-600" />
        </div>
      </div>
    </>
  );
}

// function NavMd() {
//   return (
//     <>
//       <div className="flex items-center w-full gap-3">
//         <div className="w-10 h-10">
//           <img
//             src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
//             alt="logo"
//             className="w-full h-full"
//           />
//         </div>
//         <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
//           <BiSearch />
//           <input
//             type="search"
//             className="w-full bg-transparent border-none "
//             placeholder="Search for Movies, Events, Plays, Sports and Activities"
//           />
//         </div>
//       </div>
//     </>
//   );
// }

function NavLg() {
  return (
    <>
      <div className=" flex justify-between w-full mx-auto  pt-1 ">
        <div className="flex items-center w-1/2 gap-3 mx-4">
          <div className="w-36 h-8">
            <img
              src="https://res.cloudinary.com/admitad-gmbh/image/upload/v1666973032/ixaa8tyj24yv45cmgysl.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch className="text-gray-500" />
            <input
              type="search"
              className="w-full bg-transparent focus:outline-none"
              placeholder="Search for Movies, Events, Play, Sports and Activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center">
            Chennai <BiChevronDown />
          </span>
          <Link
            to="/plays"
            className="text-gray-500 text-base flex items-center cursor-pointer hover:text-black"
          >
            Plays
          </Link>
          <button className="bg-red-600 text-white px-3 py-0.5 pb-1 text-sm rounded">
            Sign in
          </button>
          <div className="w-8 h-8">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}
const NavbarComp = () => {
  return (
    <>
      <nav className="px-4 py-3">
        {/* Small Screen */}
        <div className="md:hidden">
          <NavSm />
        </div>
        {/* Medium Screen 
        <div className="hidden md:flex lg:hidden">
          <NavMd />
        </div> */}
        {/* Large Screen  */}
        <div className="hidden md:flex">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default NavbarComp;
