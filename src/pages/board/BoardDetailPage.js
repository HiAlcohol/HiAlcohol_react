import '../../scss/board/BoardItem.scss'
import '../../scss/board/BoardListItem.scss'
import heart from '../../img/heart_fill.png'
import Header from '../../components/Header'
import Comment from '../../components/Comment'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import LikedBtn from '../../components/board/LikedBtn'
import styled from 'styled-components'

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

	useEffect(() => {
		const fetchBoard = async () => {
			try {
				const response = await axios.get('http://hialcohol.p-e.kr/boards/' + params.id,
				{headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				  }
				});
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
	
	const ReportHandler = (i) => {
        axios.post('http://hialcohol.p-e.kr/reports/board/'+params.id, null,
		{headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		  }
		})
        .then((res) => console.log(res));
    }
	console.log(board)

	const deleteHandler = async () => {
		try {
			const response = await axios.delete('http://hialcohol.p-e.kr/boards/'+ params.id, 
				{headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
					}
				}
			);
			window.location.href = "/boards"
		} catch (e) {
			setError(e);
		}
	}

	const modifyHandler = async () => {
		window.location.href='/board/edit/' + params.id
	}
	let images = ''
	if (board.images !== null) {
		images = <div>
		{board.images.map((image) => <img src={image} width="40%"/>)}
	</div>
	}

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
				<LikedBtn id={board.postId} likeSelection={board.likeSelection} count={board.count} what='board'/>
			</div>
			<pre className='boardContent'>
				{board.content}
			</pre>
			{images}
			<div className='select'>
				<div></div>
				<button className='modify' onClick={modifyHandler}>수정</button>
				<div>|</div>
				<button className='del' onClick={deleteHandler}>삭제</button>
				<div>|</div>
				<button className='report' onClick={ReportHandler}>신고</button>
				<div></div>
			</div>
		</div>
		<Comment/>
	</div>
}
export default BoardDetailPage;