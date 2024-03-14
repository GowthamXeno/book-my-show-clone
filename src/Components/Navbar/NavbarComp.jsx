import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const Locations = [
  { name: "Chennai" },
  { name: "Bangalore" },
  { name: "Hyderabed" },
  { name: "Noida" },
  { name: "Kerala" },
  { name: "Kochi" },
];

function Example() {
  const [selected, setSelected] = useState(Locations[0]);

  return (
    <div className="w-28 z-50">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white pl-3 text-left focus:outline-none  sm:text-sm">
            <span className="block truncate " style={{ fontSize: "1rem" }}>
              {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <BiChevronDown />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className=" z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {Locations.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-3  ${
                      active ? "bg-red-400" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

function NavSm() {
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-start">
            <h3 className="text-2xl font-bold text-gray-700">
              It All Starts Here!
            </h3>
            <div className="z-50 ">
              <Example />
            </div>
          </div>
          <div className="w-28 h-8 flex  gap-3 items-center flex-row">
            <Link
              to="https://play.google.com/store/apps/details?id=com.bt.bms&hl=en_IN&gl=US&pli=1"
              target="_blank"
            >
              <button className="border  border-gray-300 rounded-lg p-1.5 text-sm">
                Use App
              </button>
            </Link>
            <BiSearch className="w-1/5 h-5 text-gray-600" />
          </div>
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

function NavLg({ playsActive, tvseriesActive, streamActive }) {
  return (
    <>
      <div className="w-full">
        <div className=" flex justify-between w-full mx-auto  pt-1 ">
          <div className="flex  w-1/2 items-center gap-3 mx-4">
            <div className="w-36 h-8">
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/admitad-gmbh/image/upload/v1666973032/ixaa8tyj24yv45cmgysl.png"
                  alt="logo"
                  className="w-full h-full"
                />
              </Link>
            </div>
            <div className="w-full flex items-center gap-3 bg-white border-1 px-3 py-1 rounded-md">
              <BiSearch className="text-gray-500" />
              <input
                type="search"
                className="w-full bg-transparent focus:outline-none"
                placeholder="Search for Movies, Events, Play, Sports and Activities"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="py-2">
              <Example />
            </div>
            <button className="bg-red-600 text-white px-3 py-0.5 pb-1 text-sm rounded">
              Sign in
            </button>
            <div className="w-8 h-8">
              <BiMenu className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="flex gap-3 px-6 pt-2">
          <Link
            to="/stream"
            className={`text-gray-500 ${
              streamActive ? "font-semibold text-red-500" : ""
            } text-base flex items-center cursor-pointer hover:text-red-500`}
          >
            Streams
          </Link>
          <Link
            to="/plays"
            className={`text-gray-500 ${
              playsActive ? "font-semibold text-red-500" : ""
            } text-base flex items-center cursor-pointer hover:text-red-500`}
          >
            Plays
          </Link>
          <Link
            to="/tvseries"
            className={`text-gray-500 ${
              tvseriesActive ? "font-semibold text-red-500" : ""
            } text-base flex items-center cursor-pointer hover:text-red-500`}
          >
            Tv Series
          </Link>
        </div>
      </div>
    </>
  );
}
const NavbarComp = () => {
  const location = useLocation();
  return (
    <>
      <nav>
        {/* Small Screen */}
        <div className="md:hidden px-3 pt-2">
          <NavSm />
        </div>
        {/* Medium Screen 
        <div className="hidden md:flex lg:hidden">
          <NavMd />
        </div> */}
        {/* Large Screen  */}
        <div className="hidden md:flex px-4 py-3">
          <NavLg
            streamActive={location.pathname === "/stream"}
            playsActive={location.pathname === "/plays"}
            tvseriesActive={location.pathname === "/tvseries"}
          />
        </div>
      </nav>
    </>
  );
};

export default NavbarComp;
