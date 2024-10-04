const Box = () => {
    return (
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg 
                rounded-lg p-6 grid grid-cols-5 justify-between items-center w-3/4">
            <div className="flex flex-col items-center">
                <p className="text-sm font-semibold">5 módulos</p>
                <p className="text-xs text-gray-500">Obtenga información sobre un tema y aprenda los fundamentos</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-sm font-semibold">4.6 ⭐</p>
                <p className="text-xs text-gray-500">(37,177 reseñas)</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-sm font-semibold">Nivel Principiante</p>
                <p className="text-xs text-gray-500">Experiencia recomendada</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-sm font-semibold">Cronograma flexible</p>
                <p className="text-xs text-gray-500">Aprox. 25 horas</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-sm font-semibold">94% 👍</p>
                <p className="text-xs text-gray-500">A la mayoría de los alumnos les gustó este curso</p>
            </div>
        </div>
    );
}
 
export default Box;