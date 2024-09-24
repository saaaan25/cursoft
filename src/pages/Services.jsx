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
    <div className="block justify-center items-center min-h-screen">
        <div className='flex justify-between max-w-full mx-10'>
            <h1 className="pl-32 pb-8 text-black align-left max-w-full mx-auto">
                Nuestros Servicios
            </h1>
            <h1 className="ml-0 pt-8 pb-8 text-black text-sm text-justify max-w-xs mx-auto">
            Ofrecemos cursos de programación accesibles y prácticos, diseñados para impulsar tu carrera en el mundo digital. ¡Aprende y crece con nosotros!
            </h1>
        </div>

      <div className="grid gap-4 grid-cols-3 grid-rows-2 max-w-screen-lg w-full mx-auto">
        <Cards icon={FaPencilAlt} tittle="Cursos Personalizados" text="Aprende a tu ritmo con planes adaptados a tus necesidades." color="red" />
        <Cards icon={FaHeart} tittle="Soporte Continuo" text="Acceso a tutores y recursos para resolver tus dudas en cualquier momento." color="green" />
        <Cards icon={FaBookMedical} tittle="Material Actualizado" text="Contenidos frescos y relevantes que te preparan para el mercado laboral." color="blue" />
        <Cards icon={MdBroadcastOnHome} tittle="Proyectos Prácticos" text="Desarrolla proyectos reales para fortalecer tus habilidades." color="yellow" />
        <Cards icon={IoMdPeople} tittle="Comunidad Activa" text="Únete a una red de estudiantes y profesionales para compartir experiencias." color="purple" />
        <Cards icon={SiHtmlacademy} tittle="Certificación Reconocida" text="Obtén un certificado que avale tus nuevos conocimientos." color="rose" />
      </div>
    </div>   
  );
};

export default Services;
