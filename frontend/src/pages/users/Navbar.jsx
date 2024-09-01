import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-4 bg-white text-green-600 shadow-md">
            {/* Logo */}
            <Link to="/home">
                <div className='ml-10'>
                    <img
                        src="../public/pustakalaya.png"
                        alt="Logo"
                        className="h-10"
                    />
                </div>
            </Link>

            {/* Links */}
            <div className="flex space-x-6 gap-10 font-bold">
                <Link to="/borrow">
                    <li className="list-none cursor-pointer hover:text-green-500">Borrow</li>
                </Link>
                <Link to="/donate">
                    <li className="list-none cursor-pointer hover:text-green-500">Donate</li>
                </Link>
            </div>

            {/* Icons */}
            <div className="flex space-x-4 gap-10 mr-10">
                <FaUserCircle className="text-2xl cursor-pointer hover:text-green-500" />
                <IoNotifications className="text-2xl cursor-pointer hover:text-green-500" />
            </div>
        </nav>
    );
};

export default Navbar;
