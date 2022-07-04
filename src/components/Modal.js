import ReactModal from 'react-modal';

const Modal = ({ isOpen }) => {
  return (
    <ReactModal isOpen={isOpen}>
      <div>모달 입니다.</div>
    </ReactModal>
  );
};

export default Modal;
