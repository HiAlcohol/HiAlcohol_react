import '../scss/SearchTemplate.scss';
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchListItem from './SearchListItem';
import React, { useState } from "react";

const SearchList = () => {
    const params = new URLSearchParams(window.location.search);
    let key = params.get("keyword");
    console.log(key)
    let link = '/cocktails/search?keyword='+key
    console.log(link)

    return (
    <>
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
    </>
        
    );
};
export default SearchList;