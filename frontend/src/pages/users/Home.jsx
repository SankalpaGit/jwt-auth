import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Navbar from './Navbar';

const BASE_URL = 'http://localhost:5000'; // Base URL for your server

const Home = () => {
  const [books, setBooks] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/books/view`);
        
        // Simulate a 2-second delay before setting the data
        setTimeout(() => {
          setBooks(response.data);
          setLoading(false);
        }, 1000);

        console.log(response.data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // this is the Skeleton loading part
  
  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="flex flex-wrap justify-center mt-8">
          {Array(4).fill().map((_, index) => (
            <div key={index} className="w-64 bg-white shadow-lg rounded-lg overflow-hidden m-4 flex flex-col">
              <Skeleton height={264} /> {/* Skeleton for book cover */}
              <div className="p-4 flex-1 flex flex-col">
                <Skeleton width={`80%`} height={60} className="mb-2" />
                <Skeleton width={`60%`} className="mb-1" />
                <Skeleton width={`60%`} className="mb-1" />
                <Skeleton width={`40%`} className="mb-1" />
                <Skeleton width={`60%`} height={36} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) return <div>Error: {error}</div>;
  if (books.length === 0) return <div>No book data available</div>;

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center mt-8">
        {books.map((book) => (
          <div key={book.id} className="w-64 bg-white shadow-lg rounded-lg overflow-hidden m-4 flex flex-col">
            {/* Book Cover Image */}
            <div className='w-64 h-72'>
                <img
              className="w-full h-full "
              src={`http://localhost:5000${book.images}`}  // Full URL for the image
              alt={book.title || 'book'}
            />
            </div>
            
            {/* Book Info */}
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-lg font-bold text-green-600 mb-2">{book.title || 'Unknown Title'}</h2>
              <p className="text-sm mb-1">Author: {book.author}</p>
              <p className="text-sm mb-1">Status: {book.status}</p>
              <p className="text-sm mb-1">Quantity: {book.quantity}</p>
              <div className="flex items-center justify-between mt-auto">
                <button className="px-4 py-2 bg-green-600 text-white text-sm font-bold rounded hover:bg-green-500">
                  Borrow
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
