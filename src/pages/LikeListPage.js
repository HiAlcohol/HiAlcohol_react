import BoardListItem from "../components/BoardListItem";
import Header from "../components/Header";

function LikeList() {
    const board = [
        {id: 1, title: '알쓰를 위한 편의점 칵테일', userName: '유저', createDate: '2022.03.14', likedCnt: 8},
        {id: 2, title: '술 테스트 게시글', userName: '유저2', createDate: '2022.03.15', likedCnt: 2}
    ]
	
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
        <BoardListItem board={board}></BoardListItem>
    </div>
}

export default LikeList;