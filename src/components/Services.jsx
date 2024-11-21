import { Cards } from '../components/Cards';
import Tag from "../components/Tag";

// Icons
import { FaBookMedical, FaHeart, FaPencilAlt } from "react-icons/fa";
import { MdBroadcastOnHome } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { SiHtmlacademy } from "react-icons/si";

const servicesData = [
  { icon: FaPencilAlt, title: "Cursos Personalizados", text: "Aprende a tu ritmo con planes adaptados a tus necesidades.", color: "red" },
  { icon: FaHeart, title: "Soporte Continuo", text: "Acceso a tutores y recursos para resolver tus dudas en cualquier momento.", color: "green" },
  { icon: FaBookMedical, title: "Material Actualizado", text: "Contenidos frescos y relevantes que te preparan para el mercado laboral.", color: "blue" },
  { icon: MdBroadcastOnHome, title: "Proyectos Prácticos", text: "Desarrolla proyectos reales para fortalecer tus habilidades.", color: "yellow" },
  { icon: IoMdPeople, title: "Comunidad Activa", text: "Únete a una red de estudiantes y profesionales para compartir experiencias.", color: "purple" },
  { icon: SiHtmlacademy, title: "Certificación Reconocida", text: "Obtén un certificado que avale tus nuevos conocimientos.", color: "rose" },
];

const Services = () => {
  return (
    <div className="max-w-screen-xl xl:mx-auto lg:mx-24 justify-center items-center">
        <div className='w-full mt-10'>
          <div className='text-center'>
            <Tag tag="Servicios" />
            <h2 className="text-center mx-auto subtitle">
                Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-500 text-center mb-8 mx-auto max-w-[500px]">
              Ofrecemos cursos de programación accesibles y prácticos, diseñados para impulsar tu carrera en el mundo digital. <span className="font-bold text-primary">¡Aprende y crece con nosotros!</span>
            </p>
          </div>
        </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-2 w-full mx-auto">
        {servicesData.map((service, index) => (
          <Cards 
            key={index} 
            icon={service.icon} 
            title={service.title} 
            text={service.text} 
            color={service.color} 
          />
        ))}
      </div>
    </div>   
  );
};

export default Services;