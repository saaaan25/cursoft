import { courses } from "../data/courses";
import { modules } from "../data/modules";
import { reviews } from "../data/reviews";
import { scores } from "../data/scores";
import { useParams } from 'react-router-dom';
import JoinButton from '../components/JoinButton';
import { HiCode } from 'react-icons/hi';
import AccordionTemplate from "../components/Accordion";
import Box from "../components/Box";
import SelectModal from "../components/SelectModal";
import { useState } from "react";

const CourseContent = () => {
    const { url } = useParams();
    const index = courses.findIndex(element => element.url === url);
    
    const validation = courses[index].id
    const modules_actcourse = modules.filter(element => element.idCourse === validation).map(element => element.title);
    const descmodules_actcourse = modules.filter(element => element.idCourse === validation).map(element => element.resume);
    const review_courses = reviews.filter(element => element.idCourse === validation).map(element => element.review);
    const course_review = review_courses.reduce((acc, curr) => acc + curr, 0) / review_courses.length;
    const students = scores.filter(element => element.idCourse === validation);

    const idModule = modules.find(element => element.idCourse === validation).id;

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className="min-h-screen bg-white">
            <div className="bg-blue-100/50 px-40 py-28 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6 justify-start items-center">
                <div>
                    <div>
                        <div className="mb-4">
                            
                        </div>
                    </div>
                    <h1 className="flex items-center text-3xl font-bold text-gray-800 gap-2 mb-5">
                        <HiCode></HiCode> {courses[index].title}
                    </h1>
                    <h5 className='text-sm'>
                        Este curso es parte de múltiples programas. <a className='text-blue-950 hover:text-blue-800 hover:cursor-pointer font-bold hover:underline'> Obtener más información </a>
                    </h5>
                    <div className='my-5'>
                        <JoinButton onClick={openModal}/>
                    </div>
                    <h5 className='text-sm'>
                        <a className='font-bold'> {students.length} </a> inscritos
                    </h5>
                    
                </div>
                <div className="flex justify-end">
                    <img
                        className="h-[300px] opacity-35"
                        src={courses[index].bg_url}
                        alt=""
                        />
                </div>
            </div>
                <Box module={modules_actcourse.length} review={course_review} level={courses[index].level} duration={courses[index].duration} />
            <div className='px-40 py-28 flex flex-col gap-6 justify-start text-sm w-[75%]'>
                <div className="flex flex-col gap-3">
                    <h3 className='font-bold text-sm'>¿Qué aprenderás?</h3>
                    <p className="text-xs w-[90%]">
                        {courses[index].learn}    
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className='font-bold text-sm'>Módulos</h3>
                    <p className="text-xs w-[90%]">
                        {courses[index].description}  
                    </p>
                </div>
                <div>
                    <AccordionTemplate list1={modules_actcourse} list2={descmodules_actcourse}/>
                </div>
            </div>
            {isOpen && <SelectModal onClose={closeModal} url={url} id={idModule}/>}
        </div>
    );
}
 
export default CourseContent;