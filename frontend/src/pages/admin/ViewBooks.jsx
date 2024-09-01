import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { IoMdAddCircle } from "react-icons/io";
import axios from 'axios';

const ViewBooks = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    quantity: '',
    status: 'Available',
    image: null
  });
  const [error, setError] = useState('');

  // Function to toggle the modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create form data to handle file upload
    const data = new FormData();
    data.append('title', formData.title);
    data.append('author', formData.author);
    data.append('isbn', formData.isbn);
    data.append('quantity', formData.quantity);
    data.append('status', formData.status);
    if (formData.image) {
      data.append('image', formData.image);
    }
    for (let [key, value] of data.entries()) {
      console.log(`${key}: ${value}`);
    }
  
    try {
      const response = await axios.post('http://localhost:5000/api/books/add', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Book added:', response.data);
      toggleModal(); // Close the modal on success
      // Reset the form
      setFormData({
        title: '',
        author: '',
        isbn: '',
        quantity: '',
        status: 'Available',
        image: null
      });
    } catch (error) {
      console.error('Error adding book:', error);
      setError('Failed to add book. Please try again.');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <div className='flex justify-between items-center'>
        <h2 className="text-2xl font-bold mb-4">List of Books</h2>
        <button 
          onClick={toggleModal} 
          className='bg-blue-700 text-white p-2 gap-x-2 rounded-md flex items-center text-center'
        >
          <IoMdAddCircle />
          Add Books
        </button>
      </div>

      <table className="min-w-full bg-white border-collapse mt-2">
        <thead>
          <tr className="bg-orange-100">
            <th className="py-2 px-4 border border-gray-300 text-center text-gray-600">ID</th>
            <th className="py-2 px-4 border border-gray-300 text-center text-gray-600">Image</th>
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
            <td className="py-2 px-4 border border-gray-300 text-center">
              <img src="path/to/book-image.jpg" alt="Book" className="h-16 w-12 object-cover mx-auto"/>
            </td>
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

      {/* Modal for Adding Books */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Add New Book</h3>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input 
                  type="text" 
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1" 
                  placeholder="Book Title"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Author</label>
                <input 
                  type="text" 
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1" 
                  placeholder="Author Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">ISBN</label>
                <input 
                  type="text" 
                  name="isbn"
                  value={formData.isbn}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1" 
                  placeholder="ISBN Number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Quantity</label>
                <input 
                  type="number" 
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1" 
                  placeholder="Quantity"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Status</label>
                <select 
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                >
                  <option>Available</option>
                  <option>Not Available</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">File or Media</label>
                <input 
                  type="file" 
                  onChange={handleFileChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button 
                  type="button" 
                  onClick={toggleModal} 
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewBooks;
