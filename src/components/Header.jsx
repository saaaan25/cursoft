import React, { useContext } from 'react';
import { HiCode } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContext.jsx';

const Header = () => {
  
  
  return (
    <nav className="bg-transparent backdrop-blur-md p-4 font-semibold w-full">
      <div className=" flex justify-between items-center text-pretty w-full">
        <div className="space-x-2 font-bold text-xl items-center ml-5 mr-5 hidden md:flex">
          <div>
            <HiCode className="text-3xl text-primary fill-primary"></HiCode>
          </div>
          <div className='uppercase'>
            Softcode
          </div>
        </div>
        <ul className="flex font-semibold text-black pl-3 pr-3 justify-center">
          <li>
            <Link
              to="/"
              className="hover:text-blue-800 transition-colors text-black pl-3 pr-3"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className="hover:text-blue-800 transition-colors text-black pl-3 pr-3"
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className="hover:text-blue-800 transition-colors text-black pl-3 pr-3"
            >
              Cursos
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-blue-800 transition-colors text-black pl-3 pr-3"
            >
              Servicios
            </Link>
          </li>
        </ul>
        <div className='flex space-x-6 font-semibold  justify-end'>
            <>
              <button className='text-text bg-secondary/20 p-2 rounded-md  hover:border-white hover:-translate-y-1 transition-transform duration-300 ease-in-out'
                    >
                  Iniciar Sesión
              </button>
              <button className='primary-button'>
                  Registrarse
              </button>
            </>
            
        </div>
      </div>
    </nav>
  );
};

export default Header;
