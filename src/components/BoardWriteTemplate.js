import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import '../scss/board/BoardWriteTemplate.scss';
import Header from './Header';

const Images = styled.input`
	color:white;
	margin: 20px 0 20px 0;
	width:90%;
`

const BoardWriteTemplate = () => {
	const [error, setError] = useState(null)
	const [board, setBoard] = useState({
		title: "",
		content: ""
	})
	const [images, setImages] = useState(null)
	const onChangeBoard = (e) => {
		setBoard({
			...board,
			[e.target.name]: e.target.value
		})
	}
	const onChangeImages = (e) => {
		// setImages(e.target.files)
		setImages(e.target.files[0])
	}

	const boardWrite = (e, board, link, images) => {
		e.preventDefault();
		const sendData = async () => {
			const fd = new FormData();
			// Object.values(images).forEach((file) => fd.append("images", file))
			fd.append("images", images)
			fd.append("title", board.title)
			fd.append("content", board.content)
			try {
				const response = await axios.post("http://hialcohol.p-e.kr/boards", 
					fd,
					{headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					  }
					})
				window.location.href = link
			} catch (e) {
				setError(e);
			}
		}
		sendData();
	}
	if (error) return <div>{error}</div>;
    return (
        <div className='BoardWriteTemplate'>
            <div className='main-title'>
                <Header right='write' board={board} images={images} clickEvent={boardWrite}></Header>
                <div className='container'>
                    <div className='writeTitle'>
                        <input type='text' name="title" placeholder='제목' onChange={onChangeBoard}></input>
                    </div>
					<div className="images">
						{/* <Images type="file" multiple="multiple" accept='image/*' onChange={onChangeImages}/> */}
						<Images type="file" accept='image/*' onChange={onChangeImages}/>
					</div>
                    <div className='contents'>
                        <textarea name='content' placeholder='내용 입력' onChange={onChangeBoard}></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardWriteTemplate;