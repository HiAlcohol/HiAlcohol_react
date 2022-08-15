import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import '../../scss/board/BoardWriteTemplate.scss';
import Header from "../Header";

const Images = styled.input`
	color:white;
	margin: 20px 0 20px 0;
	width:90%;
`
const CurImg = styled.button`
	background: initial;
	color: white;
	border: 1px solid white;
	border-radius: 5px;
	padding: 5px;
	margin: 10px 0px 0px 20px;
	display: block;
	img {
		padding: 5px;
	}
	p{
		font-size: 13px;
		cursor: pointer;
	}
`

const BoardEditTemplate = (props) => {
	const [error, setError] = useState(null);
	const params = useParams();

	const [board, setBoard] = useState({})
	const [images, setImages] = useState(null)
	useEffect(() => {
		// console.log(1)
		setBoard({
			title: props.title,
			content: props.content,
			images: props.images
		})
	}, [props])

	const onChangeBoard = (e) => {
		setBoard({
			...board,
			[e.target.name]: e.target.value
		})
		// console.log(e.target.value)
	}

	const onChangeImages = (e) => {
		// setImages(e.target.files)
		setImages(e.target.files[0])

	}

	const boardEdit = async (e, content, images) => {
		e.preventDefault();
		const fd = new FormData();
		// Object.values(images).forEach((file) => fd.append("images",file))
		if (images === null) {
			fd.append("images", props.images)
		} else {
			fd.append("images", images)
		}
		fd.append('title', content.title)
		fd.append('content', content.content)
		console.log('fd', fd)
		try {
			const response = await axios.put('http://43.200.182.67:5000/boards/'+ params.id, 
				fd,
				{headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
					"Content-Type": `multipart/form-data; `,
					}
				}
			)
			// setBoard({})
			if (response.status == 200) {
				window.location.href = "/board/" + params.id;
			}
		} catch(e) {
			setError(e)
		}
	}

	const imageDel = async (e) => {
		try {
			await axios.delete('http://43.200.182.67:5000/boards/' + params.id + '/images',
			{headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
				"Content-Type": `multipart/form-data; `,
				}
			})
		} catch(e) {
			setError(e);
		}
		setBoard({
			...board,
			images: null
		})
	}

	if (error) return <div>{error}</div>
	let preview = ''
	console.log(board.images)
	if (board.images != undefined || board.images != null) {
		preview = <CurImg onClick={imageDel}>
		<img src={board.images} name="image" width="50px"/>
		<p>{'X'}</p>
		</CurImg>
	}
	console.log('images: ', images)
	return <div className='BoardWriteTemplate'>
            <div className='main-title'>
                <Header right='edit' board={board} images={images} clickEvent={boardEdit}></Header>
                <div className='container'>
                    <div className='writeTitle'>
                        <input type='text' name="title" placeholder='제목' onChange={onChangeBoard} defaultValue={board.title}></input>
                    </div>
					<div className="images">
						{preview}
						<Images type="file" multiple="multiple" accept='image/*' name="images" onChange={onChangeImages}/>
					</div>
                    <div className='contents'>
                        <textarea name='content' placeholder='내용 입력' onChange={onChangeBoard} defaultValue={board.content}></textarea>
                    </div>
                </div>
            </div>
        </div>
}

export default BoardEditTemplate;