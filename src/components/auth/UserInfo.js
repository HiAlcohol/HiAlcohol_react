import axios from "axios"
import { useEffect, useState } from "react"
import loginIcon from '../../img/loginIcon.png';

export default async function UserInfo() {
	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
	const [nickname, setNickname] = useState('로그인하기')
	const [profile, setProfile] = useState(loginIcon)
	const [role, setRole] = useState('guest')
	const token = localStorage.getItem('token')
	
	if (token) {
		const header = {'token': token}
		const response = await axios.get("http://hialcohol.p-e.kr/users", 
		{headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
			}
		});
		setNickname(response.data.data.nickname)
		setProfile(response.data.data.profile_url)
		setRole(response.data.data.role)
	}
	return {
		nickname: nickname,
		profile: profile,
		role: role
	}
}