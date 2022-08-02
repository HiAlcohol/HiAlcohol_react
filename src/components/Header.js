import React, { useEffect, useState } from 'react';
import '../scss/Header.scss'
import { Link } from 'react-router-dom';
// import { Cookies } from 'react-cookie';
import writeBtn from '../img/writeButton.png';
import loginIcon from '../img/loginIcon.png';
import '../scss/Header.scss';
import Menu from "./Menu"
import axios from 'axios';

const User = () => {
	const token = localStorage.getItem('token');
	const [nickname, setNickname] = useState('로그인하기')
	const [profile, setProfile] = useState(loginIcon)
	const [error, setError] = useState(null);
	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
	useEffect( () => {
		const fetchUserInfo = async () => {
			try {
				if (token) {
					const headers = {'token': token}
					console.log('headers:', headers)
					const response = await axios.get("http://3.35.208.41:5000/users", {headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					  }
					});
					setNickname(response.data.data.nickname)
					setProfile(response.data.data.profile_url)
				}
			} catch(e) {
				setError(e);
			}
		}
		fetchUserInfo();
	}, []);

	if (error) return <div>{error}</div>
	if (nickname === '로그인하기') {
		return <a href={KAKAO_AUTH_URL}>
			<div className='user'>
				<p className='nickname'>{nickname}</p>
				<img src={profile} width="25px" height="25px"/>
			</div>
		</a>
	}
	return <div className='user'>
			<p className='nickname'>{nickname}</p>
			<img src={profile} width="25px" height="25px"/>
		</div>
}

const Header = (props) => {
	console.log(props)
	var header = ''
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
		// console.log(dummyUser)
		header = 
		<>
			<User />
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
	} else if (props.right === 'common') {
		header = <>
		{/* <Menu></Menu> */}
		<div className='Header'>
			<Link to='/' className='logo'>Hi Alcohol</Link>
		</div>
		<User />
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