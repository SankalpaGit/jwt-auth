import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaBook, FaBookmark, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { BiDonateHeart } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 text-gray-800 w-2/12 h-screen flex flex-col justify-between p-4">
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-blue-800 text-center font-semibold">
        पुस्तकालय Admin</h2>
        <ul className="space-y-4 text-gray-700 font-semibold">
          <li>
            <Link to="/admin" className="flex items-center p-2 hover:bg-gray-300 rounded">
              <FaTachometerAlt className="mr-2" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/books" className="flex items-center p-2 hover:bg-gray-300 rounded">
              <FaBook className="mr-2" /> View Books
            </Link>
          </li>
          <li>
            <Link to="/admin/borrow" className="flex items-center p-2 hover:bg-gray-300 rounded">
              <FaBookmark className="mr-2" /> Borrowed Books
            </Link>
          </li>
          <li>
            <Link to="/admin/user" className="flex items-center p-2 hover:bg-gray-300 rounded">
              <FaUsers className="mr-2" /> Registered Users
            </Link>
          </li>
          <li>
            <Link to="/admin/donation" className="flex items-center p-2 hover:bg-gray-300 rounded">
              <BiDonateHeart className="mr-2" /> Donations
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/logout" className="flex items-center p-2 hover:bg-red-700 bg-red-600 text-white rounded">
          <FaSignOutAlt className="mr-2" /> Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
