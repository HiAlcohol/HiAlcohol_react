import '../scss/board/BoardListItem.scss'
import LikedBtn from './board/LikedBtn'

function Item(props) {
    const board = props.board
    const link = props.link

    let linkIs = ""
	let key = ''
    if (link === 'board'){
        linkIs = "/board/" 
		key = board.postId
    }
    else if(link === 'suggestion') {
        linkIs = "/suggestion/" 
		key = board.suggestionId
    }

	return <div className="content">
		<a href={linkIs + key}>
			<div className="subject">
				<p>{board.title}</p>
				<div className="info">
					<span>{board.nickname}</span>
					<span> | </span>
					<span>{board.createdate}</span>
				</div>
			</div>
		</a>

		<LikedBtn id={key} likeSelection={board.likeSelection} count={board.count} what={link}/>
		

	</div>
}

function BoardListItem(props) {

    let board = props.board;
    let link = props.link;
	let key
	if (link === 'board'){
		key = 'postID';
	}
	else {
		key = 'suggestionId';
	}

	if (board.length === 0) return <p className='contentList'>데이터가 없습니다</p>
    return <div className='contentList'>
		{board.map(board => (<Item board={board} link= {link} key= {board.key}/>))}
	</div>
    
}

export default BoardListItem;