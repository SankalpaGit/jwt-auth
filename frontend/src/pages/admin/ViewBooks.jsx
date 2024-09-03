import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { IoMdAddCircle } from "react-icons/io";
import axios from 'axios';

const ViewBooks = () => {
  const [showModal, setShowModal] = useState(false);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const toggleModal = () => setShowModal(!showModal);

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    publishedDate: '',
    description: '',
    quantity: 1,
    status: 'available',
    image: null,
  });

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/books/view');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
        setError('Failed to load books. Please try again.');
      }
    };
    fetchBooks();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (key !== 'image') data.append(key, formData[key]);
    });
    if (formData.image) data.append('image', formData.image);

    try {
      const response = await axios.post('http://localhost:5000/api/books/add', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log('Book added:', response.data);
      toggleModal();
      setFormData({
        title: '',
        author: '',
        isbn: '',
        publishedDate: '',
        description: '',
        quantity: 1,
        status: 'available',
        image: null,
      });
      setSuccess('Book added successfully');
      setBooks([...books, response.data]); // Update the book list with the newly added book
    } catch (error) {
      console.error('Error adding book:', error);
      setError('Failed to add book. Please try again.');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <div className='flex justify-between items-center'>
        <h2 className="text-2xl font-bold">List of Books</h2>
        <button onClick={toggleModal} className='bg-blue-700 text-white p-2 rounded-md flex items-center'>
          <IoMdAddCircle className="mr-2" /> Add Book
        </button>
      </div>

      <table className="min-w-full bg-white border-collapse mt-6">
        <thead>
          <tr className="bg-blue-800 text-gray-100">
            <th className="py-2 px-4 border border-gray-300 text-center">ID</th>
            <th className="py-2 px-4 border border-gray-300 text-center">Image</th>
            <th className="py-2 px-4 border border-gray-300 text-center">Title</th>
            <th className="py-2 px-4 border border-gray-300 text-center">Author</th>
            <th className="py-2 px-4 border border-gray-300 text-center">ISBN</th>
            <th className="py-2 px-4 border border-gray-300 text-center">Published Date</th>
            <th className="py-2 px-4 border border-gray-300 text-center">Quantity</th>
            <th className="py-2 px-4 border border-gray-300 text-center">Status</th>
            <th className="py-2 px-4 border border-gray-300 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id}>
              <td className="py-2 px-4 border border-gray-300 text-center">{index + 1}</td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                <img 
                  src={`http://localhost:5000${book.images}`}
                  alt={book.title} 
                  className="h-16 w-12 object-cover mx-auto" 
                />
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">{book.title}</td>
              <td className="py-2 px-4 border border-gray-300 text-center">{book.author}</td>
              <td className="py-2 px-4 border border-gray-300 text-center">{book.isbn}</td>
              <td className="py-2 px-4 border border-gray-300 text-center">{new Date(book.publishedDate).toLocaleDateString()}</td>
              <td className="py-2 px-4 border border-gray-300 text-center">{book.quantity}</td>
              <td className="py-2 px-4 border border-gray-300 text-center">{book.status}</td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                <div className="flex justify-center space-x-2">
                  <FaEdit className="text-blue-500 cursor-pointer" />
                  <FaTrash className="text-red-500 cursor-pointer" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-xl font-bold">Add New Book</h3>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                {/* Form inputs */}
                <div className="">
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Book Title"
                    required
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Author Name"
                    required
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    name="isbn"
                    value={formData.isbn}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="ISBN Number"
                    required
                  />
                </div>
                <div className="">
                  <input
                    type="date"
                    name="publishedDate"
                    value={formData.publishedDate}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="">
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Book Description"
                  />
                </div>
                <div className="">
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Quantity"
                    min="1"
                    required
                  />
                </div>
                <div className="">
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="available">Available</option>
                    <option value="not available">Not Available</option>
                  </select>
                </div>
                <div className="">
                  <label className="block text-gray-700 font-medium mb-1">Book Image</label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="w-full p-2 border border-gray-300 rounded"
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
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewBooks;
