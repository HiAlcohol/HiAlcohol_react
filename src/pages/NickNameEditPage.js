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
	const [nick, setNick] = useState('');
	const [image, setImage] = useState({});
	const [imgBase64, setImageBase64] = useState({});
	const dummyUser = { profile: 'http://k.kakaocdn.net/dn/dotDrj/btrybGQioYJ/xyy5MXVs2ESIAodvdnZIw1/img_110x110.jpg',
						nickname: 'user'}
	useEffect(() => {
		const initUser = async () => {
			try {
				const response = await axios.get('http://hialcohol.p-e.kr/users',
				{headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				  }
				})
				setNick(response.data.data.nickname)
				setImage(response.data.data.profile_url)
				
			} catch(e) {
				setError(e);
			}
		}
		initUser();
	},[])

	const onChangeNickname = (e) => {
		setNick(e.target.value);
	}

	const onChangeImage = (e) => {
		// setImage(e.target.files[0])
		const img = e.target.files[0];
		const formData = new FormData();
		formData.append('profile_url', img)
		setImage(img)
		console.log('e.target.files', e.target.files)
		setImageBase64([])
		let reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onloadend = () => {
			const base64 = reader.result;
			console.log(base64);
			if (base64) {
				var base64Sub = base64.toString();
				setImageBase64(imgBase64 => [...imgBase64, base64Sub]);
			}
		}
	}

	const confirm = async (e) => {
		e.preventDefault();
		console.log(1)
		const formData = new FormData();
		formData.append('profile_url', image)
		console.log('formdata', formData)
		try {
			await axios.put('http://hialcohol.p-e.kr/users',
				{nickname: nick},
				{headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				}
				})
		} catch(e) {
			setError(e);
			console.log('닉네임 수정 오류')
		}
		try {
			const response2 = await axios.post('http://hialcohol.p-e.kr/users/image',
				formData,
				{headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
					"Content-Type": `multipart/form-data`,
				  }
				});
			setImage(response2.data.data.profile_url)
		}catch(e) {
			setError(e)
			console.log('프로필 사진 업로드 오류')
		}
	}
	if (error) return <p>{error}</p>
	return <>
		<Header right='common'></Header>
		<p className="nick_edit_header">회원정보 수정</p>
		<table className="input_box">
			<tr className="nickname_box">
				<th><p>닉네임</p></th>
				<td><input type="text" name="nickname" onChange={onChangeNickname} defaultValue={nick}/></td>
			</tr>
			<tr className="profile">
				<th><p>프로필 사진</p></th>
				<td>
					<input type='file' name="profile_url" accept='image/*' onChange={onChangeImage} />
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