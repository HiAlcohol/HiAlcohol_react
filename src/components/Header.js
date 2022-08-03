import React, { useEffect, useState } from 'react';
import '../scss/Header.scss'
import { Link } from 'react-router-dom';
import writeBtn from '../img/writeButton.png';
import loginIcon from '../img/loginIcon.png';
import '../scss/Header.scss';
import Menu from "./Menu"
import axios from 'axios';
import UserInfo from './auth/UserInfo';

const User = (props) => {
	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
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
	
	useEffect( () => {
		const fetchUserInfo = async () => {
			try {
				if (token) {
					// const response = await UserInfo()
					// setNickname(response.nickname)
					// setProfile(response.profile)
					// setRole(response.role)

					const response = await axios.get("http://3.35.208.41:5000/users", {headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					  }
					});
					setNickname(response.data.data.nickname)
					setProfile(response.data.data.profile_url)
					setRole(response.data.data.role)
				}
			} catch(e) {
				console.log(e)
			}
		}
		fetchUserInfo();
	}, []);
	
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
			<User nickname={nickname} profile={profile} />
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