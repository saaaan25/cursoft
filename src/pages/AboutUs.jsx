//import para desplazamiento desde TyC
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

//import React from 'react';

import hombreImg from '../assets/hombre.png';  // Ajusta la ruta según tu estructura de carpetas
import mujerImg from '../assets/mujer.png';

const AboutUs = () => {

    //Hola franzito que haces?
    const contactRef = useRef(null);
    const { hash } = useLocation();

    useEffect(() => {
        if (hash === '#contact') {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [hash]);

    return (
    <section id="home" className="py-24 md:py-32 lg:mb-20 2xl:pt-36">
      {/* Meet Our Team Section */}
    <div className="relative mx-6 max-w-screen-xl xl:mx-auto lg:mx-24 ">
    <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-[#1C163A]">
        Conoce a nuestro equipo
    </h2>
    </div>

    <div className="relative mx-6 max-w-screen-xl xl:mx-auto lg:mx-24 grid gap-10 grid-cols-1 md:grid-cols-2 mb-14 lg:mb-24">
    {/* Profile 1 */}
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="mb-4">
            <img
            className="w-24 h-24 rounded-full mx-auto object-cover"
            src={mujerImg}
            alt="Sofía Sarmiento"
            />
        </div>
        <h3 className="text-xl font-bold mb-1">Sofía Sarmiento</h3>
        <div className="mt-4">
            <span className="inline-block bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            Founder & CEO
            </span>
        </div>
    </div>

    {/* Profile 2 */}
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="mb-4">
            <img
            className="w-24 h-24 rounded-full mx-auto object-cover"
            src={hombreImg}
            alt="Franz Chipana"
            />
        </div>
        <h3 className="text-xl font-bold mb-1">Franz Chipana</h3>
        <div className="mt-4">
            <span className="inline-block bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            UI Designer
            </span>
        </div>
    </div>

    {/* Profile 3 */}
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="mb-4">
            <img
            className="w-24 h-24 rounded-full mx-auto object-cover"
            src={hombreImg}
            alt="Joar Aranda"
            />
        </div>
        <h3 className="text-xl font-bold mb-1">Joar Aranda</h3>
        <div className="mt-4">
            <span className="inline-block bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            UX Designer
            </span>
        </div>
    </div>

    {/* Profile 4 */}
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="mb-4">
            <img
            className="w-24 h-24 rounded-full mx-auto object-cover"
            src={hombreImg}
            alt="Adrián Palacios"
            />
        </div>
        <h3 className="text-xl font-bold mb-1">Adrián Palacios</h3>
        <div className="mt-4">
            <span className="inline-block bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            Lead developer
            </span>
        </div>
    </div>
    </div>

      {/* Clients Review Section */}
    <div className="relative mx-6 max-w-screen-xl xl:mx-auto lg:mx-24 mb-14 lg:mb-24">
    <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-[#1C163A]">
    Echa un vistazo a algunas de nuestras reseñas
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
            <div>
            <h4 className="text-xl font-bold">Carlos Rodríguez</h4>
            <p className="text-gray-500">CEO en TechEdu</p>
            </div>
        </div>
        <p className="text-gray-600">
        “Los cursos de programación ofrecen una enseñanza de alta calidad, proporcionando un contenido claro y relevante que es muy valioso para el desarrollo de habilidades técnicas. ¡Altamente recomendados!”
        </p>
        </div>
        <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">
            “La calidad de los cursos es excepcional. Los instructores son expertos en sus campos y el contenido es muy relevante para el mercado actual.”
            </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">
            “Excelente experiencia de aprendizaje. La flexibilidad y el apoyo brindado fueron clave para nuestro éxito. ¡Gracias por todo!”
            </p>
        </div>
        </div>
    </div>
    </div>

    {/* Contact Us Section */}
    <div ref={contactRef} id="contact" className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-12">
    <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
        <p className="text-xl mb-6">¿Tienes alguna pregunta o necesitas más información? ¡Estamos aquí para ayudarte!</p>
        <form className="flex flex-col items-center">
            <input
                type="text"
                placeholder="Tu nombre"
                className="px-4 py-3 rounded-md w-2/3 max-w-md mb-4 bg-white text-black"
            />
            <input
                type="email"
                placeholder="Tu correo electrónico"
                className="px-4 py-3 rounded-md w-2/3 max-w-md mb-4 bg-white text-black"
            />
            <textarea
                placeholder="Tu mensaje"
                className="px-4 py-3 rounded-md w-2/3 max-w-md mb-4 bg-white text-black"
                rows="4"
            />
            <button className="bg-yellow-500 px-6 py-3 rounded-md font-bold hover:bg-yellow-600">
                Enviar
            </button>
        </form>
    </div>
</div>

</section>
);
}

export default AboutUs;
