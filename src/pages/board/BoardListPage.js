import Header from "../../components/Header"
import BoardListItem from "../../components/BoardListItem";
import '../../scss/board/BoardList.scss'
import axios from "axios";
import { useEffect, useState } from "react";

function Boards() {
	const [boards, setBoards] = useState(null);
	const [error, setError] = useState(null);
	const [Selected, setSelected] = useState('latest');

	useEffect( () => {
		const fetchBoards = async () => {

			try {
				console.log('렌더링이 완료되었습니다!');
				const response = await axios.get(
					'http://hialcohol.p-e.kr/boards', 
					{headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					  }
					}
				);
				setBoards(response.data.data);
			} catch(e) {
				setError(e)
			}
		};
		fetchBoards();
		setSelected('latest')
	}, []);

	const selected = async (e) => {
		setSelected(e.target.value);
		const response = await axios.get(
			'http://hialcohol.p-e.kr/boards?option='+e.target.value
		);
		setBoards(response.data.data);
	}
    const board = [
        {postId: 1, title: '알쓰를 위한 편의점 칵테일', nickname: '유저', createdate: '2022.03.14', count: 8},
        {postId: 2, title: '술 테스트 게시글', nickname: '유저2', createdate: '2022.03.15', count: 2}
    ]
	if (error) return <div>에러가 발생했습니다. {error}</div>
	if (!boards) return <div>데이터가 없습니다.</div>
    return <div>
        <Header right="board"></Header>
        <div className="dropdown">
			<select id="singer" name="order" onChange={selected} value={Selected}>
				<option value="latest" key="latest">최신순</option>
				<option value="like" key="like">좋아요순</option>
			</select>
        </div>
        <BoardListItem board={boards} link='board'></BoardListItem>
    </div>
}

export default Boards;