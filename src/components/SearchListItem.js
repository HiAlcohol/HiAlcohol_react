import '../scss/SearchListItem.scss';
import '../scss/RecipeTemplate.scss';
import React, { useState } from "react";
import Modal from 'react-modal';
import { click } from '@testing-library/user-event/dist/click';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect } from "react";

function RecipeModal(props) {
    const recipe = props.recipe;
    const inputItem = props.inputItem;
    const  i = props.id;

    return(
        <>
        <div class="name">{recipe[i].cocktail}</div>
        <br />
        <img src = {recipe[i].img} className="recipe-img" />
        <br /><br />
        <div className="material">
                {inputItem}
        </div>
        <br /><br /><br />
        <p>- 비율 -</p>
        <h2>{recipe[i].rate}</h2>
        <br /><br />
        <p>{recipe[i].content}</p>
        </>
    )
}

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
    const [recipes , setRecipes] = useState(null);
	const [error, setError] = useState(null);
    const [isOpen, setOpen] = useState(false);
    let keyword = props.keyword

	useEffect(() => {
		const fetchBoard = async () => {
			try {
				const response = await axios.get('http://3.35.208.41:5000/cocktails/search?keyword='+keyword);
				setRecipes(response.data.data);
			} catch(e) {
				setError(e);
			}
		};
		fetchBoard()
	}, []);
	if (error) return <div>에러가 발생했습니다. {error}</div>
	if (!recipes) return <div>데이터가 없습니다.</div>

    const handleClick = () => {
        setOpen(true);
      };
      const handleClickCancle = () => {
        setOpen(false);
      }

    const recipe = recipes;
    const searchItem = []

    for (let i = 0; i<recipe.length;i++) {
        const materials = recipe[i].materials
        const inputItem = []
        for (let j = 0; j<materials.length; j++){
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

                        <RecipeModal recipe = {recipe} inputItem = {inputItem} />

                    </div>
                </Modal>
            </>
        } else if (props.type === 'modify') {
            click = <>
                <div className='modiRecipe'>
                    <Link to='/admin/cocktail/addrecipe'><button>수정</button></Link>
                </div>
            </>
            
        }
 
        searchItem.push(
            <>
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
            <br />
            </>
        )
    }
    return <div className='searchlist'>{searchItem}</div>
}
export default SearchListItem;