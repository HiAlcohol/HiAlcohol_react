import React, { useState } from 'react';
import '../scss/board/BoardWriteTemplate.scss';
import Header from './Header';

const BoardWriteTemplate = () => {
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
    return (
        <div className='BoardWriteTemplate'>
           <form>
            <div className='main-title'>
                <Header right='write' board={board}></Header>
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