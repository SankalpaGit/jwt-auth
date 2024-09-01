import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-8">
        {/* Product Card */}
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Product Image */}
          <img
            className="w-full h-48 object-cover"
            src="/path/to/your/product-image.jpg"
            alt="book"
          />
          {/* Product Info */}
          <div className="p-4">
            <h2 className="text-lg font-bold text-green-600">Spider: Dawn the verse</h2>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. In sunt heju jaur ertand.</p>
            <div className="flex items-center justify-between mt-4">
              <button className="px-4 py-2 bg-green-600 text-white text-sm font-bold rounded hover:bg-green-500">Borrow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
