import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-lg p-4 flex justify-center space-x-6 z-50">
      <Link to="/" className="text-white font-semibold hover:text-yellow-400 transition">Home</Link>
      <Link to="/about" className="text-white font-semibold hover:text-yellow-400 transition">About</Link>
      <Link to="/projects" className="text-white font-semibold hover:text-yellow-400 transition">Projects</Link>
      <Link to="/tools" className="text-white font-semibold hover:text-yellow-400 transition">Tools</Link>
      <Link to="/my-role" className="text-white font-semibold hover:text-yellow-400 transition">My Role</Link>
      <Link to="/contacts" className="text-white font-semibold hover:text-yellow-400 transition">Contacts</Link>
    </nav>
  );
};

export default Navbar;
