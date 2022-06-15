import React from 'react';
import { Link } from 'react-router-dom';
import './HomeTemplate.css';
import cocktail from '../img/cocktail.png';

const HomeTemplate = () => {
    return (
        <div className='HomeTemplate'>
            <div className='app-title'>Hi Alcohol</div>

            <div className='homebar-recommend'>
                <p>오늘의 술 추천</p>
                
                <a>마가리타</a>
                <br></br>
                <img src = {cocktail} className='cockimg' />

            </div>
            
            
        </div>
    );
};

export default HomeTemplate;