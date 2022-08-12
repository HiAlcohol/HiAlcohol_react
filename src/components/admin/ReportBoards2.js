import '../../scss/board/BoardListItem.scss'
import '../../scss/admin/Admin.scss'
import axios from "axios";
import { useState } from 'react';

function BoardListItem({board}) {
	const[boardId, setBoardId] = useState(null);

	const reportHandler = (e) => {
        e.preventDefault();
		console.log("ID", boardId)

        axios.patch('http://43.200.182.67:5000/admin/reports/board/'+board.id, null,
        {headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		  }
		})
        .then((res) => console.log(res));
        
    }
	const boardItem=[]
	for (let i = 0; i<board.length;i++) {
		
		boardItem.push(
			<>
			<div className="content">
				<a href={"/board/" + board[i].id}>
					<div className="subject">
						<p>{board[i].title}</p>
						<div className="info">
							<span>{board[i].userName}</span>
							<span> | </span>
							<span>{board[i].createDate}</span>
						</div>
					</div>
				</a>
				{/* <div className='visible' onClick={() => {
					setBoardId(board[i].id)
                    reportHandler()
                 }}>
					{board[i].visible ? '숨김': '해제'}
				</div> */}
				<div className='visible' onClick={reportHandler}>{board[i].visible ? '숨김': '해제'}</div>
			</div>
			</>
		)
	}
	
	return (
		
		<div className='contentList'>
			<div>{boardItem}</div>
		</div>
			
	)
}
function ListItem({board}) {
	const commentId = 0
	const reportHandler = (e) => {
        e.preventDefault();

        axios.patch('http://43.200.182.67:5000/admin/reports/board/'+board.id+'/comment/'+commentId, null,
        {headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		  }
		})
        .then((res) => console.log(res));
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
							<span>댓글 내용</span>
							<span> | </span>
							<span>{board[i].comment.content}</span>
						</div>
					</div>
				</a>
				<div className='visible' onClick={reportHandler}>{board[i].visible ? '숨김': '해제'}</div>
			</div>
			</>
		)
	}
	
	return (
		
		<div className='contentList'>
			<div>{commentItem}</div>
		</div>
			
	)
}

function ReportBoards2({boards, comments}) {
	// console.log(">>>", comments)
	const comboard = comments.post
	return <>
		<div>
			<p className="admin_subtitle">{'| '}신고된 게시글{' |'}</p>
			<BoardListItem board={boards}/>
		</div>
		<div>
			<p className="admin_subtitle">{'| '}신고된 댓글이 포함된 게시글{' |'}</p>
			<ListItem board={comments}/>
		</div>
	</>
}

export default ReportBoards2;
