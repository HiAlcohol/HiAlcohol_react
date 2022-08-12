import '../../scss/board/BoardListItem.scss'
import '../../scss/admin/Admin.scss'
import axios from "axios";
import { useState } from 'react';

function BoardListItem({board}) {
	const reportHandler = (e) => {
        e.preventDefault();

        axios.patch('http://43.200.182.67:5000/admin/reports/board/'+board.id, null,
        {headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		  }
		})
        .then((res) => console.log(res));
        
    }
	return <div className="content">
			<a href={"/board/" + board.id}>
				<div className="subject">
					<p>{board.title}</p>
					<div className="info">
						<span>{board.userName}</span>
						<span> | </span>
						<span>{board.createDate}</span>
					</div>
				</div>
			</a>
			<div className='visible' onClick={reportHandler}>{board.visible ? '숨김': '해제'}</div>
		</div>
}
function ListItem({board}) {
	const [boardId, setBoardId] = useState(null);
	const [commentId, setCommentId] = useState(null);
	const [error, setError] = useState(null);
	const reportHandler = (boardId, commentId) => {
		console.log(boardId, commentId)

        // e.preventDefault();

        axios.patch('http://43.200.182.67:5000/admin/reports/board/'+boardId+'/comment/'+commentId, null,
        {headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		  }
		})
        .then((res) => console.log(res));
    }
	const changeKey = (i) => {
		console.log(i)
        try {
            setBoardId(board[i].post.id)
			setCommentId(board[i].comment.id)
			
			reportHandler(boardId, commentId)
        } catch(e) {
            setError(e);
        }
    };


	const commentItem=[]
	for (let i = 0; i<board.length;i++) {
		commentItem.push(
			<>
			<div className="content">
				<a href={"/board/" + board[i].post.id}>
					<div className="subject">
						<p>{board[i].post.title}</p>
						<div className="info">
							<span>댓글 내용</span>
							<span> | </span>
							<span>{board[i].comment.content}</span>
						</div>
					</div>
				</a>
				<div className='visible' onClick={() => {
					changeKey(i)
                    
                 }}>{board[i].visible ? '숨김': '해제'}</div>
			</div>
			</>
		)
	}
	
	return (
		
			<div>{commentItem}</div>
			
	)
}
function ReportBoards({boards, comments}) {
	// console.log(">>>", comments)
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
