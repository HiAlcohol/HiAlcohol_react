import '../../scss/board/BoardItem.scss'
import '../../scss/board/BoardListItem.scss'
import heart from '../../img/heart_fill.png'
import Header from '../../components/Header'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function SuggestionDetailPage() {
	const [suggestion, setSuggestion] = useState(null);
	const [error, setError] = useState(null);
	const params = useParams();

    const likeHandler = (e) => {
        e.preventDefault();
    
        axios.post('http://3.35.208.41:5000/suggestion'+params.id+'/like', {}, {headers:{}})
        .then((res) => console.log(res));
    }

	useEffect(() => {
		const fetchSuggestion = async () => {
			try {
				const response = await axios.get('http://3.35.208.41:5000/suggestion/' + params.id);
				setSuggestion(response.data.data);
				console.log(response.data.data)
			} catch(e) {
				setError(e);
			}
		};
		fetchSuggestion()
	}, []);
	if (error) return <div>에러가 발생했습니다. {error}</div>
	if (!suggestion) return <div>데이터가 없습니다.</div>
	let sugges = suggestion[0]
	return <div>
		<Header right='suggestion'></Header>
		<div className="board">
			<div className="heading">
				<div className='boardTitle'>
					<p>{sugges.title}</p>
					<div className="info">
						<span>{sugges.nickname}</span>
						<span> | </span>
						<span>{sugges.createdate}</span>
					</div>
				</div>
				<div className="like">
					<button id="img_btn" className="likebtn" onChange={likeHandler}>
						<input type="image" id="likeImg" src={heart} />
					</button>
					<div id="likes" disabled="disabled">{sugges.like_count}</div>
				</div>
			</div>
			<pre className='boardContent'>
				{sugges.content}
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
export default SuggestionDetailPage;