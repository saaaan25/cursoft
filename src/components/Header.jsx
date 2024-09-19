// import React from 'react';
import { Link } from 'react-router-dom'; // O 'next/link' si estás usando Next.js

const Header = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          MyApp
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Sobre nosotros
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Cursos
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Servicios
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
