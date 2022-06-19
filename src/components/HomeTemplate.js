import React from 'react';
import { Link } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';
import './HomeTemplate.css';
import cocktail from '../img/cocktail.png';

const HomeTemplate = () => {
    return (
        <div className='HomeTemplate'>
            <div className='title'>Hi Alcohol</div>

            <div className='homebar-search'>
                <input type='text' placeholder="예시 : 보드카" />
                <button type='submit'><Link to='/searchlist'><FaSearch /></Link>
                    
                </button>
                
            </div>

            <div className='recommend'>
                <p>오늘의 술 추천</p>
                
                <a>마가리타</a>
                <br></br>
                <img src = {cocktail} className='cockimg' />

            </div>

            <div className='mbti-test'>
                <p>당신에게 어울리는 술 테스트</p>
                <div className='go-mbti'>테스트 시작</div>
            </div>
            
            
        </div>
    );
};

export default HomeTemplate;