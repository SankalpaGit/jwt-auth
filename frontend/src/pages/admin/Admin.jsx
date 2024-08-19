// Admin.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import ViewBooks from './ViewBooks';
import BorrowedBooks from './BorrowedBooks';
import RegisteredUsers from './RegisteredUsers';
import Donations from './Donations';

const Admin = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} /> 
            <Route path="books" element={<ViewBooks />} />  
            <Route path="borrow" element={<BorrowedBooks />} />  
            <Route path="user" element={<RegisteredUsers />} />  
            <Route path="donation" element={<Donations />} />  
            <Route path="*" element={<Dashboard />} /> 
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
