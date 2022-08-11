import '../../scss/board/BoardListItem.scss'
import '../../scss/admin/Admin.scss'
import axios from "axios";

function ListItem({board}) {
	const reportHandler = (e) => {
        e.preventDefault();

        axios.patch('http://43.200.182.67:5000/admin/reports/board/'+board.id, null,
        {headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		  }
		})
        .then((res) => console.log(res));
        
    }


	return <div className="content">
			<a href={"/board/" + board.id}>
				<div className="subject">
					<p>{board.title}</p>
					<div className="info">
						<span>{board.userName}</span>
						<span> | </span>
						<span>{board.createDate}</span>
					</div>
				</div>
			</a>
			<div className='visible' onClick={reportHandler}>{board.visible ? '숨김': '해제'}</div>
		</div>
}

function ReportBoards({subtitle, boards}) {
	return <>
		<div>
			<p className="admin_subtitle">{'| '}{subtitle}{' |'}</p>
			<div className='contentList'>
				{boards.map(board => (<ListItem board={board} key={board.id}/>))}
			</div>
		</div>
	</>
}

export default ReportBoards;
