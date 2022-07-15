import '../scss/SearchListItem.scss';
import '../scss/RecipeTemplate.scss';
import React, { useState } from "react";
import Modal from 'react-modal';
import cocktail from '../img/cocktail.png';
import { click } from '@testing-library/user-event/dist/click';
import { Link } from 'react-router-dom';

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

function SearchListItem(props) {

    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
      };
      const handleClickCancle = () => {
        setOpen(false);
      }

    const recipe = props.recipe;
    const searchItem = []

    const Click = ''


    for (let i = 0; i<recipe.length;i++) {
        const materials = recipe[i].materials
        const inputItem = []
        for (let j = 0; j<3; j++){
            inputItem.push(
                <div className='in'>{materials[j]}</div>
            )
        }
        if (props.type === 'search') {
            click = <>
                 <button id='recipe' onClick={handleClick}>{'>'}</button>
                 <Modal isOpen={isOpen} 
                    style={ModalStyle}
                    onRequestClose={handleClickCancle}
                >   
                    <div className='RecipeTemplate'>
                        <button id='recipe-close' onClick={handleClickCancle}>X</button>
                        <br /><br /><br />
                        <div class="name">{recipe[i].cocktail}</div>
                        <br />
                        <img src={recipe[i].img.cocktail} className="recipe-img" />
                        <br /><br />
                        <div className="material">
                                {inputItem}
                            </div>
                        <br /><br /><br />
                        <p>- 비율 -</p>
                        <h2>{recipe[i].rate}</h2>
                        <br /><br />
                        <p>{recipe[i].content}</p>

                    </div>
                </Modal>
            </>
        } else if (props.type === 'modify') {
            click = <>
                <div className='modiRecipe'>
                    <Link to='hi'><button>수정</button></Link>
                </div>
            </>
            
        }
 
        searchItem.push(
            <div className='list'>
                 <img src = {recipe[i].img} className="list-img" />
                
                <div className='recipe-title'>
                <a>{recipe[i].cocktail}</a>

                {click}
                </div>
                <br /><br />
               
                <div className="input">
                    {inputItem}
                </div>
            </div>
        )
    }
    return <div className='searchlist'>{searchItem}</div>
}
export default SearchListItem;