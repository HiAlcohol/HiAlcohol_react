import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react';
import '../../scss/board/BoardWriteTemplate.scss'
import Header from '../../components/Header';

const SuggestionWritepage = () => {

    const [title, SetTitle] = useState("")
    const [content, SetContent] = useState("")

    const titleHandler = (e) => {
        e.preventDefault();
        SetTitle(e.target.value);
    }
    const contentHandler = (e) => {
        e.preventDefault();
        SetContent(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(title, content);

        let body = {
            title : title,
            content : content
        };
    
        axios.post('http://3.35.208.41:5000/suggestion', body,
        {headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		  }
		})
        .then((res) => console.log(res));
    }

    
    return (
        <div className='BoardWriteTemplate'>
           <form onSubmit={submitHandler}>
            <div className='main-title'>
                <Header right='write'></Header>
                <div className='container'>
                    <div className='writeTitle'>
                        <input type='text' value={title} name='title' placeholder='제목' onChange={titleHandler}></input>
                    </div>
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