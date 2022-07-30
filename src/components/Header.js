import React from 'react';
import '../scss/Header.scss'
import { Link } from 'react-router-dom';
import writeBtn from '../img/writeButton.png';
import '../scss/Header.scss';
import Menu from "./Menu"

const Header = (props) => {
	console.log(props)
	var header = ''
	var dummyUser = { profile: 'http://k.kakaocdn.net/dn/dotDrj/btrybGQioYJ/xyy5MXVs2ESIAodvdnZIw1/img_110x110.jpg',
						nickname: 'user'}
	if (props.right === 'board') {
		header = <>
		{/* <Menu></Menu> */}
		<div className='Header'>
			<Link to='/' className='logo'>Hi Alcohol</Link>
		</div>
		<div className="writeBtn">
            <Link to="/board/write"><img className="writeBtn" src={writeBtn}/></Link>
        </div>
	</>
	} else if (props.right === 'suggestion') {
		header = <>
		{/* <Menu></Menu> */}
		<div className='Header'>
			<Link to='/' className='logo'>Hi Alcohol</Link>
		</div>
		<div className="writeBtn">
            <Link to="/suggestion"><img className="writeBtn" src={writeBtn}/></Link>
        </div>
	</>
	} else if (props.right === 'user') {
		console.log(dummyUser)
		header = 
		<>
			{/* <Menu></Menu> */}
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
                    <input id="completeBtn" type="submit" value="완료"></input>
                </div>
		</>
	} else if (props.right === 'common') {
		header = <>
		{/* <Menu></Menu> */}
		<div className='Header'>
			<Link to='/' className='logo'>Hi Alcohol</Link>
		</div>
		<div className='user'>
				<p className='nickname'>{dummyUser.nickname}</p>
				<img src={dummyUser.profile} width="25px" height="25px"/>
			</div>
	</>
	} else {
		header = <>
		<div className='Header'>
			<Link to='/' className='logo'>Hi Alcohol</Link>
		</div>
		<div></div>
		</>
	}
    return (
		<>
			<div className="header">
				<Menu></Menu>
				{header}
			</div>
		</>
    );
};

export default Header;