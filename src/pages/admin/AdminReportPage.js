import Header from '../../components/Header'
import ReportBoards from '../../components/admin/ReportBoards'

function AdminReport() {
	const dummy = [
		{key: 1, id:1, title: '잭콕', userName: '유저1', createDate: '2021.10.15', visible: true},
		{key: 2, id:2, title: '잭콕', userName: '유저1', createDate: '2021.10.15', visible: false},
		{key: 3, id:3, title: '잭콕', userName: '유저1', createDate: '2021.10.15', visible: true},
		{key: 4, id:4, title: '잭콕', userName: '유저1', createDate: '2021.10.15', visible: false}
	]
	return <>
		<Header></Header>
		<ReportBoards subtitle={'신고된 게시글'} boards={dummy}/>
		<ReportBoards subtitle={'신고된 댓글이 포함된 게시글'} boards={dummy}/>
	</>
}

export default AdminReport;