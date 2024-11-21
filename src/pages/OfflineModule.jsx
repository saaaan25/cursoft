import { useParams } from "react-router-dom";
import { modules } from "../data/modules";
import { content } from "../data/content";

const OfflineModule = () => {
    const { id } = useParams();
    const validation = id;
    const index = modules.findIndex(element => element.id == validation);
    const act_content = content.find(element => element.idModule == validation)
    console.log(act_content);
    

    return (
        <div className="min-h-screen bg-white py-10">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-5">
                {modules[index].title}
            </h1>
            <h4 className="text-md text-gray-500 text-center mb-8 px-5">
                {modules[index].resume}
            </h4>
            <div className="ml-10 mr-10 flex justify-center items-center mb-10">
                <iframe
                    width="800"
                    height="450"
                    src={act_content.content}
                    title="Video Embed"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="w-full flex items-center justify-center">
                <button className="flex flex-col pt-2 pb-3 px-9 bg-blue-700 text-white items-center justify-center 
                rounded-md hover:bg-blue-800">
                    Realizar Quiz
                </button>
            </div>
        </div>
    );
}
 
export default OfflineModule;