import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import '../scss/Comment.scss'

function Comment() {

	const [comments, setComments] = useState(null);
	const [error, setError] = useState(null);
	const params = useParams();
	useEffect(() => {
		const fetchComment = async () => {
			try {
				const response = await axios.get('http://3.35.208.41:5000/boards/' + params.id + '/comments');
				setComments(response.data.data);
			} catch(e) {
				setError(e);
			}
		}
		fetchComment();
	}, []);
	var comList = []
	
	if (error) return <div>에러가 발생했습니다. {error}</div>
	if (!comments) return <div>댓글 api 호출 실패</div>

	const commentReportHandler = (i) => {
        axios.post('http://3.35.208.41:5000/reports/board/'+params.id+'/comment/'+comments[i].commentId, null,
		{headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		  }
		})
        .then((res) => console.log(res));
    }

	for (let i = 0; i < comments.length; i++) {
		
		if (i !== 0) {
			comList.push(<hr/>)
		}
		comList.push(<div className="comview">				
			<div className='com_header'>
				<div className="com_nick">{comments[i].nickname}</div>
				<div>X</div>
			</div>
			<pre className='com_content'>{comments[i].content}</pre>
			<div className='com_footer'>
				<div className='date'>{comments[i].createdate}</div>
				<div className='report' onClick={() => {
					commentReportHandler(i)
                 }}>신고</div>
			</div>
			
		</div>)
	}
	if (comList.length == 0) {
		comList.push(<div className='comview'>아직 등록된 댓글이 없습니다.</div>)
	}
	
	return <div>
		<div className="comment">
		{comList}
		</div>
		<div className='com_container'>
			<textarea className='write_com' placeholder='댓글을 입력해주세요'/>
			<input className='ok' type="submit" value="등록"/>
		</div>
	</div>
}

export default Comment;