import CourseCard from "../components/Coursecard";

const CoursesPage = () => {
    const courses = [
        {
            curso: "Python desde cero",
            imagen: "../images/python.jpg",
            color: "#a8aeef",
            fontColor: "#5860bb"
        },
        {
            curso: "JavaScript desde cero",
            imagen: "../images/javascript.png",
            color: "#f7e08c",
            fontColor: "#d4b855"
        },
        {
            curso: "CSS desde cero",
            imagen: "../images/css.jpg",
            color: "#6ea8ff",
            fontColor: "#29589f"
        },
        {
            curso: "HTML desde cero",
            imagen: "../images/html.jpg",
            color: "#f59fbd",
            fontColor: "#d12f5e"
        },
        {
            curso: "C++ desde cero",
            imagen: "../images/c++.png",
            color: "#90df6e",
            fontColor: "#58b232"
        }
    ];

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