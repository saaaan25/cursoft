import PropTypes from 'prop-types';
import {courses, details} from "../data/courses";
import { useParams } from 'react-router-dom';

const CourseContent = () => {
    const { name } = useParams();
    const index = courses.findIndex(element => element.name === name);

    return (
        <div className="min-h-screen bg-white py-10">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-5">
                {details[index].curso}
            </h1>
            <h4 className="text-md text-gray-500 text-center mb-8">
                Aprende cursos y desarrolla tus habilidades de programador
            </h4>
            <div className="ml-10 mr-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 justify-items-center">
                ola
            </div>
        </div>
    );
}

    // Definición de tipos de propiedades
CourseContent.propTypes = {
    curso: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    fontColor: PropTypes.string.isRequired
};
 
export default CourseContent;