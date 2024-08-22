import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { IoMdAddCircle } from "react-icons/io";

const ViewBooks = () => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <div className='flex justify-between items-center'>
        <h2 className="text-2xl font-bold mb-4">List of Books</h2>
        <button className='bg-blue-700 text-white p-2 gap-x-2 rounded-md flex items-center text-center'><IoMdAddCircle />
        Add Books</button>
      </div>
      <table className="min-w-full bg-white border-collapse mt-2">
        <thead>
          <tr className="bg-orange-100">
            <th className="py-2 px-4 border border-gray-300 text-center text-gray-600">ID</th>
            <th className="py-2 px-4 border border-gray-300 text-center text-gray-600">Title</th>
            <th className="py-2 px-4 border border-gray-300 text-center text-gray-600">Author</th>
            <th className="py-2 px-4 border border-gray-300 text-center text-gray-600">ISBN</th>
            <th className="py-2 px-4 border border-gray-300 text-center text-gray-600">Quantity</th>
            <th className="py-2 px-4 border border-gray-300 text-center text-gray-600">Status</th>
            <th className="py-2 px-4 border border-gray-300 text-center text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border border-gray-300 text-center">1</td>
            <td className="py-2 px-4 border border-gray-300 text-center">The Great Gatsby</td>
            <td className="py-2 px-4 border border-gray-300 text-center">F. Scott Fitzgerald</td>
            <td className="py-2 px-4 border border-gray-300 text-center">9780743273565</td>
            <td className="py-2 px-4 border border-gray-300 text-center">10</td>
            <td className="py-2 px-4 border border-gray-300 text-center">Available</td>
            <td className="py-2 px-4 border border-gray-300 text-center">
              <div className="flex justify-center space-x-2">
                <FaEdit className="text-blue-500 cursor-pointer" />
                <FaTrash className="text-red-500 cursor-pointer" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewBooks;