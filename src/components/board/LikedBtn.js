import axios from 'axios'
import { useParams } from 'react-router-dom'
import heartfill from '../../img/heart_fill.png'
import heart from '../../img/heart_outline.png'

const LikedBtn = (props) => {
	const liked = async () => {
		if (props.likeSelection === true) {
			// 취소
			const response = await axios.delete('http://43.200.182.67:5000/board/' + props.id + '/like',
			{headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			  }
			});
			console.log('취소')
		} else {
			// 스크랩
			const response = await axios.post('http://43.200.182.67:5000/board/' + props.id + '/like', null,
			{headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			  }
			});
			console.log('스크랩')
		}
		window.location.reload();
	}
	return <div className="like" onClick={liked}>
			<a href="#"><button id="img_btn" className="likebtn" >
				<input type="image" id="likeImg" src={props.likeSelection ? heartfill: heart} />
			</button></a>
			<div id="likes" disabled="disabled">{props.count}</div>
		</div>
}

export default LikedBtn