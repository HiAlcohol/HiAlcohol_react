import '../scss/SearchListItem.scss';
import React, { useState } from "react";
import MyModal from './Modal'

const SearchListItem = () => {
    
    const [isOpen, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
      };

    return (
        <div className="SearchListItem">
            <div className="list">
                <div className='recipe-title'>
                <a>내 마음대로 주</a>
             
                <button id='recipe' onClick={handleClick}>{'>'}</button>
                <MyModal isOpen={isOpen} />
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