import {courses, details, modules} from "../data/courses";
import { useParams } from 'react-router-dom';
import JoinButton from '../components/JoinButton';
import { HiCode } from 'react-icons/hi';
import AccordionTemplate from "../components/Accordion";
import cinna from "../assets/python-logo.png";
import Box from "../components/Box";
import LoginModal from '../components/LoginModal';
import { users } from '../data/users';
import React, { useState } from 'react';

const CourseContent = () => {
    const { name } = useParams();
    const index = courses.findIndex(element => element.name === name);

    const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null); // Inicialmente no hay usuario logueado

  // Función para abrir el modal solo si no hay usuario logueado
  const openModal = () => {
    if (!user) {
      setIsModalOpen(true);
    }
  };

  // Simulación del cierre del modal y login exitoso
  const closeModal = (email, password) => {
    const loggedInUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (loggedInUser) {
      setUser(loggedInUser); // Si las credenciales son correctas, establece el usuario
      setIsModalOpen(false); // Cierra el modal
    } else {
      alert('Credenciales incorrectas'); // Muestra un mensaje de error si las credenciales son incorrectas
    }
  };

  const ola = () => {
    setIsModalOpen(false);
  }

    return (
        <div className="min-h-screen bg-white">
            <div className="bg-blue-100/50 px-40 py-28 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6 justify-start items-center">
                <div>
                    <div>
                        <div className="mb-4">
                            
                        </div>
                    </div>
                    <h1 className="flex items-center text-3xl font-bold text-gray-800 gap-2 mb-5">
                        <HiCode></HiCode> {details[index].curso}
                    </h1>
                    <h5 className='text-sm'>
                        Este curso es parte de múltiples programas. <a className='text-blue-950 hover:text-blue-800 hover:cursor-pointer font-bold hover:underline'> Obtener más información </a>
                    </h5>
                    <div className='my-5'>
                        <JoinButton onClick={openModal}/>
                        {isModalOpen && !user && <LoginModal onClose={closeModal} ola={ola} />}
                    </div>
                    <h5 className='text-sm'>
                        <a className='font-bold'> 10000 </a> ya inscritos
                    </h5>
                    
                </div>
                <div className="flex justify-end">
                    <img
                        className="h-[300px] opacity-35"
                        src={cinna}
                        alt="cinna"
                        />
                </div>
            </div>
                <Box/>
            <div className='px-40 py-28 flex flex-col gap-6 justify-start text-sm w-[75%]'>
                <div className="flex flex-col gap-3">
                    <h3 className='font-bold text-sm'>¿Qué aprenderás?</h3>
                    <p className="text-xs w-[90%]">
                        {modules[index].learn}    
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className='font-bold text-sm'>Módulos</h3>
                    <p className="text-xs w-[90%]">
                        {modules[index].text}  
                    </p>
                </div>
                <div>
                    <AccordionTemplate list1={modules[index].modulos} list2={modules[index].descripcion}/>
                </div>
            </div>
        </div>
    );
}
 
export default CourseContent;