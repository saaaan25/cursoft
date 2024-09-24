//Generalidades
import { Link } from 'react-router-dom';
import React from "react";

//Icons
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";


export const SubscriptionCards = ({title, mont, benefits}) => {
  return (
      <div className="container mx-auto border-4 p-8 border-purple-600">
          {/* TEXT */}
          <h1 className='font-bold text-2xl pb-4 max-w-40 mx-auto'>
            {title} 
          </h1>

          <p className='text-gray-700 pb-2'>Consigue <strong>1 mes</strong> de prueba gratis, luego {mont}&nbsp;PEN/mes </p>

          {/* BUTTON */}
          <div className="flex justify-center pb-2">
            <button className="font-bold text-purple-950 p-2 rounded-md bg-purple-400 flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:gap-4 hover:underline hover:scale-105 hover:bg-purple-500">
              UNETE AHORA <FaArrowRight />
            </button>
          </div>


          {/* TYC */}
          <div className='italic text-1xl text-gray-700 pb-8 '>
              <p>La suscripción continúa automáticamente.</p>
              <p>Consulta los <Link to="/terms-and-conditions" className="font-bold text-purple-950 underline " target="_blank" rel="noopener noreferrer">términos y condiciones</Link> </p>
          </div>

          {/* Beneftis List */}
          <div className="flex flex-col items-start gap-2">
            {benefits.map((benefit, index) => (
              <p key={index} className="flex items-start gap-2 text-left text-black break-words max-w-full">
                <span className="flex items-center justify-center w-6 h-6">
                  <FaCheck className='text-purple-600 w-full h-full' />
                </span>
                <span className="flex-1">{benefit}</span>
              </p>
            ))}
          </div>
          
      </div>
    
  );
};