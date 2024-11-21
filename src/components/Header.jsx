import { HiCode } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="bg-white p-4 font-semibold flex justify-center w-full">
            <div className="container flex justify-between items-center text-pretty w-full">
                <div className="flex space-x-2 font-bold text-xl items-center ml-5 mr-5">
                    <div>
                        <HiCode></HiCode>
                    </div>
                    <div className='pb-1'>
                        Softcode
                    </div>
                </div>
                <ul className="flex font-semibold text-black pl-3 pr-3 justify-center">
                    <li>
                        <Link to="/"
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
                            Sobre nosotros
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
                <div className='flex space-x-6 font-semibold bg-white justify-end'>
                    <>
                        <button className='text-yellow-300 hover:text-black bg-white hover:border-white'>
                            Iniciar Sesión
                        </button>
                        <button className='text-blue-800 border border-blue-800 p-2 rounded-md hover:text-black hover:border-black bg-white'>
                            Registrarse
                        </button>
                    </>
                </div>
            </div>
        </nav>
    );
};

export default Header;
