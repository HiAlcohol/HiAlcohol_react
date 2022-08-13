import SearchListItem from "../../components/SearchListItem";
import Header from "../../components/Header";
import "../../scss/Recipe.scss"
import { Link } from "react-router-dom";
import cocktail from '../../img/cocktail.png'
import SearchListTemplate from "../../components/SearchTemplate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function AdminCocktail () {
    const params = new URLSearchParams(window.location.search);
    let key = params.get("keyword");
   
    let link = '/admin/cocktail?keyword='+key
    return <div>
            <Header right='common'></Header>
			<div className="SearchListTemplate">
            <div className='search'>
                <form method="get" >
                    <input type='text' name= 'keyword' placeholder="술 이름을 입력해주세요." />
                    <button type='submit'>
                        <Link to = {link}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                    </button>
                </form>
                
            </div>
            <br></br>
        </div>
            <div className="add">
            <Link to='/admin/cocktail/addrecipe'><button className="addRecipe">+레시피 추가</button></Link>
           </div>
            
            <SearchListItem keyword={key} type='modify'></SearchListItem>
        </div>
        
    
}

export default AdminCocktail;