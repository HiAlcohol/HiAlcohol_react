import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../scss/board/BoardWriteTemplate.scss';
import Header from "../Header";

const BoardEditTemplate = (props) => {
	const [error, setError] = useState(null);
	const params = useParams();

	const [board, setBoard] = useState({})
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
	}

	const boardEdit = async (e, content) => {
		e.preventDefault();
		try {
			const response = await axios.put('http://43.200.182.67:5000/boards/'+ params.id, 
				content,
				{headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
					}
				}
			)
			if (response.status == 200) {
				window.location.href = "/board/" + params.id;
			}
		} catch(e) {
			setError(e)
		}
	}

	if (error) return <div>{error}</div>
	return <div className='BoardWriteTemplate'>
           <form>
            <div className='main-title'>
                <Header right='edit' board={board} clickEvent={boardEdit}></Header>
                <div className='container'>
                    <div className='writeTitle'>
                        <input type='text' name="title" placeholder='제목' onChange={onChangeBoard} defaultValue={board.title}></input>
                    </div>
                    <div className='contents'>
                        <textarea name='content' placeholder='내용 입력' onChange={onChangeBoard} defaultValue={board.content}></textarea>
                    </div>
                </div>
            </div>
           </form>
        </div>;
}

export default BoardEditTemplate;