import Header from "../components/Header";
import '../scss/NicknameEdit.scss'
function NicknameEdit() {
	const dummyUser = { profile: 'http://k.kakaocdn.net/dn/dotDrj/btrybGQioYJ/xyy5MXVs2ESIAodvdnZIw1/img_110x110.jpg',
						nickname: 'user'}
	return <>
		<Header right='common'></Header>
		<p className="nick_edit_header">회원정보 수정</p>
		<table className="input_box">
			<tr className="nickname_box">
				<th><p>nickname</p></th>
				<td><input type="text" value={dummyUser.nickname}/></td>
			</tr>
			<tr className="profile">
				<th><p>profile</p></th>
				<td><input type='file' accept='image/*'/></td>
			</tr>
		</table>
	</>
}

export default NicknameEdit;