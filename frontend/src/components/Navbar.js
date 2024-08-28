import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
// Use the correct import statement without curly braces

const Navbar = () => {
  const [role, setRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userRole = jwtDecode(token).user.role;
      setRole(userRole);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setRole(null);
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg">Bangladeshi Handicrafts</h1>
        <div>
          <a href="/blog" className="text-gray-300 hover:text-white mr-4">Blog</a>
          {isLoggedIn ? (
            <>
              {role === 'admin' && <a href="/admin" className="text-gray-300 hover:text-white mr-4">Admin Dashboard</a>}
              {role === 'customer' && <a href="/customer" className="text-gray-300 hover:text-white mr-4">My Account</a>}
              <button onClick={handleLogout} className="text-gray-300 hover:text-white">Logout</button>
            </>
          ) : (
            <>
              <a href="/login" className="text-gray-300 hover:text-white mr-4">Login</a>
              <a href="/register" className="text-gray-300 hover:text-white">Register</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
