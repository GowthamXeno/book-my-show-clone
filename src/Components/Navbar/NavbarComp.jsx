import React from 'react';
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";


function NavSm(){
    return(
        <>
            <div className='flex items-center justify-between '>
                <div>
                    <h3>It All Starts Here!</h3>
                    <span className='flex items-center'>
                        Chennai <BiChevronDown/>
                    </span>
                </div>
                <div className='w-8 h-8'>
                    <button>Use App</button>
                    <BiSearch className='w-full h-full'/>
                </div>
            </div>
        </>
    )
}

const NavbarComp = () => {
  return (
    <NavSm />
  )
}

export default NavbarComp;