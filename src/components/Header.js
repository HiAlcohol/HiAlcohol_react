import React from 'react';
import { Link } from 'react-router-dom';
import writeBtn from '../img/writeButton.png';
import '../scss/Header.scss';
import Menu from "./Menu"

const Header = (props) => {
	console.log(props)
	var header = ''
	var dummyUser = ''
	if (props.right === 'board') {
		header = <>
		<Menu></Menu>
		<div className='Header'>
			<Link to='/' className='logo'>Hi Alcohol</Link>
		</div>
		<div className="writeBtn">
            <Link to="/board/write"><img className="writeBtn" src={writeBtn}/></Link>
        </div>
	</>
	} else if (props.right === 'user') {
		dummyUser = { profile: 'http://k.kakaocdn.net/dn/dotDrj/btrybGQioYJ/xyy5MXVs2ESIAodvdnZIw1/img_110x110.jpg',
						nickname: 'user'}
		console.log(dummyUser)
		header = 
		<>
			<Menu></Menu>
			<div className='user'>
				<p className='nickname'>{dummyUser.nickname}</p>
				<img src={dummyUser.profile} width="25px" height="25px"/>
			</div>
		</>
	} else if (props.right === 'write') {
		header = <>
		<div className='exit'>
                    X
                </div>
                <div className='hi_alcohol'>
                	<Link to='/' className='logo'>Hi Alcohol</Link>
                </div>
                <div className='completion'>
                    완료                  
                </div>
		</>
	}
    return (
        <div className="header">            
            {header}
        </div>
    );
};

export default Header;