import '../scss/SearchTemplate.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const SearchTemplate = () => {
    const params = new URLSearchParams(window.location.search);
    let key = params.get("keyword");
    let link = '/cocktails/search?keyword='+key

    return (
    <>
        <div className="SearchListTemplate">
            <div className='search'>
                <form method="get" action='/cocktails/search'>
                    <input type='text' name= 'keyword' placeholder="술 이름을 입력해주세요." />
                    <button type='submit' href={link}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>
                
            </div>
            <br></br>
        </div>
    </>
        
    );
};
export default SearchTemplate;