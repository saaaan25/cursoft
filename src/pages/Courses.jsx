import CourseCard from "../components/Coursecard";
import {courses} from "../data/courses";

const CoursesPage = () => {
    console.log(courses)

    return (
        <div className="min-h-screen bg-white py-10">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-5">
                Cursos disponibles
            </h1>
            <h4 className="text-md text-gray-500 text-center mb-8">
                Aprende cursos y desarrolla tus habilidades de programador
            </h4>
            <div className="ml-10 mr-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 justify-items-center">
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        curso={course.curso}
                        name={course.name}
                        imagen={course.imagen}
                        color={course.color}
                        fontColor={course.fontColor}
                        
                    />
                ))}
            </div>
        </div>
    );
}
 
export default CoursesPage;