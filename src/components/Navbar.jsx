import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get current page path

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-lg p-4 flex justify-center space-x-6 z-50">
      {[
        { path: "/", name: "Home" },
        { path: "/about", name: "About" },
        { path: "/projects", name: "Projects" },
        { path: "/tools", name: "Tools" },
        { path: "/my-role", name: "My Role" },
        { path: "/contacts", name: "Contacts" },
      ].map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`font-semibold transition ${
            location.pathname === item.path ? "text-yellow-400" : "text-white hover:text-yellow-400"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
