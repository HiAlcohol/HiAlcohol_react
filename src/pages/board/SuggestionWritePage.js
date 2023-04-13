import { useState } from "react";
import Api from '../../Api.js';
import React from 'react';
import '../../scss/board/BoardWriteTemplate.scss'
import Header from '../../components/Header';

const SuggestionWritepage = () => {

    const [title, SetTitle] = useState("")
    const [content, SetContent] = useState("")
	const [error, setError] = useState(null);

    const titleHandler = (e) => {
        e.preventDefault();
        SetTitle(e.target.value);
    }
    const contentHandler = (e) => {
        e.preventDefault();
        SetContent(e.target.value);
    }

    const suggeWrite = (e) => {
		e.preventDefault();
        const submitHandler = async () => {
            console.log(title, content);
    
            let body = {
                title : title,
                content : content
            };
            console.log('\?');
            try {
                console.log('렌더링이 완료되었습니다!');
                const response = await  Api.post('/suggestion', body,
                {headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  }
                });
                
            } catch(e) {
                setError(e);
            }
           
        window.location.replace("suggestions");
        };
        submitHandler();
	}
    

  

    
    return (
        <div className='BoardWriteTemplate'>
           <form onSubmit={suggeWrite}>
            <div className='main-title'>
                <Header right='suggeswrite'></Header>
                <div className='container'>
                    <div className='writeTitle'>
                        <input type='text' value={title} name='title' placeholder='제목' onChange={titleHandler}></input>
                    </div>
                    <br />
                    <div className='contents'>
                        <textarea name='content' value={content} placeholder='내용 입력' onChange={contentHandler}></textarea>
                    </div>
                </div>
            </div>
           </form>
        </div>
    )
}

export default SuggestionWritepage;