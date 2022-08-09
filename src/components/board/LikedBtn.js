import axios from 'axios'
import { useParams } from 'react-router-dom'
import heartfill from '../../img/heart_fill.png'
import heart from '../../img/heart_outline.png'

const LikedBtn = (props) => {
	console.log(props)
	const link = props.what;

	const liked = async () => {
		if (props.likeSelection === true) {
			const response = await axios.delete('http://3.36.153.6/'+link+'/' + props.id + '/like',
			{headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			  }
			});
			console.log('취소')
		} else {
			const response = await axios.post('http://3.36.153.6/'+link+'/' + props.id + '/like', null,
			{headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			  }
			});
			console.log('좋아요')
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