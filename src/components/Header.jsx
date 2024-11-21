// import React from 'react';
import { HiCode } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-white p-4 font-semibold mflex justify-center">
      <div className="container mx-auto flex justify-between items-center text-pretty">
        <div className="flex space-x-2 font-bold text-xl items-center mr-14">
          <div>
            <HiCode></HiCode>
          </div>
          <div className='pb-1'>
            Softcode
          </div>
        </div>
        <ul className="flex space-x-6 font-semibold">
          <li>
            <Link
              to="/"
              className="hover:text-blue-800 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className="hover:text-blue-800 transition-colors"
            >
              Sobre nosotros
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className="hover:text-blue-800 transition-colors"
            >
              Cursos
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-blue-800 transition-colors"
            >
              Servicios
            </Link>
          </li>
        </ul>
        <div className='flex space-x-6 font-semibold'>
            <button className='text-yellow-300 hover:text-black'>
                Iniciar Sesión
            </button>
            <button className='text-blue-800 border border-blue-800 p-2 rounded-md hover:text-black hover:border-black'>
                Registrarse
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;