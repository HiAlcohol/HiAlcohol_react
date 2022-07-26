import heartfill from '../img/heart_fill.png'
import heart from '../img/heart_outline.png'
import '../scss/board/BoardListItem.scss'

function Item({board}) {
	return <div className="content">
		<a href={"/board/" + board.postId}>
			<div className="subject">
				<p>{board.title}</p>
				<div className="info">
					<span>{board.nickname}</span>
					<span> | </span>
					<span>{board.createdate}</span>
				</div>
			</div>
		</a>
		<div className="like">
			<a href="#"><button id="img_btn" className="likebtn">
				<input type="image" id="likeImg" src={board.likeSelection ? heartfill: heart} />
			</button></a>
			<div id="likes" disabled="disabled">{board.count}</div>
		</div>
	</div>
}

function BoardListItem(props) {
    let board = props.board;

    return <div className='contentList'>
		{board.map(board => (<Item board={board} key={board.postId}/>))}
	</div>
    
}

export default BoardListItem;