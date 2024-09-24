import { SubscriptionCards } from '../components/SubscriptionCards';
import { Link } from 'react-router-dom';

// Icons
import { FaCheck } from "react-icons/fa6";

const Services = () => {
  
  //PLANES
  const mensual = [
    "Acceso ilimitado a todos los cursos de programación.",
    "Nuevas clases y materiales actualizados cada semana.",
    "Foros y grupos de discusión para resolver tus dudas.",
    "Certificados de finalización para cada curso completado.",
    "Descuentos en futuros cursos y recursos adicionales."
  ];
  

  const anual = [
    "Acceso ilimitado a todos los cursos de programación.",
    "Nuevas clases y materiales actualizados cada semana.",
    "Foros y grupos de discusión para resolver tus dudas.",
    "Certificados de finalización para cada curso completado.",
    "Descuentos en futuros cursos y recursos adicionales.",
    "Acceso exclusivo a seminarios web y talleres en vivo.",
    "Orientación personalizada de mentores expertos en programación.",
    "Acceso a proyectos prácticos y desafíos de codificación para aplicar lo aprendido."
  ];

  const solo_curso = [
    "Acceso a un curso individual con materiales específicos.",
    "Certificado de finalización del curso.",
    "Oportunidad de comprar recursos adicionales a precio reducido."
  ]

  
  return (
    <section id="services" className="block justify-center items-center min-h-screen pb-8">

{/* Zona de texto */}
        <div>
          <div className='max-w-full mx-10 mt-10'>
              <h1 className="text-3xl font-bold text-gray-800 text-center pb-5">
                  Elige tu plan
              </h1>
          </div>
          <div>
              <p className="text-md text-gray-500 text-center mb-8 max-w-lg mx-auto">
                  Descubre tu próximo juego favorito. Ya sea que juegues en consola, PC o en todos los dispositivos, hay un plan para ti. Cancela en cualquier momento para impedir futuros cargos.
              </p>
          </div>

        </div>

{/* PANEL DE SUSCRIPCION */}
        <div className="text-center mx-auto flex max-w-2/3 gap-4 pb-8">
          <SubscriptionCards title="Mensual" mont="15.00" benefits={mensual}/>
          <SubscriptionCards title="Anual" mont="120.00" benefits={anual}/>
        </div>
    
{/* Zona de cursos */}
        <div>
          <div className='max-w-full mx-10 mt-10'>
              <h1 className="text-3xl font-bold text-gray-800 pb-5">
                  ¿No deseas suscribirte?
              </h1>
          </div>
          <div>
              <p className="text-md text-gray-500 mb-8 ml-32 mr-48">
                No hay problema, aún puedes acceder a nuestros cursos de forma individual. Compra los cursos que más te interesen y aprende a tu propio ritmo. Si en el futuro decides suscribirte, disfrutarás de acceso ilimitado a todos nuestros cursos y materiales. Consulta los <Link to="/terms-and-conditions" className="font-bold text-purple-950 underline " target="_blank" rel="noopener noreferrer">términos y condiciones</Link>.
              </p>
              <div className="flex flex-col items-start gap-2 ml-48 mr-48">
                {solo_curso.map((benefit, index) => (
                  <p key={index} className="flex items-start gap-2 text-left text-black break-words max-w-full pb-2">
                    <span className="flex items-center justify-center w-6 h-6">
                      <FaCheck className='text-purple-600 w-full h-full' />
                    </span>
                    <span className="flex-1">{benefit}</span>
                  </p>
                ))}
              </div>
              
          </div>
        </div>    
    
    </section>   
  );
};

export default Services;





/*Hola grupo
import { Cards } from '../components/Cards';

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
    <div className="block justify-center items-center min-h-screen">
        <div className='max-w-full mx-10 mt-10'>
            <h1 className="text-3xl font-bold text-gray-800 text-center pb-5">
                Nuestros Servicios
            </h1>
        </div>
        <div>
            <h1 className="text-md text-gray-500 text-center mb-8 max-w-lg mx-auto">
              Ofrecemos cursos de programación accesibles y prácticos, diseñados para impulsar tu carrera en el mundo digital. ¡Aprende y crece con nosotros!
            </h1>
        </div>

      <div className="grid gap-4 grid-cols-3 grid-rows-2 max-w-screen-lg w-full mx-auto">
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

    */