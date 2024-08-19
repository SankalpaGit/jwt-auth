// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-2/12 h-screen p-4">
      <ul className="space-y-4">
        <li>
          <Link to="/admin" className="block p-2 hover:bg-gray-700 rounded">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/books" className="block p-2 hover:bg-gray-700 rounded">
            View Books
          </Link>
        </li>
        <li>
          <Link to="/admin/borrow" className="block p-2 hover:bg-gray-700 rounded">
            Borrowed Books
          </Link>
        </li>
        <li>
          <Link to="/admin/user" className="block p-2 hover:bg-gray-700 rounded">
            Registered Users
          </Link>
        </li>
        <li>
          <Link to="/admin/donation" className="block p-2 hover:bg-gray-700 rounded">
            Donations
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
