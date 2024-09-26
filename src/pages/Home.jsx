//import React from 'react'
import { FiBookOpen, FiGlobe, FiFileText } from "react-icons/fi";
import Services from "../components/Services";
import Imagen from "../assets/Hero-image.svg"
import Imagen2 from "../assets/Hero-image2.svg"
const Home = () => {
  return (
    <section id="home" className="py-24 md:py-32 lg:mb-20 2xl:pt-36">
      {/* Primera parte */}
      <div className="relative mx-6 max-w-screen-xl xl:mx-auto lg:mx-24 grid gap-20 grid-cols-1 md:grid-cols-2 mb-14 lg:mb-48">
        
        {/* Img container */}
        <div className="relative flex items-center justify-center w-full ">
        <svg className="w-full max-h-[400px] absolute -z-10 inset-0" viewBox="0 0 1143 1160" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M283.373 1042.74C849.035 1308.84 1106.34 1068.94 1131.12 823.061C1234.71 -204.456 579.938 21.7813 579.938 21.7813C393.755 98.1094 -423.705 710.101 283.373 1042.74Z" fill="#E5E1FA"/>
</svg>
        <img src={Imagen} alt="Imagen de inicio" className="w-full max-h-[400px]" />
        </div>
        <div className="">
          <h1 className="max-w-[550px] text-3xl md:text-4xl font-bold mb-5 md:mb-10 text-[#1C163A]">Aprende programación a tu propio ritmo
          </h1>
          <div className="hero-paragraph md:mb-6">
            <p className="text-pretty max-w-[500px] text-gray-600 mb-8">
            Softcode es una plataforma de cursos de programación en línea que te permite aprender a programar en Python y Web de manera intuitiva, desde cero y con ejercicios prácticos. Nuestro objetivo es que puedas aprender a programar de manera sencilla y rpida, sin importar tu nivel de experiencia.
            </p>
            <a href="" className="px-4 py-3 text-white font-semibold text-lg bg-gradient-to-t from-[#7C69E7] to-[#9281F3] rounded-md">Empieza gratis</a>
          </div>
        </div>
      </div>
      {/* Segunda parte */}
      <div className="relative mx-6 max-w-screen-lg xl:mx-auto grid gap-20 grid-cols-1 md:grid-cols-2 mb-14 lg:mb-32">
        <div className="">
          <h1 className="max-w-[500px] text-3xl md:text-4xl font-bold mb-5 md:mb-10 text-[#1C163A]">Accede a los cursos con la mejor calidad
          </h1>
          <div className="md:mb-6">
              <div className="flex items-center gap-6 mb-8">
                <div className="rounded-full grid content-center p-4 bg-[#9484EF]">
                <FiBookOpen className='size-6 stroke-white' />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Lecciones interactivas</h3>
                  <p className="text-gray-500 max-w-[320px] text-pretty">Aprende de forma interactiva a tu propio ritmo</p>
                </div>
              </div>
              <div className="flex items-center gap-6 mb-8">
                <div className="rounded-full grid content-center p-4 bg-[#9484EF]">
                <FiGlobe className='size-6 stroke-white' />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Comunidad activa</h3>
                  <p className="text-gray-500 max-w-[320px] text-pretty">Conéctate con la comunidad de programadores con ganas de aprender</p>
                </div>
              </div>
              <div className="flex items-center gap-6 mb-8">
                <div className="rounded-full grid content-center p-4 bg-[#9484EF]">
                <FiFileText className='size-6 stroke-white' />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Material de apoyo</h3>
                  <p className="text-gray-500 max-w-[320px] text-pretty">Obtén acceso a diversos materiales de apoyo para reforzar tu aprendizaje</p>
                </div>
              </div>
          </div>
        </div>  
        {/* Img container */}
        <div className="relative flex items-center justify-center w-full ">
        <svg className="w-full max-h-[400px] absolute -z-10 inset-0" viewBox="0 0 1143 1160" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M283.373 1042.74C849.035 1308.84 1106.34 1068.94 1131.12 823.061C1234.71 -204.456 579.938 21.7813 579.938 21.7813C393.755 98.1094 -423.705 710.101 283.373 1042.74Z" fill="#E5E1FA"/>
</svg>
        <img src={Imagen2} alt="Imagen de inicio" className="w-full max-h-[400px]" />

        </div>
      </div>
      <Services />
    </section>
  )
}

export default Home