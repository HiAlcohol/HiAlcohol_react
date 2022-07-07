import '../scss/Comment.scss'

function Comment() {
	// api comment
	const comment = [
		{id: 1, nickname: 'user', content: 'test content', createdate: '2022-07-03'},
		{id: 2, nickname: 'user2', content: 'test content2', createdate: '2022-05-03'}
	]
	var comList = []
	console.log('comment', comment)
	for (let i = 0; i < comment.length; i++) {
		console.log('*')
		if (i !== 0 && i !== comment.length / 2 - 1) {
			comList.push(<hr/>)
		}
		comList.push(<div className="comview">
			<div className='com_header'>
				<div className="com_nick">{comment[i].nickname}</div>
				<div>X</div>
			</div>
			<pre className='com_content'>{comment[i].content}</pre>
			<div className='date'>{comment[i].createdate}</div>
		</div>)
		console.log('com', comList)
	}
	
	return <div>
		<div className="comment">
		{comList}
		</div>
		<div className='com_container'>
			<textarea className='write_com' placeholder='댓글을 입력해주세요'/>
			<input className='ok' type="submit" value="등록"/>
		</div>
	</div>
}

export default Comment;