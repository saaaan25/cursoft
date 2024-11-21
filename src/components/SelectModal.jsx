import { useNavigate } from 'react-router-dom';

const SelectModal = ({ onClose, url, id }) => {
    const navigate = useNavigate()

    const gotoOffline = () => {
        navigate(`${url}/offline/${id}`);
    };

    const gotoOnline = () => {
        navigate(`${url}/online/${id}`);
    };

    const gotoDocumentation = () => {
        navigate(`${url}/documentation/${id}`);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                <h2 className="text-xl font-bold text-center">Selecciona la modalidad del curso</h2>
                <div>
                    <button onClick={gotoOffline}>
                        Offline
                    </button>
                    <button onClick={gotoOnline}>
                        Online
                    </button>
                    <button onClick={gotoDocumentation}>
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
