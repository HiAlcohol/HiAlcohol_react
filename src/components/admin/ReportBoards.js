import '../../scss/board/BoardListItem.scss'
import '../../scss/admin/Admin.scss'

function ListItem({board}) {
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
			<div className='visible'>{board.visible ? '숨김': '해제'}</div>
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
