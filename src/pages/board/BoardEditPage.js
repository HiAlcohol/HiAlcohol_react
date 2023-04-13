import Api from '../../Api.js';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import BoardEditTemplate from "../../components/board/BoardEditTemplate";

const BoardEdit = () => {
	const [error, setError] = useState(null);
	const params = useParams();
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [images, setImages] = useState(null);
	useEffect(() => {
		const initBoard = async () => {
			try {
				const response = await Api.get('/boards/' + params.id,
					{headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					}
					}
				);
				setTitle(response.data.data.title);
				setContent(response.data.data.content);
				if (response.data.data.images) {
					setImages(response.data.data.images);
				}
			} catch(e) {
				setError(e);
			}
		}
		initBoard();
	}, [])
	
	console.log('title:', title)
	console.log('content:', content)

	if (error) return <div>{error}</div>;
	return <>
	<BoardEditTemplate title={title} content={content}
		images={images}/>
		</>
}

export default BoardEdit;