import React, { useState, useContext } from 'react';
import { AuthContext } from '../providers/AuthContext.jsx'; // Importa el contexto de autenticación
import { users } from '../data/users.js'
import PropTypes from 'prop-types';

const LoginModal = ({ onClose, ola }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext); // Usa el contexto para iniciar sesión
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
  
      if (user) {
        login(user);  // Usa la función login del contexto
        onClose();  // Cierra el modal
      } else {
        alert('Credenciales incorrectas');
      }
    };
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg w-96 relative">
          <button
            onClick={ola} // Cerrar modal al hacer clic en la "X"
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
          >
            X
          </button>
          <h2 className="text-xl font-semibold mb-4">Iniciar Sesión</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="tucorreo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Introduce tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
  
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

LoginModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    ola: PropTypes.func.isRequired
};

export default LoginModal;
