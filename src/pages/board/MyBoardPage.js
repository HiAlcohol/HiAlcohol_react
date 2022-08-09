import axios from "axios";
import { useEffect, useState } from "react";
import BoardListItem from "../../components/BoardListItem";
import Header from "../../components/Header";

function MyBoards() {
	const [board, setBoard] = useState(null);
	const [error, setError] = useState(null)
	console.log(1)
	useEffect(() => {
		const fetchBoard = async () => {
			console.log(1);
			try {
				if (localStorage.getItem("token")) {
					const response = await axios.get('http://43.200.182.67:5000/users/boards', 
					{headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					}
					});
					console.log(response.data.data)
					setBoard(response.data.data)
				}
			} catch(e) {
				setError(e)
			}
		}
		fetchBoard();
	}, [])
    // const board = [
    //     {id: 1, title: '알쓰를 위한 편의점 칵테일', userName: '유저', createDate: '2022.03.14', likedCnt: 8},
    //     {id: 2, title: '술 테스트 게시글', userName: '유저2', createDate: '2022.03.15', likedCnt: 2}
    // ]
	console.log(1)
	if (error) return <div>{error}</div>
	const list = (board) ?<BoardListItem board={board}/>:<p>data 없음</p>
    return <div>
        <Header right="board"></Header>
        <div className="dropdown">
            <form action="/board" method="post" className="sort">
                <select id="singer" name="order">
                    <option value="date" selected>최신순</option>
                    <option value="likes">좋아요순</option>
                </select>
            </form>
        </div>
        {list}
    </div>
}

export default MyBoards;