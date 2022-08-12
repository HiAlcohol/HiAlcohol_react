import axios from 'axios';
import React, { useState } from 'react';
import '../scss/board/BoardWriteTemplate.scss';
import Header from './Header';

const BoardWriteTemplate = () => {
	const [error, setError] = useState(null)
	const [board, setBoard] = useState({
		title: "",
		content: "",
		images: []
	})
	const onChangeBoard = (e) => {
		setBoard({
			...board,
			[e.target.name]: e.target.value
		})
	}
	const boardWrite = (e, board, link) => {
		e.preventDefault();
		const sendData = async () => {
			try {
				const response = await axios.post("http://43.200.182.67:5000/boards", 
					board,
					{headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					  }
					}
					)
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
           <form>
            <div className='main-title'>
                <Header right='write' board={board} clickEvent={boardWrite}></Header>
                <div className='container'>
                    <div className='writeTitle'>
                        <input type='text' name="title" placeholder='제목' onChange={onChangeBoard}></input>
                    </div>
                    <div className='contents'>
                        <textarea name='content' placeholder='내용 입력' onChange={onChangeBoard}></textarea>
                    </div>
                </div>
            </div>
           </form>
        </div>
    );
};

export default BoardWriteTemplate;