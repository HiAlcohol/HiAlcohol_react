import ReactModal from 'react-modal';
import Recipe from './RecipeTemplate';

const ModalStyle = {
    overlay: {
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(255, 255, 255, 0.45)",
		zIndex: 10,
	},
	content: {
		display: "flex",
		justifyContent: "center",
		background: "#242424",
		overflow: "auto",
		top: "15vh",
		left: "15vw",
		right: "15vw",
		bottom: "15vh",
		WebkitOverflowScrolling: "touch",
		borderRadius: "20px",
		outline: "none",
		zIndex: 10,
	},
};

const Modal = ({ isOpen }) => {
    
  return (
    <ReactModal 
    isOpen={isOpen}
    style = {ModalStyle}
    >
      <Recipe />
    </ReactModal>
  );
};

export default Modal;
