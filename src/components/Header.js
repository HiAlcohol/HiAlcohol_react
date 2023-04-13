import React, { useEffect, useState } from 'react';
import '../scss/Header.scss'
import { Link } from 'react-router-dom';
import writeBtn from '../img/writeButton.png';
import loginIcon from '../img/loginIcon.png';
import '../scss/Header.scss';
import Menu from "./Menu"
import Api from '../Api.js';

const User = (props) => {
	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.SERVER_BASE_URL}${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
	const nickname = props.nickname
	const profile = props.profile
	var user = <div className='user'>
					<p className='nickname'>{nickname}</p>
					<img src={profile} width="25px" height="25px"/>
				</div>

	if (nickname === '로그인하기') {
		user = <a href={KAKAO_AUTH_URL}>
			<div className='user'>
				<p className='nickname'>{nickname}</p>
				<img src={profile} width="25px" height="25px"/>
			</div>
		</a>
	}
	return user
}

const Header = (props) => {
	const token = localStorage.getItem('token');
	const [nickname, setNickname] = useState('로그인하기')
	const [profile, setProfile] = useState(loginIcon)
	const [role, setRole] = useState('guest')
	const [error, setError] = useState(null)
	console.log('header')
	useEffect( () => {
		const fetchUserInfo = async () => {
			try {
				if (token) {
					const response = await Api.get("/users", 
					{headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					  }
					});
					setNickname(response.data.data.nickname)
					setProfile(response.data.data.profile_url)
					setRole(response.data.data.role)
				}
			} catch(e) {
				setError(e);
			}
		}
		fetchUserInfo();
	}, []);

	// const boardWrite = (e, board, link) => {
	// 	e.preventDefault();
	// 	const sendData = async () => {
	// 		try {
	// 			const response = await Api.post("/boards", 
	// 				board,
	// 				{headers: {
	// 					Authorization: `Bearer ${localStorage.getItem("token")}`,
	// 				  }
	// 				}
	// 				)
	// 			console.log('res', response)
	// 			window.location.href = link
	// 		} catch (e) {
	// 			setError(e);
	// 		}
	// 	}
	// 	sendData();
	// }
	if (error) return <div>{error}</div>
	var header = ''
	if (props.right === 'board') {
		header = <>
		<div className='Header'>
			<Link to='/' className='logo'>Hi Alcohol</Link>
		</div>
		<div className="writeBtn">
            <Link to="/board/write"><img className="writeBtn" src={writeBtn}/></Link>
        </div>
	</>
	} else if (props.right === 'suggestion') {
		header = <>
		<div className='Header'>
			<Link to='/' className='logo'>Hi Alcohol</Link>
		</div>
		<div className="writeBtn">
            <Link to="/suggestion"><img className="writeBtn" src={writeBtn}/></Link>
        </div>
	</>
	} else if (props.right === 'user') {
		header = 
		<>
			<User nickname={nickname} profile={profile} />
		</>
	} else if (props.right === 'write' || props.right === 'edit') {
		
		let submit = null
		if (props.right === 'write') {
			submit = <input id="completeBtn" type="submit" value="완료" onClick={(e) => props.clickEvent(e, props.board, "/boards", props.images)}></input>
		} else {
			submit = <input id="completeBtn" type="submit" value="완료" onClick={(e) => props.clickEvent(e, props.board, props.images)}/>
		}
		header = <div className="header">
				<div className='exit'>
				<Link to = '/boards'>X</Link>
                </div>
                <div className='Header'>
                	<Link to='/' className='logo'>Hi Alcohol</Link>
                </div>
                <div className='completion'>
					{submit}
                </div>
		</div>
		return header;
	} else if (props.right === 'suggeswrite') {

		header = <div className="header">
				<div className='exit' >
					<Link to = '/suggestions'>X</Link>
                </div>
                <div className='Header'>
                	<Link to='/' className='logo'>Hi Alcohol</Link>
                </div>
				
                <div className='completion'>
				<input id="completeBtn" type="submit" value="완료" />
                </div>
		</div>
		return header;
	} else if (props.right === 'common') {
		header = <>
		<div className='Header'>
			<Link to='/' className='logo'>Hi Alcohol</Link>
		</div>
		<User nickname={nickname} profile={profile} />
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
				<Menu role={role}></Menu>
				{header}
			</div>
		</>
    );
};

export default Header;