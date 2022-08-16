import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react';
import '../../scss/board/BoardWriteTemplate.scss'
import Header from '../../components/Header';
import { Link, useParams } from 'react-router-dom'

const SuggestionWritepage = () => {

    const [title, SetTitle] = useState("")
    const [content, SetContent] = useState("")
    const [suggestion, setSuggestion] = useState(null);
	const [error, setError] = useState(null);
	const params = useParams();

	useEffect(() => {
		const fetchSuggestion = async () => {
			try {
				const response = await axios.get('https://hialcohol.p-e.kr/suggestion/' + params.id);
				setSuggestion(response.data.data);
				// console.log(response.data.data)
			} catch(e) {
				setError(e);
			}
		};
		

		fetchSuggestion()
	}, []);
	if (error) return <div>에러가 발생했습니다. {error}</div>
	if (!suggestion) return <div>데이터가 없습니다.</div>

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
            id : params.id,
            title : title ? title : suggestion[0].title,
            content : content ? content : suggestion[0].content
        };
        console.log(body)
    
        axios.patch('https://hialcohol.p-e.kr/suggestion/'+params.id, body,
        {headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		  }
		})
        .then((res) => console.log(res));
        
    window.location.replace("/suggestions");
    }

    
    return (
        <div className='BoardWriteTemplate'>
           <form onSubmit={submitHandler}>
            <div className='main-title'>
                <Header right='suggeswrite'></Header>
                <div className='container'>
                    <div className='writeTitle'>
                        <input type='text' defaultValue={suggestion[0].title} name='title' onChange={titleHandler}></input>
                    </div>
                    <br />
                    <div className='contents'>
                        <textarea name='content' defaultValue={suggestion[0].content} placeholder='내용 입력' onChange={contentHandler}></textarea>
                    </div>
                </div>
            </div>
           </form>
        </div>
    )
}

export default SuggestionWritepage;