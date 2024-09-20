//import React from 'react';
import { Cards } from '../components/Cards';


// Icons
import { FaBookMedical, FaHeart } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdBroadcastOnHome } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { SiHtmlacademy } from "react-icons/si";

const Services = () => {
  return (
    <div className="block justify-center items-center w-full min-h-screen bg-white py-10">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-5">
        Nuestros servicios
      </h1>
      <h4 className="text-md text-gray-500 text-center mb-8">
         Ofrecemos cursos de programación accesibles y prácticos, diseñados para impulsar tu carrera en el mundo digital. ¡Aprende y crece con nosotros!
      </h4>

      <div className="grid gap-4 grid-cols-3 grid-rows-2 max-w-screen-lg w-full mx-auto">
        <Cards icon={FaPencilAlt} tittle="Cursos Personalizados" text="Aprende a tu ritmo con planes adaptados a tus necesidades." color="red" />
        <Cards icon={FaHeart} tittle="Soporte Continuo" text="Acceso a tutores y recursos para resolver tus dudas en cualquier momento." color="green" />
        <Cards icon={FaBookMedical} tittle="Material Actualizado" text="Contenidos frescos y relevantes que te preparan para el mercado laboral." color="blue" />
        <Cards icon={MdBroadcastOnHome} tittle="Proyectos Prácticos" text="Desarrolla proyectos reales para fortalecer tus habilidades." color="yellow" />
        <Cards icon={IoMdPeople} tittle="Comunidad Activa" text="Únete a una red de estudiantes y profesionales para compartir experiencias." color="purple" />
        <Cards icon={SiHtmlacademy} tittle="Certificación Reconocida" text="Obtén un certificado que avale tus nuevos conocimientos." color="rose" />
      </div>
      <div className="p-16"/>
    </div>   
  );
};

export default Services;
