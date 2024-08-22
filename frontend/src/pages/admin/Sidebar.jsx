import React from 'react';
import { Link , useLocation} from 'react-router-dom';
import { FaTachometerAlt, FaBook, FaBookmark, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { BiDonateHeart } from "react-icons/bi";

const Sidebar = () => {

  const location = useLocation()
  return (
    <div className="bg-gray-100 text-gray-800 w-2/12 h-screen flex flex-col justify-between p-4">
      <div>
        <h2 className="text-2xl  mb-6 text-blue-800 text-center font-semibold">
        पुस्तकालय Admin</h2>
        <ul className="space-y-4 text-gray-700 font-semibold">
          <li>
            <Link to="/admin" className={`${location.pathname === '/admin' ? 'flex items-center p-2 bg-gray-300 rounded text-blue-600 font-bold' : 'flex items-center p-2 hover:bg-gray-300 rounded hover:text-blue-600'}`}>
              <FaTachometerAlt className="mr-2" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/books" className={`${location.pathname === '/admin/books' ? 'flex items-center p-2 bg-gray-300 rounded text-blue-600 font-bold' : 'flex items-center p-2 hover:bg-gray-300 rounded hover:text-blue-600'}`}>
              <FaBook className="mr-2" /> View Books
            </Link>
          </li>
          <li>
            <Link to="/admin/borrow" className={`${location.pathname === '/admin/borrow' ? 'flex items-center p-2 bg-gray-300 rounded text-blue-600 font-bold' : 'flex items-center p-2 hover:bg-gray-300 rounded hover:text-blue-600'}`}>
              <FaBookmark className="mr-2" /> Borrowed Books
            </Link>
          </li>
          <li>
            <Link to="/admin/user" className={`${location.pathname === '/admin/user' ? 'flex items-center p-2 bg-gray-300 rounded text-blue-600 font-bold' : 'flex items-center p-2 hover:bg-gray-300 rounded hover:text-blue-600'}`}>
              <FaUsers className="mr-2" /> Registered Users
            </Link>
          </li>
          <li>
            <Link to="/admin/donation" className={`${location.pathname === '/admin/donation' ? 'flex items-center p-2 bg-gray-300 rounded text-blue-600 font-bold' : 'flex items-center p-2 hover:bg-gray-300 rounded hover:text-blue-600'}`}>
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
