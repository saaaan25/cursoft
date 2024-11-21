//import React from 'react'
import { FiBookOpen, FiGlobe, FiFileText } from "react-icons/fi";
import Services from "../components/Services";
import Imagen from "../assets/Hero-image.svg"
import Imagen2 from "../assets/Hero-image2.svg"
import Tag from "../components/Tag";
const Home = () => {
  return (
    <section id="home" className="py-24 md:py-32 lg:mb-20 2xl:pt-36">
      {/* Primera parte */}
      <div className="relative mx-6 max-w-screen-xl xl:mx-auto lg:mx-24 grid gap-20 grid-cols-1 md:grid-cols-2 mb-14 lg:mb-48">
        
        
        <div className="text-center mx-auto md:text-left">
          <h1 className="max-w-[550px] leading-tight md:leading-tight text-3xl md:text-5xl font-bold mb-5 md:mb-10 text-[#1C163A] ">Aprende programación a tu <span className="border-b-primary border-b-4 border-dashed">propio ritmo</span>
          </h1>
          <div className="hero-paragraph md:mb-6">
            <p className="text-pretty max-w-[500px] text-gray-600 mb-8 xl:text-lg">
            <span className="font-bold text-primary">Softcode</span> es una plataforma de cursos de programación en línea que te permite aprender a programar de manera intuitiva, desde cero y con ejercicios prácticos.
            </p>
            <a href="" className="inline-block primary-button">Empieza gratis</a>
          </div>
        </div>
        {/* Img container */}
        <div className="relative flex items-center justify-center w-full ">
        <svg className="w-full max-h-[400px] absolute -z-10 inset-0" viewBox="0 0 1143 1160" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M283.373 1042.74C849.035 1308.84 1106.34 1068.94 1131.12 823.061C1234.71 -204.456 579.938 21.7813 579.938 21.7813C393.755 98.1094 -423.705 710.101 283.373 1042.74Z" fill="#E5E1FA"/>
</svg>
        <img src={Imagen} alt="Imagen de inicio" className="w-full max-h-[400px]" />
        </div>
      </div>
      {/* Segunda parte */}
      <div className="relative mx-6 max-w-screen-xl xl:mx-auto lg:mx-24 mb-14 lg:mb-32">
        <div className="mx-auto">
          <Tag tag="Beneficios" />
          <h1 className="subtitle">Accede a los cursos con la mejor calidad
          </h1>
          <div className="md:mb-6 w-full flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col text-center w-full items-center gap-6 mb-8 bg-secondary/10 rounded-2xl p-6 transition-transform hover:-translate-y-1">
                <div className="rounded-full grid content-center p-4 bg-primary/80">
                <FiBookOpen className='size-12 stroke-white' />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-text mb-2">Lecciones interactivas</h3>
                  <p className="text-gray-500 max-w-[300px] text-pretty">Aprende de forma interactiva a tu propio ritmo</p>
                </div>
              </div>
              <div className="flex flex-col text-center w-full items-center gap-6 mb-8 bg-secondary/10 rounded-2xl p-6 transition-transform hover:-translate-y-1">
                <div className="rounded-full grid content-center p-4 bg-primary/80">
                <FiGlobe className='size-12 stroke-bg' />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-text mb-2">Comunidad activa</h3>
                  <p className="text-gray-500 max-w-[300px] text-pretty">Conéctate con la comunidad de programadores con ganas de aprender</p>
                </div>
              </div>
              <div className="flex flex-col text-center w-full items-center gap-6 mb-8 bg-secondary/10 rounded-2xl p-6 transition-transform hover:-translate-y-1">
                <div className="rounded-full grid content-center p-4 bg-primary/80">
                <FiFileText className='size-12 stroke-bg' />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-text mb-2">Material de apoyo</h3>
                  <p className="text-gray-500 max-w-[300px] text-pretty">Obtén acceso a diversos materiales de apoyo para reforzar tu aprendizaje</p>
                </div>
              </div>
          </div>
        </div>  
        
      </div>
      <Services />
    </section>
  )
}

export default Home