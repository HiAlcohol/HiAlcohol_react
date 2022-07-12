import React from 'react';
import { Link } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';
import Search from './SearchTemplate';
import '../scss/HomeTemplate.scss';
import cocktail from '../img/cocktail.png';
import Header from './Header';

const HomeTemplate = () => {
    return (

		<>
			<Header right="user"></Header>
			

        <div className='HomeTemplate'>
            <div className='title'>Hi Alcohol</div>
            <Search />

     

				<div className='recommend'>
					<p>오늘의 술 추천</p>
					
					<a>마가리타 {'>'}</a>
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