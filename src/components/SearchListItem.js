import '../scss/SearchListItem.scss';
import '../scss/RecipeTemplate.scss';
import React, { useState } from "react";
// import MyModal from './Modal'
import Modal from 'react-modal';

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

const SearchListItem = () => {
    
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
      };
      const handleClickCancle = () => {
        setOpen(false);
      }

    return (
        <div className="SearchListItem">
            <div className="list">
                <div className='recipe-title'>
                <a>내 마음대로 주</a>
             
                <button id='recipe' onClick={handleClick}>{'>'}</button>
                <Modal isOpen={isOpen} 
                            style={ModalStyle}
                            onRequestClose={handleClickCancle}
                >
                    <div className='RecipeTemplate'>
                        <button onClick={handleClickCancle}>X</button>
                        <div class="name">마가리타</div>
                        <br /><br />
                        <div className="material">
                                <div>체리</div>
                                <div>맥콜</div>
                                <div>사이다</div>
                            </div>
                        <br /><br /><br />
                        <p>- 비율 -</p>
                        <h2>1 : 1 : 1</h2>
                        <br /><br />
                        <p>설명</p>

                    </div>
                </Modal>
                </div>
                <br /><br />
                <div className="input">
                    <div>체리</div>
                    <div>맥콜</div>
                    <div>사이다</div>
                    <div>소주</div>
                    <div>깔라만씨 토닉워터</div>
                    <div>토닉워터</div>
                    <div>토닉워터</div>
                </div>
            </div>
         </div>
    );
};

export default SearchListItem;