import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Text Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Buy or Sell Stationery Anytime, Anywhere
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're looking to purchase high-quality stationery or sell your products,
            we’ve got you covered. Easy transactions and fast delivery at your fingertips.
          </p>
          <a
            href="/products"
            className="px-6 py-3 bg-green-300 text-black font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Start Now
          </a>
        </div>

        {/* Right Side: Image Section */}
        <div className="flex justify-center ">
          <img
            src="https://www.shutterstock.com/image-vector/school-pencil-case-various-stationery-260nw-2345322193.jpg"
            alt="Stationery"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
