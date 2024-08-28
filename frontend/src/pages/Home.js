import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/business')
      .then(res => res.json())
      .then(data => setBusinesses(data));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold">Handicraft Businesses</h2>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {businesses.map(business => (
            <div key={business._id} className="bg-white p-4 shadow rounded">
              <img src={business.logo} alt={business.name} className="w-full h-32 object-cover" />
              <h3 className="text-lg font-bold mt-2">{business.name}</h3>
              <p>Years of Operation: {business.yearsOfOperation}</p>
              <p>Number of Products: {business.numberOfProducts}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">View Products</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
