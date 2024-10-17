import PropTypes from 'prop-types';

const JoinButton = ({ onClick }) => {
    return (
        <button className="flex flex-col pt-2 pb-3 px-9 bg-blue-700 text-white items-center justify-center 
                rounded-md hover:bg-blue-800"
                onClick={onClick}>
            <p className="text-sm font-bold">Inscríbete gratis</p>
            <p className="text-xs">Comienza el 1 de oct.</p>
        </button>
    );
}

JoinButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};
 
export default JoinButton;