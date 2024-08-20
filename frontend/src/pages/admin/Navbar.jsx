import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="bg-white text-blue-600 font-semibold p-4 shadow-md flex justify-between items-center">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border border-blue-600 rounded-md  w-3/12"
      />
      <div className="flex  space-x-10 text-blue-600">
        <FaBell size={24} className=" cursor-pointer" />
        <FaUserCircle size={24} className=" cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
