import { courses } from "../data/courses";
import { modules } from "../data/modules";
import { useParams } from 'react-router-dom';
import JoinButton from '../components/JoinButton';
import { HiCode } from 'react-icons/hi';
import AccordionTemplate from "../components/Accordion";
import Box from "../components/Box";

const CourseContent = () => {
    const { name } = useParams();
    const index = courses.findIndex(element => element.url === name);
    
    const validation = courses[index].id

    const modules_actcourse = modules.filter(element => element.idCourse === validation).map(element => element.title);
    
    const descmodules_actcourse = modules.filter(element => element.idCourse === validation).map(element => element.resume);

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
                        <JoinButton onClick={() => {}}/>
                    </div>
                    <h5 className='text-sm'>
                        <a className='font-bold'> 10000 </a> ya inscritos
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
                <Box content={courses[index]}/>
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
        </div>
    );
}
 
export default CourseContent;