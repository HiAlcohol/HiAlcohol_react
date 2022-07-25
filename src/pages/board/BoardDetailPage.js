import '../../scss/board/BoardItem.scss'
import '../../scss/board/BoardListItem.scss'
import heart from '../../img/heart_fill.png'
import Header from '../../components/Header'
import Comment from '../../components/Comment'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function BoardDetailPage() {
	// const dummy = {
	// 	id: 1,
	// 	title: '알쓰를 위한 편의점 칵테일',
	// 	content: '칵테일 본문 미나얼미ㅏㄴ어림나어림낭ㄹㅁ리나어리만ㅇ',
	// 	nickname: '유저',
	// 	createdate: '2022.03.14',
	// 	count: 8
	// }
	const [board, setBoard] = useState(null);
	const [error, setError] = useState(null);
	const params = useParams();
	console.log('props', params)
	useEffect(() => {
		const fetchBoard = async () => {
			try {
				const response = await axios.get('http://3.35.208.41:5000/boards/' + params.id);
				setBoard(response.data.data);
				console.log(response.data.data)
			} catch(e) {
				setError(e);
			}
		};
		fetchBoard()
	}, []);
	if (error) return <div>에러가 발생했습니다. {error}</div>
	if (!board) return <div>데이터가 없습니다.</div>
	return <div>
		<Header right='board'></Header>
		<div className="board">
			<div className="heading">
				<div className='boardTitle'>
					<p>{board.title}</p>
					<div className="info">
						<span>{board.nickname}</span>
						<span> | </span>
						<span>{board.createdate}</span>
					</div>
				</div>
				<div className="like">
					<a href="#"><button id="img_btn" className="likebtn">
						<input type="image" id="likeImg" src={heart} />
					</button></a>
					<div id="likes" disabled="disabled">{board.count}</div>
				</div>
			</div>
			<pre className='boardContent'>
				{board.content}
			</pre>
			<div className='select'>
				<div></div>
				<div>수정</div>
				<div>|</div>
				<div className='del'>삭제</div>
				<div></div>
			</div>
		</div>
		<Comment/>
	</div>
}
export default BoardDetailPage;