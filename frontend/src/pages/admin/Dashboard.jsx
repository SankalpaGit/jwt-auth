import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded shadow-md mb-6">
        <p>Welcome to the admin dashboard.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-blue-100 p-4 rounded shadow text-center">
          <h2 className="text-xl font-semibold text-blue-700">Total Books</h2>
          <p className="text-2xl font-bold">150</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow text-center">
          <h2 className="text-xl font-semibold text-green-700">Total Donations</h2>
          <p className="text-2xl font-bold">50</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow text-center">
          <h2 className="text-xl font-semibold text-yellow-700">Total Borrowed Books</h2>
          <p className="text-2xl font-bold">45</p>
        </div>
        <div className="bg-purple-100 p-4 rounded shadow text-center">
          <h2 className="text-xl font-semibold text-purple-700">Total Users</h2>
          <p className="text-2xl font-bold">300</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
