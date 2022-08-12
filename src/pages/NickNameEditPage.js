import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import '../scss/NicknameEdit.scss'

const Btn = styled.div`
		margin: 10px;
	`
const Canceled = styled.button`
	width: 150px;
	background: #bdbdbd;
	margin: 10px;
	border: none;
	border-radius: 10px;
	color: white;
	padding: 10px;
`
const Confirm = styled.button`
	width: 150px;
	background: #0bf3bc;
	color:white;
	margin: 10px;
	padding: 10px;
	border: none;
	border-radius: 10px;
	
`
function NicknameEdit() {
	const [error, setError] = useState(null);
	const [user, setUser] = useState({})
	const dummyUser = { profile: 'http://k.kakaocdn.net/dn/dotDrj/btrybGQioYJ/xyy5MXVs2ESIAodvdnZIw1/img_110x110.jpg',
						nickname: 'user'}
	useEffect(() => {
		const initUser = async () => {
			try {
				const response = await axios.get('http://43.200.182.67:5000/users',
				{headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				  }
				})
				setUser({
					nickname: response.data.data.nickname,
					profile_url: response.data.data.profile_url
				})
				console.log('profile_url', response.data.data.profile_url)
			} catch(e) {
				setError(e);
			}
		}
		initUser();
	},[])

	const onChangeUser = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}

	const confirm = async (e) => {
		e.preventDefault();
		console.log(1)
		try {
			const response = await axios.put('http://43.200.182.67:5000/users',
				{nickname: user.nickname},
				{headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				}
				})
			setUser({
				...user,
				nickname: response.data.data.nickname
			})
			console.log('res1:',user)
			const response2 = await axios.put('http://43.200.182.67:5000/users/image',
				{profile_url: user.profile_url},
				{headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				  }
				});
			setUser({
				...user,
				profile_url: response2.data.data.profile_url
			})
		}catch(e) {
			setError(e)
		}
	}
	
	return <>
		<Header right='common'></Header>
		<p className="nick_edit_header">회원정보 수정</p>
		<table className="input_box">
			<tr className="nickname_box">
				<th><p>닉네임</p></th>
				<td><input type="text" name="nickname" onChange={onChangeUser} defaultValue={user.nickname}/></td>
			</tr>
			<tr className="profile">
				<th><p>프로필 사진</p></th>
				<td>
					<input type='file' name="profile_url" accept='image/*' onChange={onChangeUser} defaultValue={user.profile}/>
				</td>
			</tr>
		</table>
		<br/>
		<Btn>
			<Canceled type="button" onClick={() => {window.location.href="/"}}>취소</Canceled>
			<Confirm type="button" onClick={(e) => {confirm(e)}}>확인</Confirm>
		</Btn>
	</>
}

export default NicknameEdit;