import '../scss/SearchTemplate.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const SearchTemplate = () => {
    const params = new URLSearchParams(window.location.search);
    let key = params.get("keyword");

    return (
    <>
        <div className="SearchListTemplate">
            <div className='search'>
                <form method="get" action='/cocktails/search'>
                    <input type='text' name= 'keyword' placeholder="술 이름을 입력해주세요." />
                    <button type='submit'>
                        <Link to = {'/cocktails/search?keyword='+key}>
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
export default SearchTemplate;