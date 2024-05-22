import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faChartLine } from '@fortawesome/free-solid-svg-icons'; // Import sign-out and dashboard icons
import { IoMdMenu } from "react-icons/io";


export default function Navbar() {
  return (
    <nav className="bg-gray-800 w-full h-16 flex items-center justify-between px-10">
      <div className='flex items-center justify-center'>
        <div className=' mr-2 pr-16 pl-2'>
          <h2 className='font-semibold text-white text-xl'><span className='text-red-500 border-red-500 border-t-4 border-l-4 border-1 pl-1'>Ed</span>ucati<span className='text-red-500 border-red-500 border-b-4 border-r-4 border-1 pr-1'>on</span></h2>
        </div>
        <div className="flex ">
          < IoMdMenu className="text-white text-xl mr-2" /> {/* Dashboard icon */}
          <h1 className="text-white font-semibold">Dashboard</h1>
        </div>
      </div>
      <div>
        <button className="text-white focus:outline-none">
          Logout <FontAwesomeIcon icon={faSignOutAlt} className="ml-1" />
        </button>
      </div>
    </nav>
  );
}
