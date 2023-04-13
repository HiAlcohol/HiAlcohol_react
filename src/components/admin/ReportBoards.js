import '../../scss/board/BoardListItem.scss'
import '../../scss/admin/Admin.scss'
import Api from '../../Api.js';

function BoardListItem({board}) {
	const reportHandler = async (e) => {
        e.preventDefault();

        await Api.patch('/admin/reports/board/'+board.id, null,
        {headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		  }
		})
        .then((res) => console.log(res));
		window.location.reload(true);
        
    }
	return <div className="content">
			<a href={"/board/" + board.id}>
				<div className="subject">
					<p>{board.title}</p>
					<div className="info">
						<span>{board.nickname}</span>
						<span> | </span>
						<span>{board.createdate}</span>
						<span> | </span>
						<span>신고 누적 {board.count}</span>
					</div>
				</div>
			</a>
			<div className='visible' onClick={reportHandler}>{board.blind ? '해제': '숨김'}</div>
		</div>
}
function ListItem({board}) {

	const reportHandler = (boardId, commentId) => {

        // e.preventDefault();

        Api.patch('/admin/reports/board/'+boardId+'/comment/'+commentId, null,
        {headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		  }
		})
        .then((res) => console.log(res));
		window.location.reload(true);
    }


	const commentItem=[]
	for (let i = 0; i<board.length;i++) {
		commentItem.push(
			<>
			<div className="content">
				<a href={"/board/" + board[i].post.id}>
					<div className="subject">
						<p>{board[i].post.title}</p>
						<div className="info">
						<span>{board[i].comment.content}</span>
							<span> | </span>
							<span>신고 누적 {board[i].count}</span>
						</div>
					</div>
				</a>
				<div className='visible' onClick={() => {
			reportHandler(board[i].post.id, board[i].comment.id)
                 }}>{board[i].comment.blind ? '해제': '숨김'}</div>
			</div>
			</>
		)
	}
	
	return (
		
			<div>{commentItem}</div>
			
	)
}
function ReportBoards({boards, comments}) {
	const comboard = comments.post
	return <>
		<div>
			<p className="admin_subtitle">{'| '}신고된 게시글{' |'}</p>
			<div className='contentList'>
				{boards.map(board => (<BoardListItem board={board} key={board.id}/>))}
			</div>
		</div>
		<div>
			<p className="admin_subtitle">{'| '}신고된 댓글이 포함된 게시글{' |'}</p>
			<div className='contentList'>
				<ListItem board={comments}/>
			</div>
		</div>
	</>
}

export default ReportBoards;
