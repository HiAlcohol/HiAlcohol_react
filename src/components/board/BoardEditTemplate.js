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
	
	console.log('props: ', props)
	console.log('boardEditTemplate', board)

	const onChangeBoard = (e) => {
		setBoard({
			...board,
			[e.target.name]: e.target.value
		})
		console.log(board)
	}

	const boardEdit = async (e, content) => {
		console.log(content)
		e.preventDefault();
		const response = await axios.put('http://43.200.182.67:5000/boards/'+ params.id, 
			content,
			{headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
				}
			}
		)
		console.log('status:', response.status)
		if (response.status == 200) {
			// window.location.href = "/boards/" + params.id;
		}
	}

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