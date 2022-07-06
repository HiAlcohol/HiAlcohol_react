import '../scss/BoardItem.scss'
import '../scss/BoardListItem.scss'
import heart from '../img/heart_fill.png'
import Header from '../components/Header'

function BoardDetailPage(props) {
	const dummy = {
		id: 1,
		title: '알쓰를 위한 편의점 칵테일',
		content: '칵테일 본문 미나얼미ㅏㄴ어림나어림낭ㄹㅁ리나어리만ㅇ',
		userName: '유저',
		createDate: '2022.03.14',
		likedCnt: 8
	}
	return <div>
		<Header right='board'></Header>
		<div className="board">
			<div className="heading">
				<div className='boardTitle'>
					<p>{dummy.title}</p>
					<div className="info">
						<span>{dummy.userName}</span>
						<span> | </span>
						<span>{dummy.createDate}</span>
					</div>
				</div>
				<div className="like">
					<a href="#"><button id="img_btn" class="likebtn">
						<input type="image" id="likeImg" src={heart} />
					</button></a>
					<div id="likes" disabled="disabled">{dummy.likedCnt}</div>
				</div>
			</div>
			<pre className='boardContent'>
				{dummy.content}
			</pre>
			<div className='select'>
				<div></div>
				<div>수정</div>
				<div>|</div>
				<div className='del'>삭제</div>
				<div></div>
			</div>
		</div>
	</div>
}
export default BoardDetailPage;