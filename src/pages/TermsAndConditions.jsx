import React from 'react';

import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <section className="container mx-auto p-8">
      <h1 className="text-3xl italic font-bold text-purple-800 mb-6">Términos y Condiciones</h1>

      <h2 className="text-2xl font-semibold mb-4">1. Aceptación de Términos</h2>
      <p className="mb-4 pl-8 pr-8">
        Al acceder a nuestros servicios, aceptas cumplir con estos Términos y Condiciones. Si no estás de acuerdo con estos términos, no podrás utilizar nuestros servicios.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Descripción de Servicios</h2>
      <p className="mb-4 pl-8 pr-8">
        Ofrecemos acceso a una variedad de cursos de programación mediante planes de suscripción mensual y anual, así como la opción de compra individual de cursos.
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. Plan Mensual</h2>
      <p className="mb-4 pl-8 pr-8">
        El plan mensual ofrece acceso ilimitado a todos los cursos disponibles durante un mes, comenzando con una prueba gratuita de 1 mes. Después del período de prueba, se cobrará automáticamente la tarifa mensual de 15.00&nbsp;PEN/mes.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Plan Anual</h2>
      <p className="mb-4 pl-8 pr-8">
        El plan anual proporciona acceso ilimitado a todos los cursos durante un año, a un costo total de 120.00&nbsp;PEN. Este plan también comienza con una prueba gratuita de 1 mes. La renovación se realizará automáticamente al finalizar el año.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Compra de Cursos Individuales</h2>
      <p className="mb-4 pl-8 pr-8">
        Los estudiantes tienen la opción de comprar cursos de forma individual. Al adquirir un curso, se recibirán los materiales específicos del curso y un certificado de finalización al completar el curso. No se incluye acceso a otros cursos a menos que se suscriba a un plan mensual o anual.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Cancelación</h2>
      <p className="mb-4 pl-8 pr-8">
        Puedes cancelar tu suscripción en cualquier momento antes de la próxima fecha de facturación para evitar futuros cargos. Si cancelas, tendrás acceso a los cursos hasta el final del período de facturación actual.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Modificaciones a los Términos</h2>
      <p className="mb-4 pl-8 pr-8">
        Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Te notificaremos sobre cambios significativos y continuaremos prestando nuestros servicios bajo los nuevos términos.
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. Contacto</h2>
      <p className='pl-8 pr-8'>
        Si tienes preguntas sobre estos Términos y Condiciones, por favor contáctanos a través de nuestro <Link to="/aboutus#contact" className="font-bold text-purple-950 underline " target="_blank" rel="noopener noreferrer">correo electrónico</Link>.
      </p>
    </section>
  );
};

export default TermsAndConditions;
