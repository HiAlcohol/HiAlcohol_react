import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';
import Modal from 'react-modal';
import Search from './SearchTemplate';
import '../scss/HomeTemplate.scss';
import cocktail from '../img/cocktail.png';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMartiniGlass, faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";

function HomeTemplate(props) {
	const params = new URLSearchParams(window.location.search);
    let key = params.get("keyword");

	const recipe = props.recipe;
	// const materials = recipe.materials;
	// const inputItem = []
    //     for (let j = 0; j<3; j++){
    //         inputItem.push(
    //             <div className='in'>{materials[j]}</div>
    //         )
    //     }
	// const [isOpen, setOpen] = useState(false);

    // const handleClick = () => {
    //     setOpen(true);
    //   };
    //   const handleClickCancle = () => {
    //     setOpen(false);
    //   }

	//   const ModalStyle = {
	// 	overlay: {
	// 		position: "fixed",
	// 		top: 0,
	// 		left: 0,
	// 		right: 0,
	// 		bottom: 0,
	// 		backgroundColor: "rgba(255, 255, 255, 0.45)",
	// 		zIndex: 10,
	// 	},
	// 	content: {
	// 		display: "flex",
	// 		justifyContent: "center",
	// 		background: "#242424",
	// 		overflow: "auto",
	// 		top: "15vh",
	// 		left: "15vw",
	// 		right: "15vw",
	// 		bottom: "15vh",
	// 		WebkitOverflowScrolling: "touch",
	// 		borderRadius: "20px",
	// 		outline: "none",
	// 		zIndex: 10,
	// 	},
	// };

    return (

		<>
			<Header right="user"></Header>

        	<div className='HomeTemplate'>
            	<div className='title'>
					Hi Alcohol <FontAwesomeIcon icon={faMartiniGlassCitrus} />
				</div>
				
            	<Search keyword={key} type='search'/>

     

				<div className='recommend'>
					<p>오늘의 술 추천</p>
					
					<a >{recipe.cocktail} {'>'}</a>
					{/* <Modal isOpen={isOpen} 
                    style={ModalStyle}
                    onRequestClose={handleClickCancle}
                >   
                    <div className='RecipeTemplate'>
                        <button id='recipe-close' onClick={handleClickCancle}>X</button>
                        <br /><br /><br />
						<div class="name">{recipe.cocktail}</div>
						<br />
						<img src = {recipe.image} className="recipe-img" />
						<br /><br />
						<div className="material">
								{inputItem}
						</div>
						<br /><br /><br />
						<p>- 비율 -</p>
						<h2>{recipe.rate}</h2>
						<br /><br />
						<p>{recipe.content}</p>
					</div>
                </Modal> */}
					
                 
					<br></br>
					<img src = {cocktail} className='cockimg' />

				</div>

				<div className='mbti-test'>
					<p>당신에게 어울리는 술 테스트</p>
					<a href='/mbti/test' className='mbti-test'><div className='go-mbti'>테스트 시작</div></a>
				</div>
			</div>
		</>
    );
};

export default HomeTemplate;