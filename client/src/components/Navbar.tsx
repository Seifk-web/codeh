import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.jpg" alt="Code H" className="h-20 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/campaign" className="text-gray-700 hover:text-blue-600 transition">Campaign</Link>
            <Link to="/specialists" className="text-gray-700 hover:text-blue-600 transition">Specialists</Link>
            <Link to="/therapy-services" className="text-gray-700 hover:text-blue-600 transition">Therapy</Link>
            <Link to="/donate" className="text-gray-700 hover:text-blue-600 transition">Donate</Link>
            
            {isLoggedIn ? (
              <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-blue-600 transition">Login</Link>
                <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/campaign" className="block text-gray-700 hover:text-blue-600">Campaign</Link>
            <Link to="/specialists" className="block text-gray-700 hover:text-blue-600">Specialists</Link>
            <Link to="/therapy-services" className="block text-gray-700 hover:text-blue-600">Therapy</Link>
            <Link to="/donate" className="block text-gray-700 hover:text-blue-600">Donate</Link>
            <Link to="/login" className="block text-gray-700 hover:text-blue-600">Login</Link>
            <Link to="/register" className="block bg-blue-600 text-white px-4 py-2 rounded text-center">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
