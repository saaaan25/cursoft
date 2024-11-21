import { useNavigate } from 'react-router-dom';

const SelectModal = ({ onClose, id }) => {
    const navigate = useNavigate()

    const gotoOffline = () => {
        navigate(`offline/${id}`);
    };

    const gotoOnline = () => {
        navigate(`online/${id}`);
    };

    const gotoDocumentation = () => {
        navigate(`documentation/${id}`);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-150 p-6">
                <h2 className="text-xl font-bold text-center">Selecciona la modalidad del curso</h2>
                <div className='flex gap-x-3 mt-6'>
                    <button onClick={gotoOffline} className="flex flex-col pt-2 pb-3 px-9 bg-blue-700 text-white items-center justify-center 
                rounded-md hover:bg-blue-800">
                        Offline
                    </button>
                    <button onClick={gotoOnline} className="flex flex-col pt-2 pb-3 px-9 bg-blue-700 text-white items-center justify-center 
                rounded-md hover:bg-blue-800">
                        Online
                    </button>
                    <button onClick={gotoDocumentation} className="flex flex-col pt-2 pb-3 px-9 bg-blue-700 text-white items-center justify-center 
                rounded-md hover:bg-blue-800">
                        Documentation
                    </button>
                </div>
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={onClose}
                        className="px-4 py-1 text-red-700 border border-red-700 rounded hover:text-white hover:bg-red-700"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelectModal;
