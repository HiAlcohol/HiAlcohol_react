import axios from "axios";
import { useEffect, useState } from "react";
import BoardListItem from "../components/BoardListItem";
import Header from "../components/Header";

function LikeList() {
    const board = [
        {id: 1, title: '알쓰를 위한 편의점 칵테일', userName: '유저', createDate: '2022.03.14', likedCnt: 8},
        {id: 2, title: '술 테스트 게시글', userName: '유저2', createDate: '2022.03.15', likedCnt: 2}
    ]
	const [boards, setBoards] = useState(null);
	const [error, setError] = useState(null);
	const [Selected, setSelected] = useState('latest');

	useEffect( () => {
		const fetchBoards = async () => {

			try {
				console.log('렌더링이 완료되었습니다!');
				const response = await axios.get(
					'http://hialcohol.p-e.kr/users/likes',
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
		// header 에 토큰 추가
		const response = await axios.get(
			'http://hialcohol.p-e.kr/users/likes'
		);
		setBoards(response.data.data);
	}

	if (error) return <div>에러가 발생했습니다. {error}</div>
	if (!boards) return <p>데이터가 없습니다.</p>
	
    return <div>
        <Header right="board"></Header>
        <BoardListItem board={boards}></BoardListItem>
    </div>
}

export default LikeList;