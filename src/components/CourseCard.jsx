// import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ curso, name, imagen, color, fontColor }) => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/courses/${name}`);  // Redirigir basado en el nombre del curso
    };

    return (
        <div
            className="rounded-lg p-6 shadow-lg flex flex-col justify-between"
            style={{ backgroundColor: color, width: '300px', height: '280px',  color: fontColor}}
            >
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">{curso}</h3>
                <button className="bg-white/20 hover:bg-white/30 text-gray-600 px-3 py-1 rounded"
                        onClick={handleNavigate}>
                    Más
                </button>
            </div>
            <div className="overflow-hidden rounded-lg h-3/4">
                <img
                src={imagen}
                alt={`${curso} Screenshot`}
                className="w-full h-full object-cover rounded-lg"
                />
            </div>
        </div>
    );
};

    // Definición de tipos de propiedades
CourseCard.propTypes = {
    curso: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    fontColor: PropTypes.string.isRequired
};

export default CourseCard;
