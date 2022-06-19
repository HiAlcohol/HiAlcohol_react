// import React from 'react';
import './SearchListTemplate.css';
import {FaSearch} from 'react-icons/fa';

const SearchList = () => {
    return (
        <div className="SearchListTemplate">
            <div className='search'>
                <input type='text' placeholder="술 이름을 입력해주세요." />
                <button type='submit'><FaSearch />
                </button>
                
            </div>
        </div>
        
    );
};
export default SearchList;